import $ from 'jquery';
import Nucleo from './Nucleo';

'use strict';

class Atomo {

    constructor(configuracion) {
        
        this.configuracion = configuracion;
        this.componente = null;

        this.crear();
    }
    
    crear() {

        this.componente = $('<a-marker></a-marker>').attr('type', 'barcode').attr('value', '3');
        this.insertarNucleo();
    }
    
    insertarNucleo() {

        let container = $('<a-entity></a-entity>')
                            .attr('rotation', '0 0 0')
                            .attr('position', '0 0 0')
                            .attr('scale', '0.4 0.4 0.4');

        let nucleo = new Nucleo();

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