import $ from 'jquery';

'use strict';

class AssetsGenerator {
    
    constructor(data){
        this.data = data;
        this.componente = null;

        this.crear();
    }

    crear() {
        this.componente = $('<a-assets></a-assets>');
        let mixin_nucleo = $('<a-mixin></a-mixin>').attr('id', 'nucleo').attr('geometry', 'primitive: sphere; radius: 2.5').attr('material', 'opacity: 0.5; color: gray');
        let mixin_electron = $('<a-mixin></a-mixin>').attr('id', 'proton').attr('geometry', 'primitive: sphere; radius: 0.6').attr('material', 'color: blue');

        this.componente.append(mixin_nucleo);
        this.componente.append(mixin_electron);
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

export default AssetsGenerator;