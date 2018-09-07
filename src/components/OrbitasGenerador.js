import $ from 'jquery';
import ElectronesGenerador from './ElectronesGenerador';
'use strict';

class OrbitasGenerador {

    constructor(configuracion) {
        this.configuracion = configuracion;
        this.componente = null;
        this.generar();
    }

    generar() {
        this.componente = $('<a-entity></a-entity>');

        let radioGeneral = this.configuracion.radioAtomico * 0.2;
        let constanteDeCrecimiento = 0;

        let cE = this.configuracion.configuracionElectronica;

        for(let i=cE.length-1; i>=0; i--){     
            for(let j=cE[i].length-1; j>=0; j--){
                let radio = radioGeneral - constanteDeCrecimiento;
                let nuevaOrbita = $('<a-entity></a-entity>')
                .attr('rotation', '90 0 0')
                .attr('geometry', 'primitive: ring; radiusInner: '+ radio +'; radiusOuter:'+ (radio + 0.1))
                .attr('material', 'side: double')  
                .attr('scale', '0.4 0.4 0.4'); //REVISAR JERARQUIA DE ESCALAS                    
                this.componente.append(nuevaOrbita);
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

export default OrbitasGenerador;



