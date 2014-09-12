var app = angular.module('app');


app.factory('Scenes', function() {
  var obj = {};

  obj.obtener_nombres_escenas = function() {
    return [
      "main",
      "cuarto",
      "calle",
    ]
  }

  obj.obtener_escenas = function() {
    return {
      main: {
        fondo: 'casa.png',
        puertas: [
          {
            id: 1233333,
            x: 600,
            y: 210,
            w: 70,
            h: 120,
            nombre: 'puerta a la habitación',
            destino: 'cuarto'
          },
          {
            id: 344444,
            x: 100,
            y: 110,
            w: 20,
            h: 20,
            nombre: 'bug',
            destino: 'cuarto'
          }
        ],
      },
      cuarto: {
        fondo: 'cuarto.png',
        puertas: [
          {
            id: 1733,
            x: 256,
            y: 256,
            w: 70,
            h: 120,
            nombre: 'salir',
            destino: 'main'
          }
        ],
      },
      calle: {
        fondo: 'calle.png'
      },
    }
  };


  return obj;
})
