var app = angular.module('app');


app.factory('Scenes', function() {
  var obj = {};

  obj.obtener_escenas = function() {
    return {
      main: {
        fondo: 'casa.png',
        puertas: [
          {
            x: 600,
            y: 210,
            w: 70,
            h: 120,
            nombre: 'puerta a la habitación',
            destino: 'cuarto'
          }
        ],
      },
      cuarto: {
        fondo: 'cuarto.png'
      },
      calle: {
        fondo: 'calle.png'
      },
    }
  };


  return obj;
})
