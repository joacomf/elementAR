import $ from 'jquery';
import ElectronesGenerador from './ElectronesGenerador';
'use strict';

class OrbitasGenerador {

    constructor(configuracion) {
        this.configuracion = configuracion;
        this.componente = null;
        this.generar();
    }

//Ver lectura archivo configelectronica, ver el seteo de posiciones electrones. 
    generar() {
        this.componente = $('<a-entity></a-entity>');

        let radioGeneral = 7;
        let constanteDeCrecimiento = 1;

        let cE = this.configuracion.configuracionElectronica;

        for(const level in cE){     
            for(const sublevel in cE[level]){
                    
                let radio = radioGeneral + constanteDeCrecimiento;
                let nuevaOrbita = $('<a-entity></a-entity>')
                                    .attr('rotation', '90 0 0')
                                    .attr('geometry', 'primitive: ring; radiusInner: '+ radio +'; radiusOuter:'+ (radio + 0.1))
                                    .attr('material', 'side: double')  
                                    .attr('scale', '0.4 0.4 0.4'); //Por que si no lo pongo aca me lo hace mal                      
                this.componente.append(nuevaOrbita);
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

export default OrbitasGenerador;



