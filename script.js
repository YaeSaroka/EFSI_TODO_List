var Tareas = [];
let timestamp;

function nuevaTarea() {
    const nueva_tarea = document.getElementById("nuevo").value;
    if (nueva_tarea == "") {
        alert("COMPLETA LOS CAMPOS");
        return;
    }
    const fechaAgregado = new Date().toISOString();
    Tareas.push({
        tarea: nueva_tarea,
        fechaAgregado: fechaAgregado,
        fechaCompletado: null,
        completado: false
    });
    console.log("Nueva tarea agregada: " + nueva_tarea + " - Fecha de agregado: " + fechaAgregado);
    mostrarTareas();
}


function mostrarTareas() {
    var visible = document.getElementById("tareas-container");
    visible.innerHTML = "";
    for (let i = 0; i < Tareas.length; i++) {
        const tarea = Tareas[i];
        const fechaAgregado = `Agregado el ${new Date(tarea.fechaAgregado).toLocaleString()}`;
        const fechaCompletado = tarea.fechaCompletado ? ` - Completado el ${new Date(tarea.fechaCompletado).toLocaleString()}` : '';
        visible.innerHTML +=
            `<div class="tareas-container" id="checkk">
                <label>
                    <input type="checkbox" onchange="marcarTarea(${i})" ${tarea.completado ? 'checked' : ''}>
                    <span class="${tarea.completado ? 'tachado' : ''}">${tarea.tarea} - ${fechaAgregado}${fechaCompletado}</span>
                </label> 
            </div>`;
    }
}


function marcarTarea(index) {
    const tarea = Tareas[index];
    tarea.completado = !tarea.completado;
    if (tarea.completado) {
        tarea.fechaCompletado = new Date().toISOString();
    } else {
        tarea.fechaCompletado = null; 
    }
    mostrarTareas();
}


function masrapido() {
    var max = null;
    for (let tarea of Tareas) {
        if (tarea.completado && (!max || tarea.fechaCompletado < max)) {
            max = tarea.fechaCompletado;
        }
    }
    var mostrar = document.getElementById("rapido-container");
    mostrar.innerHTML = max ? "La tarea más rápida fue completada el " + new Date(max).toLocaleString() : "No hay tareas completadas.";
}






















