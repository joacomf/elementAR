var scene = document.querySelector('a-scene')
var marker = document.querySelector('a-marker')

AFRAME.registerComponent('elemento', {
    schema: {nombre: {type: 'string'
      },
      numero:{
        type: 'number'
      },
      orbitas: {
        type: 'number'
      },
    },


  });

AFRAME.registerComponent('nucleo', {
    schema: {
      electrones: {
        type: 'number'
      },
      protones: {
        type: 'number'
      },
    }
  });

  