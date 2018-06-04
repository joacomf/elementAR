import $ from 'jquery';
import AFRAME from 'aframe';
import AssetsGenerador from './components/AssetsGenerador';
import Atomo from './components/Atomo';
import tablaPeriodica from './datos/tabla-periodica';

$.getScript("/assets/vendor/aframe/aframe-ar-v.1.6.0.min.js", function() {
    
    let escenario = $('<a-scene></a-scene>').attr('arjs', 'detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false');

    let elementos = tablaPeriodica.elementos;
    console.table(elementos[0]);

    let assets = new AssetsGenerador({});
    let atomo = new Atomo(elementos[2]);
    let atomo2 = new Atomo(elementos[9]);
    
    escenario.append(assets.componente);
    escenario.append(atomo.componente);
    escenario.append(atomo2.componente);

    $('body').append(escenario);
});