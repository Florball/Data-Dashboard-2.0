"use strict";

// Accediendo a elementos del DOM
var btnLima = document.getElementById('btn-cohorts');
var listCohorts = document.getElementById('cohorts'); // Data cohorts - users - progress

var cohorts = '../data/cohorts/cohorts.json';
var users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
var Progress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; // Evento muestra cohorts de sede LIMA

btnLima.addEventListener('click', function () {
  return getData(cohorts, getCohort);
}); // Solicitando datos

var getData = function getData(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();

  xhttp.onerror = function () {
    return console.log('Se ha producido un error durante la transacción.');
  };

  xhttp.onload = callback;
}; // Función para pintar los datos


function getCohort() {
  var self = this;

  if (self.readyState === 4 && self.status === 200) {
    var data = JSON.parse(self.responseText); // console.log(data);

    listCohorts.innerHTML = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        // console.log(item.id);
        listCohorts.innerHTML += "\n        <tr>\n          <td id=\"".concat(item.id, "\" class=\"list-cohort\">").concat(item.id, "</td>\n          <br><br>\n        </tr>\n      ");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

;