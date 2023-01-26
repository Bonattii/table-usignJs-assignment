let labels = ['Movie', 'Release', 'Type'];
let movies = [
  { movie: 'Black Widow', release: '2021', type: 'Heroes' },
  { movie: 'Thor: Love and Thunder', release: '2022', type: 'Heroes' },
  { movie: 'Avengers: Endgame', release: '2019', type: 'Heroes' },
  {
    movie: 'Spider-Man: Far from Home',
    release: '2019',
    type: 'Heroes'
  }
];

function createTable(label, object, container) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let theadTr = document.createElement('tr');

  for (let i = 0; i < label.length; i++) {
    let theadTh = document.createElement('th');

    theadTh.innerHTML = label[i];
    theadTr.appendChild(theadTh);
  }

  thead.appendChild(theadTr);
  table.appendChild(thead);

  for (j = 0; j < object.length; j++) {
    let tbodyTr = document.createElement('tr');

    for (k = 0; k < label.length; k++) {
      let tbodyTd = document.createElement('td');

      tbodyTd.innerHTML = object[j][label[k].toLowerCase()];
      tbodyTr.appendChild(tbodyTd);
    }

    tbody.appendChild(tbodyTr);
  }

  table.appendChild(tbody);
  container.appendChild(table);
}

let tableContainer = document.getElementById('table-container');

createTable(labels, movies, tableContainer);
