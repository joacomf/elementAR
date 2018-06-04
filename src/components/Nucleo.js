import $ from 'jquery';
import ProtonesNeutronesGenerador from './ProtonesNeutronesGenerador';

'use strict';

class Nucleo {
    
    constructor(numeroAtomico){
        this.componente = null;
        this.numeroAtomico = numeroAtomico;

        this.crear();
    }

    crear() {
        this.componente = $('<a-entity></a-entity>')
                        .attr('mixin', 'nucleo')
                        .attr('rotation', '0 0 0')
                        .attr('scale', '0.4 0.4 0.4');

        let contenido = new ProtonesNeutronesGenerador(this.numeroAtomico);

        this.componente.append(contenido.componente);
    }

    get componente() {
        return this._componente;
    }

    set componente(data) {
        this._componente = data;
    }

}

export default Nucleo;