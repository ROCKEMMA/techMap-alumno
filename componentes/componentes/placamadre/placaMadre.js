const buttons = document.querySelectorAll('.contenedorimg button');

const componentNames = {
    btn1: 'RAM',
    btn2: '24 Pines',
    btn3: 'CPU',
    btn4: 'Conectores',
    btn5: 'Puertos',
    btn6: 'Disipador',
    btn7: 'Chipset',
    btn8: 'BIOS'
};

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // coso para que salga el name
        button.classList.add('show-text');
        button.textContent = componentNames[button.id];
    });

    button.addEventListener('mouseout', () => {
        // coso para que este normal, cuando no pase el cursor
        button.classList.remove('show-text');
        button.textContent = ''; 
    });
});