var app = angular.module('app');

app.controller('MainCtrl', function($scope, Scenes) {
  $scope.data = {};
  $scope.data.mouse_x = 0;
  $scope.data.mouse_y = 0;
  $scope.data.depuracion = false;
  $scope.data.areas_visibles = true;
  $scope.data.scenes = Scenes.obtener_escenas();
  $scope.data.escena_actual = 'main';
  $scope.data.destino = '';
  $scope.data.item_seleccionado_id = -1;
  $scope.data.item_seleccionado = {};

  /**
   * Cambia la escena escena actual.
   */
  $scope.ir_a = function(nombre_escena) {
    $scope.data.escena_actual = nombre_escena;
    $scope.data.destino = "";
    $scope.deseleccionar_areas();
  }

  /**
   * Captura la posición del mouse.
   */
  $scope.on_move = function(ev) {
    $scope.data.mouse_x = ev.x;
    $scope.data.mouse_y = ev.y;
  }

  /**
   * Permite interpolar cadenas
   */
  function stringFormat() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {
          var reg = new RegExp("\\{" + i + "\\}", "gm");
          s = s.replace(reg, arguments[i + 1]);
      }
      return s;
  }

  /**
   * Se ejecuta por parte de los objetos area cuando el mouse pasa
   * sobre ellos.
   */
  $scope.mouse_over = function(n) {
    if (n === null)
      $scope.data.destino = "";
    else
      $scope.data.destino = n.nombre;
  }

  $scope.obtener_estilo_item_lista = function(n) {
    if (n.id === $scope.data.item_seleccionado_id)
      return {'background-color': 'yellow'};
    else
      return {};
  }

  /* Selecciona un area para editarla. */
  $scope.seleccionar = function(n) {
    $scope.data.item_seleccionado_id = n.id;
    $scope.data.item_seleccionado = n;
  }

  /* Deselecciona todas las areas de modo que se oculte la edición de area. */
  $scope.deseleccionar_areas = function() {
    $scope.data.item_seleccionado_id = -1;
    $scope.data.item_seleccionado = {};
  }

  $scope.obtener_nombres_de_escenas = function() {
    return [
      {id: 123, nombre: "asdasd"}
    ];
  }

  $scope.obtener_estilo_area = function(n) {
    var tmp = {left: n.x, top: n.y, width: n.w, height: n.h};

    if ($scope.data.areas_visibles === true)
      tmp.opacity = 0.5;
    else
      tmp.opacity = 0;

    if ($scope.data.item_seleccionado_id === n.id)
      tmp.backgroundColor = "red";

    return tmp;
  }

});
