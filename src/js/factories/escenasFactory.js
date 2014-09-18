var app = angular.module('app');
var fs = require('fs');


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
      id: random(),
      x: 56,
      y: 56,
      w: 90,
      h: 190,
      nombre: '...',
      destino: ''
    }

    escena_actual.puertas.push(area);
  }

  obj.restaurar = function(success) {
    var filename = './escenas.json';

    fs.readFile(filename, 'utf8', function (err, jsondata) {
      if (err) {
        alert(err)
        return;
      }

      data = JSON.parse(jsondata);
      console.log("cargando escena");

      success.call();

    });
  }

  obj.guardar = function() {
    var filename = './escenas.json';

    fs.writeFile(filename, JSON.stringify(data, null, 4), function(err) {
      if(err) {
        alert(err);
      } else {
        console.log("JSON saved to " + filename);
      }
    });
  }

  obj.obtener_escenas = function() {
    return data;
  };

  obj.definir_escena = function(nombre_de_la_escena) {
    nombre_de_la_escena_actual = nombre_de_la_escena;
    return obj.obtener_escena_actual();
  }

  obj.recargar_escena = function() {
    return obj.definir_escena(nombre_de_la_escena_actual);
  }

  /*
   * Retorna el objeto que representa la escena actual completa.
   */
  obj.obtener_escena_actual = function() {
    return obj.obtener_escenas()[nombre_de_la_escena_actual];
  }

  return obj;
})
