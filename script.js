const botonTema = document.getElementById('boton-tema');

botonTema.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {

        botonTema.textContent = 'Sol';

    } else {

        botonTema.textContent = 'Luna';

    }

});