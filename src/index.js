import $ from 'jquery';
import AFRAME from 'aframe';
import AssetsGenerator from './components/AssetsGenerator';
import Atomo from './components/Atomo';

$.getScript("/assets/vendor/aframe/aframe-ar-v.1.6.0.min.js", function() {
    
    let escenario = $('<a-scene></a-scene>').attr('arjs', 'detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false');

    let assets = new AssetsGenerator({});
    let atomo = new Atomo({});
    let atomo2 = new Atomo({});
    
    escenario.append(assets.componente);
    escenario.append(atomo.componente);
    escenario.append(atomo2.componente);

    $('body').append(escenario);
});