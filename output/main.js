"use strict";

// Accediendo a elementos del DOM
var btnLima = document.getElementById('btn-cohorts');
var listCohorts = document.getElementById('cohorts'); // Data cohorts - progress - users

var cohorts = '../data/cohorts/cohorts.json'; // Evento muestra cohorts de sede LIMA

btnLima.addEventListener('click', function () {
  return getData(cohorts);
}); // Solicitando datos

var getData = function getData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();

  xhttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText); // console.log(data);

      listCohorts.innerHTML = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cohort = _step.value;
          // console.log(cohort.id);
          listCohorts.innerHTML += "\n        <tr>\n          <td>".concat(cohort.id, "</td>\n          <br>\n        </tr>\n        ");
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
  };
};