var app = angular.module('app');


app.factory('Scenes', function() {
  var obj = {};

  obj.obtener_escenas = function() {
    return {
      main: {
        fondo: 'casa.png'
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
