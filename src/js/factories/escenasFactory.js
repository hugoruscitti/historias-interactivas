var app = angular.module('app');
var fs = require('fs');


app.factory('Escenas', function() {
  var obj = {};
  var nombre_de_la_escena_actual = '';
  var data = {};

  obj.obtener_nombres_escenas = function() {
    return [
      "main",
      "cuarto",
      "calle",
    ]
  };

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
    };

    escena_actual.puertas.push(area);
  };

  obj.eliminar_area = function(area) {
    var lista = obj.obtener_escena_actual().puertas;

    for (var i in lista) {
        if (lista[i].id === area.id) {
            lista.splice(i, 1)
        }
    }
  };

  obj.restaurar = function(success) {
    var filename = './escenas.json';

    try {
      var jsondata = fs.readFileSync(filename, 'utf-8');
      console.log(data);
      data = JSON.parse(jsondata);
      success.call();
    } catch (err) {
      alert(err);
      return;
    };

  };

  obj.abrir = function(filename) {
    var jsondata = fs.readFileSync(filename, 'utf-8');
    data = JSON.parse(jsondata);
  }



  obj.guardar = function(filename) {
    var retorno = fs.writeFileSync(filename, JSON.stringify(data, null, 4));

    if (retorno)
      console.log(retorno);
  };

  obj.obtener_escenas = function() {
    return data;
  };

  obj.definir_escena = function(nombre_de_la_escena) {
    nombre_de_la_escena_actual = nombre_de_la_escena;
    return obj.obtener_escena_actual();
  };

  obj.recargar_escena = function() {
    return obj.definir_escena(nombre_de_la_escena_actual);
  };

  /*
   * Retorna el objeto que representa la escena actual completa.
   */
  obj.obtener_escena_actual = function() {
    return obj.obtener_escenas()[nombre_de_la_escena_actual];
  };

  obj.obtener_estilo_canvas = function() {
    var proyecto = obj.obtener_preferencias_del_proyecto();
    var tmp = {};

    tmp.width = proyecto.ancho || 0;
    tmp.height = proyecto.alto || 0;

    return tmp;
  };

  obj.obtener_preferencias_del_proyecto = function() {
      return data._proyecto || {};
  };

  return obj;
});
