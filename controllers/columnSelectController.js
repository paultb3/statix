export async function setupColumnChangeListener(selectElement) {
    selectElement.addEventListener('change', (e) => {
    const columnaElegida = e.target.value;
    console.log('elige nombre: ' + columnaElegida);
    selectElement.disabled = true; // Deshabilita el select para no aceptar más cambios
  });
}