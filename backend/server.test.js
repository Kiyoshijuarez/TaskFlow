// Prueba unitaria básica para validación de estructura de tareas
function validarTarea(tarea) {
  if (!tarea.title || typeof tarea.title !== 'string') {
    return false;
  }
  return true;
}

// Ejecución del test
console.log('--- Ejecutando Pruebas Unitarias de TaskFlow ---');

const tareaValida = { title: 'Aprender Git Flow' };
const tareaInvalida = { title: '' };

if (validarTarea(tareaValida) && !validarTarea(tareaInvalida)) {
  console.log('✅ TEST PASSED: La validación de tareas funciona correctamente.');
} else {
  console.log('❌ TEST FAILED: Error en la validación.');
  process.exit(1);
}