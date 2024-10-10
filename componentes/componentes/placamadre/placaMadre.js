import { header } from "../../header/header.js";
import { placamadreC } from "../../../assets/Ddata.js";

console.log("PlacaMadre.js se está ejecutando");

document.body.appendChild(header);

// cotenedor - coso que guarda todo 
let contenedorPlaca = document.createElement('div');
contenedorPlaca.className = 'placa-contenedor';

// Imagen de la placa madre
let placaimg = document.createElement('img');
placaimg.src = './img/Placaa.webp';
placaimg.alt = 'Img de placa madre';

contenedorPlaca.appendChild(placaimg);

// contenedor de filrtos
let contenedorFiltros = document.createElement('div');
contenedorFiltros.className = 'filtros-contenedor';

// titu de filtros
let tituloFiltros = document.createElement('p');
tituloFiltros.innerText = 'Filtros';
contenedorFiltros.appendChild(tituloFiltros);

// puntos de decorativos 
let hr = document.createElement('hr');
contenedorFiltros.appendChild(hr);

// opcion de los filtros 
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
            elemento.style.display = 'none'; // ocultan todos los elementos
        });

        const hayCheckboxSeleccionado = Array.from(checkboxes).some(cb => cb.checked);

        if (hayCheckboxSeleccionado) {
            // Mostrar solo elementos según filtro seleccionado
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
            // mostrar todas las banderas si no se selecciono uno 
            todosElementos.forEach(elemento => {
                elemento.style.display = 'block';
            });
        }
    });
});

// Crear banderas en la placa madre
placamadreC[6].partes.forEach((cadParte) => {
    let item = document.createElement('div');
    item.className = cadParte.nombre; 
    item.classList.add("elemento-placa");
    item.style.display = 'block'; 

    let bandera = document.createElement('div');
    bandera.className = "bandera";
    bandera.innerText = cadParte.nombre;
    item.appendChild(bandera);

    contenedorPlaca.appendChild(item);
});

// Agregar contenedor de la placa al body
document.body.appendChild(contenedorPlaca);
