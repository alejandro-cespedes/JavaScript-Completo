const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos'); 
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener() {
    // Cuando agregas un curso presionando 'Agregar al Carrito'
    listaCursos.addEventListener('click', agregarCurso)

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; // Reseteamos el arreglo
        carritoHTML()
    })
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}
// Eliminar un curso del carrito 

function eliminarCurso(e) {
    console.log(e.target.classList)
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        // Eliminar del arreglo en articulosCarrito por el data id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML() // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso)

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento a existe en el carrito

    const existe = articulosCarrito.some( (curso) => curso.id === infoCurso.id)
        if (existe) {
            // Actualizamos la cantidad
            const cursos = articulosCarrito.map( curso => {
                if (curso.id === infoCurso.id) {
                    curso.cantidad++;
                    return curso;
                } else {
                    return curso;
                }
            });
            articulosCarrito = [...cursos]
        }else {
            // Agregamos el curso al carrito
            articulosCarrito = [...articulosCarrito,infoCurso];
        }
    console.log(existe);

    // Agrega elementos al carrito
    
    console.log(articulosCarrito)
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( (curso) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width='100'>
            </td>

            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' data-id=${curso.id}> X </a>
            </td>
        `;
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma Lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}