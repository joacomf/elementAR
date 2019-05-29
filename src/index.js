import $ from 'jquery';
import AFRAME from 'aframe';
import AssetsGenerador from './components/AssetsGenerador';
import Atomo from './components/Atomo';
import tablaPeriodica from './datos/tabla-periodica';

$.getScript("/assets/vendor/aframe/aframe-ar-v.1.6.0.min.js", function() {
    
    let escenario = $('<a-scene></a-scene>').attr('arjs', 'detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false');

    let elementos = tablaPeriodica.elementos;

    let assets = new AssetsGenerador({});
    let atomo = null;
    for(let i = 0; i < 18; i++){
        atomo = new Atomo(elementos[i]);
        escenario.append(atomo.componente);
    }
    escenario.append(assets.componente);
    $('body').append(escenario);
});