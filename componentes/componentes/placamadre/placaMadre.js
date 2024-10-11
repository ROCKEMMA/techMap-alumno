import { header } from "../../header/header.js";
import { placamadreC } from "../../../assets/Ddata.js";

console.log("PlacaMadre.js se está ejecutando");

document.body.appendChild(header);

// Crear el contenedor del modal (inicialmente oculto)
let modal = document.createElement('div');
modal.className = 'modal';
modal.style.display = 'none';

let modalContent = document.createElement('div');
modalContent.className = 'modal-content';

let closeModal = document.createElement('span');
closeModal.className = 'close';
closeModal.innerHTML = '&times;';

let modalText = document.createElement('div'); // Aquí se mostrarán nombre, categoría y descripción

let downloadBtn = document.createElement('button');
downloadBtn.className = 'download-btn';
downloadBtn.innerText = 'Descargar';

// Evento para descargar la información mostrada en el modal como una imagen
downloadBtn.addEventListener('click', () => {
    html2canvas(modalContent).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'informacion';
        link.click();
    });
});

modalContent.appendChild(closeModal);
modalContent.appendChild(modalText);
modalContent.appendChild(downloadBtn); // Agregar el botón de descarga al modal
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Función para abrir el modal con la información del componente
function abrirModal(nombreParte) {
    // Buscar la placa madre en la data
    let placaMadre = placamadreC.find(c => c.nombre === "Placa Madre");
    
    if (placaMadre) {
        // Buscar la parte específica dentro de la placa madre
        let parte = placaMadre.partes.find(p => p.nombre === nombreParte);
        if (parte) {
            modalText.innerHTML = `
                <h2>${parte.nombre}</h2>
                <p><strong>Categoría:</strong> ${parte.categoria}</p>
                <p><strong>Descripción:</strong> ${parte.descripcion}</p>
                <p><strong>caracteristicas:</strong>${parte.caracteristicas}
            `;
            modal.style.display = 'block';
        } else {
            modalText.innerHTML = '<p>Información no disponible.</p>';
            modal.style.display = 'block';
        }
    }
}

// Cerrar el modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Crear contenedor principal de la placa madre
let contenedorPlaca = document.createElement('div');
contenedorPlaca.className = 'placa-contenedor';

let placaimg = document.createElement('img');
placaimg.src = './img/Placaaa.webp';
placaimg.alt = 'Img de placa madre';
contenedorPlaca.appendChild(placaimg);

// Crear contenedor de filtros
let contenedorFiltros = document.createElement('div');
contenedorFiltros.className = 'filtros-contenedor';

// Título de filtros
let tituloFiltros = document.createElement('p');
tituloFiltros.innerText = 'Filtros';
contenedorFiltros.appendChild(tituloFiltros);

// Puntos decorativos
let hr = document.createElement('hr');
contenedorFiltros.appendChild(hr);

// Filtros de componentes
let filtros = ['Conectores', 'Puertos', 'Todos', 'Chips'];

// Crear casillas de verificación dinámicamente
filtros.forEach(filtro => {
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'filtro-checkbox';
    checkbox.value = filtro;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(' ' + filtro));

    contenedorFiltros.appendChild(label);
});

document.body.appendChild(contenedorFiltros);

// Mostrar/ocultar elementos según selección
const checkboxes = document.querySelectorAll('.filtro-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const todosElementos = document.querySelectorAll('.elemento-placa');
        todosElementos.forEach(elemento => {
            elemento.style.display = 'none'; // Ocultar todos los elementos
        });

        const hayCheckboxSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

        if (hayCheckboxSeleccionado) {
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    const value = cb.value;
                    const elementos = document.querySelectorAll(`.${value}`);
                    elementos.forEach(elemento => {
                        elemento.style.display = 'block'; // Mostrar solo los que coinciden
                    });
                }
            });
        } else {
            todosElementos.forEach(elemento => {
                elemento.style.display = 'block'; // Mostrar todos si no hay selección
            });
        }
    });
});

// Crear banderas para las partes de la placa madre
placamadreC[6].partes.forEach((cadParte) => {
    let item = document.createElement('div');
    item.className = cadParte.nombre; 
    item.classList.add("elemento-placa");
    item.style.display = 'block';

    let bandera = document.createElement('div');
    bandera.className = "bandera";
    bandera.innerText = cadParte.nombre;

    // Evento click para abrir modal con la información completa de la parte
    bandera.addEventListener('click', () => {
        abrirModal(cadParte.nombre);
    });

    item.appendChild(bandera);
    contenedorPlaca.appendChild(item);
});

// Agregar el contenedor de la placa al body
document.body.appendChild(contenedorPlaca);
