import $ from 'jquery';
import ElectronesGenerador from './ElectronesGenerador';

'use strict';

class OrbitasGenerador {

    constructor(configuracionElectronica) {
        this.componente = null;
        this.configuracionElectronica = configuracionElectronica;

        this.generar();
    }

    generar() {
        this.componente = $('<a-entity></a-entity>')
                            .attr('rotation', '90 0 0')
                            .attr('geometry', 'primitive: ring; radiusInner: 6.7; radiusOuter: 6.8')
                            .attr('material', 'side: double');

        let electronGenerador = new ElectronesGenerador();

        let electron_componente = electronGenerador.generar(6.7, 0, 0);

        this.componente.append(electron_componente);
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }
}

export default OrbitasGenerador;