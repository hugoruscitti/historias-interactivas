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

function random() {
  return Math.floor((Math.random() * 10000) + 1);
}