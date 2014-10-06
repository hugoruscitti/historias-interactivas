var app = angular.module('app');
var fs = require('fs');

app.factory('Gui', function($q, $timeout) {
  var obj = {};

  function chooseFile(name, callback) {
    /* espera un callback de un argumento: callback(ruta_al_archivo) */
    var chooser = document.querySelector("#" + name);

    chooser.addEventListener("change", function(evt) {
      callback.call(this, this.value)
    }, false);

    chooser.click();
  }

  obj.open = function() {
    var deferred = $q.defer();

    chooseFile('fileDialog', function(ruta) {
      deferred.resolve(ruta);
    });

    return deferred.promise;
  };

  obj.save = function() {
    var deferred = $q.defer();

    chooseFile('saveDialog', function(ruta) {
      deferred.resolve(ruta);
    });

    return deferred.promise;
  };

  return obj;
});
