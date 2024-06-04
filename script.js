// Función para manejar la opacidad de la celda al hacer clic
function toggleCellOpacity(cell) {
  if (cell.style.opacity === '0.5') {
    cell.style.opacity = '1';
  } else {
    cell.style.opacity = '0.5';
  }
}

// Función para guardar y cargar el estado de las opacidades en localStorage
function saveCellOpacities() {
  const cellOpacities = {};
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cellOpacities[cell.id] = cell.style.opacity;
  });

  localStorage.setItem('cellOpacities', JSON.stringify(cellOpacities));
}

function loadCellOpacities() {
  const cellOpacities = JSON.parse(localStorage.getItem('cellOpacities'));

  if (cellOpacities) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      if (cellOpacities[cell.id]) {
        cell.style.opacity = cellOpacities[cell.id];
      }
    });
  }
}

// Event listener para guardar el estado al salir de la página
window.addEventListener('beforeunload', function() {
  saveCellOpacities();
});

// Event listener para cargar el estado al cargar la página
window.addEventListener('load', function() {
  loadCellOpacities();
});

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', function() {
    toggleCellOpacity(cell);
    saveCellOpacities();
  });
});