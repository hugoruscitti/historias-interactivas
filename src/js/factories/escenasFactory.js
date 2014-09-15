var app = angular.module('app');


app.factory('Escenas', function() {
  var obj = {};
  var nombre_de_la_escena_actual = '';
  var data = {
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
      fondo: 'calle.png',
      puertas: [
      ]
    },
  }

  obj.obtener_nombres_escenas = function() {
    return [
      "main",
      "cuarto",
      "calle",
    ]
  }

  obj.crear_area = function() {
    var escena_actual = obj.obtener_escena_actual();

    var area = {
      id: 132733,
      x: 56,
      y: 56,
      w: 90,
      h: 190,
      nombre: '...',
      destino: ''
    }

    escena_actual.puertas.push(area);
  }

  obj.obtener_escenas = function() {
    return data;
  };

  obj.definir_escena = function(nombre_de_la_escena) {
    nombre_de_la_escena_actual = nombre_de_la_escena;
    return obj.obtener_escena_actual();
  }

  /*
   * Retorna el objeto que representa la escena actual completa.
   */
  obj.obtener_escena_actual = function() {
    return obj.obtener_escenas()[nombre_de_la_escena_actual];
  }

  return obj;
})
