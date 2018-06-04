import $ from 'jquery';

'use strict';

class ProtonesNeutronesGenerador {

    constructor(configuracion){
        this.configuracion = configuracion;
        this.componente = null;

        this.generar();
    }

    generar() {
        this.componente = $('<a-entity></a-entity>').attr('position', '-0.1 0 -0.9');
        let proton = $('<a-entity></a-entity>')
                        .attr('mixin', 'proton')
                        .attr('position', '-0.3 0.9 1');

        this.componente.append(proton);
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }
}

export default ProtonesNeutronesGenerador;