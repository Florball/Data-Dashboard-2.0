// Accediendo a elementos del DOM
const btnLima = document.getElementById('btn-cohorts');
const listCohorts = document.getElementById('cohorts');

// Data cohorts - users - progress
const cohorts = '../data/cohorts/cohorts.json';
const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const Progress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

// Evento muestra cohorts de sede LIMA
btnLima.addEventListener('click', () => getData(cohorts, getCohort));

// Solicitando datos
const getData = (url, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();
  xhttp.onerror = () => console.log('Se ha producido un error durante la transacción.');
  xhttp.onload = callback;
};

// Función para pintar los datos
function getCohort() {
  let self = this;
  if (self.readyState === 4 && self.status === 200) {
    let data = JSON.parse(self.responseText);
    // console.log(data);
    listCohorts.innerHTML = '';

    for (let item of data) {
      // console.log(item.id);
      listCohorts.innerHTML += `
        <tr>
          <td id="${item.id}" class="list-cohort">${item.id}</td>
          <br><br>
        </tr>
      `
    }
  }
};
