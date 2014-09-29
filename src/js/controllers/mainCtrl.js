var app = angular.module('app');

app.controller('MainCtrl', function($scope, Escenas) {
  $scope.data = {};
  $scope.data.mouse_x = 0;
  $scope.data.mouse_y = 0;
  $scope.data.areas_visibles = true;
  $scope.data.nombres_escenas = Escenas.obtener_nombres_escenas();
  $scope.data.destino = '';
  $scope.data.item_seleccionado_id = -1;
  $scope.data.item_seleccionado = {};
  $scope.data.preferencias = Escenas.obtener_preferencias_del_proyecto();

  $scope.zoom = function() {
      /* Realiza un acercamiento a la ventana principal de juego. */
      zoom.to({
          element: document.querySelector('.canvas')
      });
  };

  $scope.guardar = function() {
    Escenas.guardar();
  };

  $scope.restaurar = function() {
    Escenas.restaurar(function() {
      $scope.data.escena_actual = Escenas.recargar_escena();
      $scope.$apply();
    });
  };

  /**
   * Cambia la escena escena actual.
   */
  $scope.ir_a = function(nombre_escena) {
    $scope.deseleccionar_areas();
    $scope.data.escena_actual = Escenas.definir_escena(nombre_escena);
  };

  $scope.crear_area = function() {
    Escenas.crear_area();
  };

  /**
   * Captura la posición del mouse.
   */
  $scope.on_move = function(ev) {
    $scope.data.mouse_x = ev.x;
    $scope.data.mouse_y = ev.y;
  };

  /**
   * Se ejecuta por parte de los objetos area cuando el mouse pasa
   * sobre ellos.
   */
  $scope.mouse_over = function(n) {
    if (n === null)
      $scope.data.destino = "";
    else
      $scope.data.destino = n.nombre;
  };

  /* Selecciona un area para editarla. */
  $scope.seleccionar = function(n) {
    $scope.data.item_seleccionado_id = n.id;
    $scope.data.item_seleccionado = n;
  };

  /* Deselecciona todas las areas de modo que se oculte la edición de area. */
  $scope.deseleccionar_areas = function() {
    $scope.data.item_seleccionado_id = -1;
    $scope.data.item_seleccionado = {};
  };

  $scope.eliminar_area = function(n) {
      Escenas.eliminar_area(n);
  };

  $scope.obtener_estilo_area = function(n) {
    var tmp = {left: n.x, top: n.y, width: n.w, height: n.h};

    if ($scope.data.areas_visibles === true)
      tmp.opacity = 0.5;
    else
      tmp.opacity = 0;

    if ($scope.data.item_seleccionado_id === n.id)
      tmp.backgroundColor = "fff99a";

    return tmp;
  };

  $scope.obtener_estilo_canvas = function() {
    return Escenas.obtener_estilo_canvas();
  };


  $scope.data.escena_actual = Escenas.definir_escena('main');
  $scope.restaurar();
});
