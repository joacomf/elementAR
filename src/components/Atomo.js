import $ from 'jquery';
import Nucleo from './Nucleo';
import OrbitasGenerador from './OrbitasGenerador';

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
    }
    
    insertarNucleo() {

        let numeroAtomico = this.configuracion.numeroAtomico;
        let configuracionElectronica = this.configuracion.configuracionElectronica;

        let container = $('<a-entity></a-entity>')
                            .attr('rotation', '0 0 0')
                            .attr('position', '0 0 0')
                            .attr('scale', '0.4 0.4 0.4');

        let nucleo = new Nucleo(numeroAtomico);
        let orbitas = new OrbitasGenerador(configuracionElectronica);

        container.append(nucleo.componente);
        this.componente.append(container);
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }

}

export default Atomo;