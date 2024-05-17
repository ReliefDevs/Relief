let defaultIndex = 0;
let currentIndex = 0;

// Función para mostrar la definición correspondiente al índice
export function showDefinition(index) {
    // Obtener todas las definiciones y subtítulos
    let definitions = document.querySelectorAll('.definition');
    let subtitles = document.querySelectorAll('.subtitle');
   

    // Ocultar todas las definiciones y restablecer el estilo de los subtítulos
    definitions.forEach(function(definition) {
        definition.classList.remove('show');
    });
    subtitles.forEach(function(subtitle) {
        subtitle.classList.remove('bold');
    });

    // Mostrar la definición correspondiente al índice proporcionado y resaltar el subtítulo
    definitions[index].classList.add('show');
    subtitles[index].classList.add('bold');
    // Actualizar el índice actual
    currentIndex = index;
    defaultIndex= currentIndex;
}

// Función para cambiar automáticamente las definiciones cada 5 segundos
function changeDefinitionAutomatically() {
    console.log("default index: ", defaultIndex);
    // Obtener todas las definiciones
    let definitions = document.querySelectorAll('.definition');

    // Incrementar el índice actual
    defaultIndex++;

    // Si el índice actual es mayor que el número de definiciones, volver al inicio
    if (defaultIndex >= definitions.length) {
        defaultIndex = 0;
    }

    // Mostrar la definición correspondiente al índice actual
    showDefinition(defaultIndex);
}

// Mostrar la definición predeterminada cuando la página se carga por primera vez
window.addEventListener('load', function() {
    showDefinition(defaultIndex);
    // Iniciar el temporizador para cambiar automáticamente las definiciones cada 5 segundos
    setInterval(changeDefinitionAutomatically, 7000);
});



  