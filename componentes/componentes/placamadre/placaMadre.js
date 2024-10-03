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

// COMPONENTES

placamadreC[6].partes.forEach((cadaparte)=>{
    let componente1 = document.createElement('div');
    componente1.className = 'componente1';

    componente1.textContent = cadaparte.nombreParteuno;
    contenedorPlaca.appendChild(componente1);

    /* ---------------------------------- */
});

placamadreC[6].partes.forEach((cadaparte) => {
    let componente2 = document.createElement('div');
    componente2.className = 'componente2';

    
    componente2.textContent = cadaparte.nombreParteDos;     
    contenedorPlaca.appendChild(componente2);
});


placamadreC[6].partes.forEach((cadaparte)=>{

    let componente3 = document.createElement('div');
    componente3.className = 'componente3';

    componente3.textContent = cadaparte.nombreParteTres;
    contenedorPlaca.appendChild(componente3);
});

placamadreC[6].partes.forEach((cadaparte)=>{

    let componente4 = document.createElement('div');
    componente4.className = 'componente4';

    componente4.textContent = cadaparte.nombreParteCuatro;
    contenedorPlaca.appendChild(componente4);
});

placamadreC[6].partes.forEach((cadaparte)=>{

    let componente6 = document.createElement('div');
    componente6.className = 'componente6';

    componente6.textContent = cadaparte.nombreParteSeis;
    contenedorPlaca.appendChild(componente6);
});

placamadreC[6].partes.forEach((cadaparte)=>{

    let componente7 = document.createElement('div');
    componente7.className = 'componente7';

    componente7.textContent = cadaparte.nombreParteSiete;
    contenedorPlaca.appendChild(componente7);
});

placamadreC[6].partes.forEach((cadaparte)=>{

    let componente8 = document.createElement('div');
    componente8.className = 'componente8';

    componente8.textContent = cadaparte.nombreParteOcho;
    contenedorPlaca.appendChild(componente8);
});

placamadreC[6].partes.forEach((cadaparte)=>{

    let componente9 = document.createElement('div');
    componente9.className = 'componente9';

    componente9.textContent = cadaparte.nombreParteNueve;
    contenedorPlaca.appendChild(componente9);

});



document.body.appendChild(contenedorPlaca);