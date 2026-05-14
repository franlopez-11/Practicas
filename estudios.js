const botonEstudio = document.getElementById('boton-estudio');

const modal = document.getElementById('modal-estudio');

const closeBtn = document.querySelector('.close');

const formEstudio = document.getElementById('form-nuevo-estudio');

const contenedorEstudios = document.getElementById('lista-estudios');

/* ARRAY DE OBJETOS */

const estudios = [];

/* ABRIR MODAL */

botonEstudio.addEventListener('click', () => {
    modal.style.display = 'block';
});

/* CERRAR MODAL */

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* CERRAR SI PULSAS FUERA */

window.addEventListener('click', (event) => {

    if (event.target === modal) {
        modal.style.display = 'none';
    }

});

/* AÑADIR ESTUDIO */

formEstudio.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombreEstudio = document.getElementById('nombre-estudio').value;

    /* OBJETO */

    const estudio = {
        titulo: nombreEstudio
    };

    if (estudio.titulo.trim() !== "") {

        estudios.push(estudio);

        mostrarEstudios();

        formEstudio.reset();

        modal.style.display = 'none';
    }

});

/* MOSTRAR ESTUDIOS */

function mostrarEstudios() {

    contenedorEstudios.innerHTML = `
        <h3>Estudios</h3>
        <p>Educación Secundaria Obligatoria</p>
        <p>Grado Medio de SMR</p>
    `;

    estudios.forEach(estudio => {

        const nuevoParrafo = document.createElement('p');

        nuevoParrafo.textContent = estudio.titulo;

        contenedorEstudios.appendChild(nuevoParrafo);

    });

}