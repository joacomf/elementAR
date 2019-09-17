import $ from 'jquery';

'use strict';

class ProtonesNeutronesGenerador {

    constructor(numeroAtomico){
        this.numeroAtomico = numeroAtomico;
        this.componente = null;

        this.generar();
    }

    generar() {
        this.componente = $('<a-entity></a-entity>').attr('position', '-0.1 0 -0.9');

        for (let index = 0; index < this.numeroAtomico; index++) {

            var proton_x = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";
            var proton_y = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";
            var proton_z = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";

            var posicion_proton = proton_x + proton_y + proton_z;

            var neutron_x = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";
            var neutron_y = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";
            var neutron_z = Number( Math.random() * 1.8 - 0.9).toFixed(2) + " ";

            var posicion_neutron = neutron_x + neutron_y + neutron_z;

            let proton = $('<a-entity></a-entity>')
                            .attr('mixin', 'proton')
                            .attr('position', posicion_proton);
            
            let neutron = $('<a-entity></a-entity>')
                            .attr('mixin', 'neutron')
                            .attr('position', posicion_neutron);
    
            this.componente.append(proton);
            this.componente.append(neutron);
        }
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }
}

export default ProtonesNeutronesGenerador;