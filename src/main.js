// Accediendo a elementos del DOM
const btnLima = document.getElementById('btn-cohorts');
const listCohorts = document.getElementById('cohorts')

// Data cohorts - progress - users
const cohorts = '../data/cohorts/cohorts.json';

// Evento muestra cohorts de sede LIMA
btnLima.addEventListener('click', () => getData(cohorts));

// Solicitando datos
const getData = (url) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();
  xhttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      // console.log(data);
      listCohorts.innerHTML = '';

      for (let cohort of data) {
        // console.log(cohort.id);
        listCohorts.innerHTML += `
        <tr>
          <td>${cohort.id}</td>
          <br>
        </tr>
        `
      }
    }
  };
};
