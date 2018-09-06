import $ from 'jquery';
import Nucleo from './Nucleo';
import OrbitasGenerador from './OrbitasGenerador';
import ElectronesGenerador from './ElectronesGenerador';

'use strict';

class Atomo {

    constructor(configuracion) {
        
        this.configuracion = configuracion;
        this.componente = null;

        this.crear();
    }
    
    crear() {
        this.componente = $('<a-marker></a-marker>')
                            .attr('type', 'barcode')
                            .attr('value', this.configuracion.numeroAtomico);
        this.insertarNucleo();
        this.insertarElectrones();
        this.insertarOrbitas();
        this.insertarRadio();
    }
    
    insertarNucleo() {

        let numeroAtomico = this.configuracion.numeroAtomico;
        let configuracionElectronica = this.configuracion.configuracionElectronica;

        let container = $('<a-entity></a-entity>')
                            .attr('rotation', '0 0 0')
                            .attr('position', '0 0 0')
                            .attr('scale', '0.4 0.4 0.4');

        let nucleo = new Nucleo(numeroAtomico);
        container.append(nucleo.componente);
        this.componente.append(container);
        
    }

    insertarOrbitas(){
        let orbitas = new OrbitasGenerador(this.configuracion);
        this.componente.children().append(orbitas.componente);
    }

    insertarRadio(){
        let radio_escalado = (this.configuracion.radioAtomico*0.2);
        let radio = this.configuracion.radioAtomico;
        let container =  $('<a-entity id="radio"></entity>').attr('scale','0.4 0.4 0.4').attr('line', 'color: yellow; start: 0, 0, 0; end: '+ radio_escalado +', 0, 0');
        let containerEtiquetaTexto = $('<a-entity id="texto-radio"></entity>').attr('text', 'color: yellow; xOffset: 12; width: 10; value: Radio atomico: '+ radio)
        .attr('rotation', '-90 0 0');
        this.componente.children().append(container);
        this.componente.children().append(containerEtiquetaTexto);
    }

    calcularPosicionElectron(cantidadElectrones, radio){
        let posiciones = {};
        let x=0;
        let y=0;
        let z=0;
        let incremento = (2*Math.PI)/(cantidadElectrones);
        let angulo = Math.random()*2*Math.PI;
        for(let i = 0; i<cantidadElectrones; i++){
            x = radio*(Math.cos(angulo));
            z = radio*(Math.sin(angulo));
            angulo += incremento;
            posiciones[i] = {'x': x, 'y': y, 'z': z};      
        }
        return posiciones;                                                                                                                                                                             

    }

    insertarElectrones(){
        
        let cE = this.configuracion.configuracionElectronica;
        //let radioGeneral = 7;
        let radioGeneral = this.configuracion.radioAtomico * 0.2 ;
        let constanteDeCrecimiento = 0;

        for (let i=cE.length-1; i>=0; i--) {  
                
            for(let j=cE[i].length-1; j>=0; j--){
                    
                let radio = radioGeneral - constanteDeCrecimiento;
                let electronGenerador = new ElectronesGenerador();
                let posiciones = this.calcularPosicionElectron(cE[i][j], radio);     
                for (let k = 0; k < cE[i][j]; k++) {    
                    let x = posiciones[k]['x']; 
                    let y = posiciones[k]['y'];
                    let z = posiciones[k]['z'];
                    let electron_componente = electronGenerador.generar(x,y,z); 
                    this.componente.children().append(electron_componente); //hago el append dentro de la entidad grande                
                    
                }
                constanteDeCrecimiento = constanteDeCrecimiento + 1;
                
            }
            radioGeneral = radioGeneral - 3;                
                
        } 
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }

}

export default Atomo;