import $ from 'jquery';

'use strict';

class ElectronesGenerador {

    constructor(cantidad) {
        this.componente = null;
        this.cantidad = cantidad;

        this.generar();
    }

    generar() {
        
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }
}

export default ElectronesGenerador;