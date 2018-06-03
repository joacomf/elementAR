import $ from 'jquery';
import AFRAME from 'aframe';

$.getScript("https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js", function() {
    let sceneEl = $('<a-scene></a-scene>')
                    .attr('arjs', 'detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false');

    AFRAME.registerComponent('log', {
        schema: {
            message: {type: 'string', default: 'Hello, World!'}
        },
        init: function() {
            console.log(this.data.message);
        }
    });

    let assets = $('<a-assets></a-assets>');
    let mixin_nucleo = $('<a-mixin></a-mixin>').attr('id', 'nucleo').attr('geometry', 'primitive: sphere; radius: 2.5').attr('material', 'opacity: 0.5; color: gray');
    let mixin_electron = $('<a-mixin></a-mixin>').attr('id', 'proton').attr('geometry', 'primitive: sphere; radius: 0.6').attr('material', 'color: blue');

    assets.append(mixin_nucleo);
    assets.append(mixin_electron);
    sceneEl.append(assets);

    let marker = $('<a-marker></a-marker>').attr('type', 'barcode').attr('value', '3');

    let entityEl = $('<a-entity></a-entity>')
                    .attr('rotation', '0 0 0')
                    .attr('position', '0 0 0')
                    .attr('scale', '0.4 0.4 0.4')
                    .attr('log', '');

    let nucleo = $('<a-entity></a-entity>')
                    .attr('mixin', 'nucleo')
                    .attr('rotation', '0 0 0')
                    .attr('scale', '0.4 0.4 0.4');

    let nucleo_container = $('<a-entity></a-entity>')
                            .attr('position', '-0.1 0 -0.9');

    let proton1 = $('<a-entity></a-entity>')
                    .attr('mixin', 'proton')
                    .attr('position', '-0.3 0.9 1');

    nucleo_container.append(proton1);
    nucleo.append(nucleo_container);
    entityEl.append(nucleo);
    marker.append(entityEl);

    sceneEl.append(marker);

    $('body').append(sceneEl);
});