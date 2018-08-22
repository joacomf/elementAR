import $ from 'jquery';
import Nucleo from './Nucleo';
import OrbitasGenerador from './OrbitasGenerador';
import ElectronesGenerador from './ElectronesGenerador';
import configuracionElectronica from '..//datos/configuracion-electronica';

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
    }
    
    insertarNucleo() {

        let numeroAtomico = this.configuracion.numeroAtomico;
        let configuracionElectronica = this.configuracion.configuracionElectronica;

        let container = $('<a-entity></a-entity>')
                            .attr('rotation', '0 0 0')
                            .attr('position', '0 0 0')
                            .attr('scale', '0.4 0.4 0.4');

        let nucleo = new Nucleo(numeroAtomico);
       // let orbitas = new OrbitasGenerador(this.configuracion);

        container.append(nucleo.componente);
        this.componente.append(container);
    }

    insertarOrbitas(){
        let orbitas = new OrbitasGenerador(this.configuracion.nombre);
        this.componente.children().append(orbitas.componente);
    }

    calcularPosicionElectron(cantidadElectrones, radio){
        let posiciones = {};
        let x=0;
        let y=0;
        let z=0;
        let incremento = (2*Math.PI)/(cantidadElectrones);
        let angulo = 0;
        for(let i = 0; i<cantidadElectrones; i++){
            x = radio*(Math.cos(angulo));
            z = radio*(Math.sin(angulo));
            angulo += incremento;
            posiciones[i] = {'x': x, 'y': y, 'z': z};      
        }
        return posiciones;                                                                                                                                                                             

    }

    insertarElectrones(){
        
        let cE = configuracionElectronica[this.configuracion.nombre];
        let radioGeneral = 7;
        let constanteDeCrecimiento = 1;

        for (const level in cE) {  
                
            for(const sublevel in cE[level]){
                    
                let radio = radioGeneral + constanteDeCrecimiento;
                let electronGenerador = new ElectronesGenerador();
                let posiciones = this.calcularPosicionElectron(cE[level][sublevel], radio);     
                for (let i = 0; i < cE[level][sublevel]; i++) {    
                    let x = posiciones[i]['x']; 
                    let y = posiciones[i]['y'];
                    let z = posiciones[i]['z'];
                    let electron_componente = electronGenerador.generar(x,y,z); 
                    this.componente.children().append(electron_componente); //hago el append dentro de la entidad grande                
                    
                }
                constanteDeCrecimiento = constanteDeCrecimiento + 1;
                
            }
            radioGeneral = radioGeneral + 3;                
                
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