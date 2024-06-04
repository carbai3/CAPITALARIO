// Guardar el estado de la página web en localStorage
window.addEventListener('beforeunload', function() {
  localStorage.setItem('pageState', JSON.stringify(getPageState()));
});

// Cargar el estado de la página web desde localStorage al cargar la página
window.addEventListener('load', function() {
  const pageState = JSON.parse(localStorage.getItem('pageState'));
  if (pageState) {
    setPageState(pageState);
  }
});

// Función para obtener el estado actual de la página web
function getPageState() {
  const state = {
    inputValue: document.getElementById('myInput').value, // Ejemplo: capturar el valor de un campo de entrada
    cellOpacityValues: getCellOpacityValues()
  };
  
  return state;
}

// Función para establecer el estado de la página web
function setPageState(state) {
  document.getElementById('myInput').value = state.inputValue; // Ejemplo: establecer el valor de un campo de entrada
  setCellOpacityValues(state.cellOpacityValues);
}

// Función para capturar los valores de opacidad de las celdas
function getCellOpacityValues() {
  const cells = document.querySelectorAll('.cell');
  const opacityValues = [];
  
  cells.forEach(cell => {
    opacityValues.push(cell.style.opacity);
  });
  
  return opacityValues;
}

// Función para establecer los valores de opacidad de las celdas
function setCellOpacityValues(opacityValues) {
  const cells = document.querySelectorAll('.cell');
  
  cells.forEach((cell, index) => {
    cell.style.opacity = opacityValues[index];
  });
}

const cells = document.querySelectorAll('.cell');
const imagen = document.getElementById('imagen');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.style.opacity = 0; // Oculta la celda al cambiar la opacidad
  });
});