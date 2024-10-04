import { header } from "../../header/header.js";
import { placamadreC } from "../../../assets/Ddata.js";

console.log("PlacaMadre.js se está ejecutando");

document.body.appendChild(header);

let contenedorPlaca = document.createElement('div');
contenedorPlaca.className = 'placa-contenedor';

// Imagen
let placaimg = document.createElement('img');
placaimg.src = './img/Placaa.webp';
placaimg.alt = 'Img de placa madre';
console.log("Imagen creada:", placaimg); 
contenedorPlaca.appendChild(placaimg);


placamadreC[6].partes.forEach((cadParte)=>{
    console.log(cadParte);

    let item = document.createElement('div');
    item.className = cadParte.nombre;
    item.classList.add("elemento-placa");

    let bandera = document.createElement('div');
    bandera.className = "bandera";
    bandera.innerText = cadParte.nombre;
    item.appendChild(bandera);

    contenedorPlaca.appendChild(item);
});


document.body.appendChild(contenedorPlaca);