import { header } from "./componentes/header/header.js"

let conexion = document.querySelector('.root');

function cargardiv(){
    conexion.innerHTML=`
    <div class="header">${header}</div>
    `;
}
cargardiv();