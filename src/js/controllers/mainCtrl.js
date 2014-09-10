var app = angular.module('app');

app.controller('MainCtrl', function($scope, Scenes) {
  $scope.data = {};
  $scope.data.mouse_x = 0;
  $scope.data.mouse_y = 0;
  $scope.data.depuracion = true;
  $scope.data.scenes = Scenes.obtener_escenas();
  $scope.data.escena_actual = 'main';

  $scope.ir_a = function(nombre_escena) {
    $scope.data.escena_actual = nombre_escena;
  }

  $scope.on_move = function(ev) {
    $scope.data.mouse_x = ev.x;
    $scope.data.mouse_y = ev.y;
  }
});
