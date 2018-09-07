import $ from 'jquery';
import AFRAME from 'aframe';
import AssetsGenerador from './components/AssetsGenerador';
import Atomo from './components/Atomo';
import tablaPeriodica from './datos/tabla-periodica';

$.getScript("/assets/vendor/aframe/aframe-ar-v.1.6.0.min.js", function() {
    
    let escenario = $('<a-scene></a-scene>').attr('arjs', 'detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false');

    let elementos = tablaPeriodica.elementos;
   // console.table(elementos[0]);

    let assets = new AssetsGenerador({});
    let atomo = null;
    let atomo2 = null;
    /*
    for(let i = 0; i < 18; i++){
        atomo = new Atomo(elementos[i]);
        escenario.append(atomo.componente);
    }
    */
    atomo2 = new Atomo(elementos[13]);
    atomo = new Atomo(elementos[2]);
    escenario.append(atomo2.componente);
    escenario.append(atomo.componente);
    escenario.append(assets.componente);
    $('body').append(escenario);
});