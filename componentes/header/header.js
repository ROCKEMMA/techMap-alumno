let header = document.createElement('div');
header.classList.add('header');

let titu = document.createElement('p');
let tituloTexto = document.createTextNode('TechMap');
titu.appendChild(tituloTexto);
header.appendChild(titu);

let options = document.createElement('div');
options.classList.add('opciones');

let namecomponent = ['SSD', 'RAM','HDD', 'GPU', 'CPU', 'Fuente de Poder', 'Placa Madre'];
namecomponent.forEach(function(texto) {
let componenteopcion = document.createElement('p');
componenteopcion.textContent = texto;
options.appendChild(componenteopcion);
});

header.appendChild(options);

let contedorbtn = document.createElement('div');
let btngit = document.createElement('button');
btngit.classList.add('botomgit');

let linkgit = document.createElement('a');
linkgit.href = 'https://github.com/ROCKEMMA/techMap-danna';
linkgit.textContent = 'GITHUB';

btngit.appendChild(linkgit);
contedorbtn.appendChild(btngit);
header.appendChild(contedorbtn);

document.body.appendChild(header);
export {header};