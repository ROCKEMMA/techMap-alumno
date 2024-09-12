document.addEventListener('DOMContentLoaded', () => {
    const motherboardContainer = document.getElementById('motherboard-container');
    
    const partes = [
      { nombre: 'Socket del Procesador', x: 400, y: 50 },
      { nombre: 'Ranuras de RAM', x: 400, y: 150 },
      { nombre: 'Puertos PCI', x: 350, y: 250 },
      { nombre: 'Conectores SATA', x: 450, y: 250 },
      { nombre: 'Chip de Audio', x: 500, y: 300 },
      { nombre: 'Chip BIOS/UEFI', x: 350, y: 400 },
      { nombre: 'Puertos USB', x: 600, y: 400 },
      { nombre: 'Conectores de Energía', x: 100, y: 100 },
      { nombre: 'Chipset', x: 300, y: 300 }
    ];
  
    // Crear una bandera para cada parte
    partes.forEach(parte => {
      const flag = document.createElement('div');
      flag.classList.add('flag');
      flag.style.left = `${parte.x}px`;
      flag.style.top = `${parte.y}px`;
      flag.textContent = parte.nombre;
      flag.style.display = 'none'; // Ocultamos las banderas por defecto
      motherboardContainer.appendChild(flag);
      
      // Añadimos eventos para mostrar la bandera al pasar el mouse por el área correspondiente
      const area = document.querySelector(`area[data-parte="${parte.nombre}"]`);
      area.addEventListener('mouseover', () => {
        flag.style.display = 'block';
      });
      area.addEventListener('mouseout', () => {
        flag.style.display = 'none';
      });
    });
  });
  