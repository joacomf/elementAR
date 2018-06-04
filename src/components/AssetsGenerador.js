import $ from 'jquery';

'use strict';

class AssetsGenerador {
    
    constructor(data){
        this.data = data;
        this.componente = null;

        this.generar();
    }

    generar() {
        this.componente = $('<a-assets></a-assets>');
        let mixin_nucleo = $('<a-mixin></a-mixin>').attr('id', 'nucleo').attr('geometry', 'primitive: sphere; radius: 2.5').attr('material', 'opacity: 0.5; color: gray');
        let mixin_proton = $('<a-mixin></a-mixin>').attr('id', 'proton').attr('geometry', 'primitive: sphere; radius: 0.6').attr('material', 'color: blue');
        let mixin_neutron = $('<a-mixin></a-mixin>').attr('id', 'neutron').attr('geometry', 'primitive: sphere; radius: 0.6').attr('material', 'color: green');

        this.componente.append(mixin_nucleo);
        this.componente.append(mixin_proton);
        this.componente.append(mixin_neutron);
    }

    get componente(){
        return this._componente;
    }

    set componente(data){
        this._componente = data;
    }

    get data(){
        return this._data;
    }

    set data(data){
        this._data = data;
    }
}

export default AssetsGenerador;