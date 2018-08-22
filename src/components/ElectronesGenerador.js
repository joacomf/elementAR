import $ from 'jquery';

'use strict';

class ElectronesGenerador {

    constructor() {
        this.generar();
    }

    generar(x, y, z) {

        let posicion = x + " " + y + " " + z;

        let componente = $('<a-entity></a-entity>').attr('position', '0 0 0').attr('scale', '0.4 0.4 0.4');

        let animacion = $('<a-animation></a-animation>').attr('mixin', 'movimiento').attr('dur', '2000');
        let mixin = $('<a-entity></a-entity>').attr('mixin', 'electron').attr('position', posicion);

        componente.append(animacion);
        componente.append(mixin);

        return componente;
    }
}

export default ElectronesGenerador;