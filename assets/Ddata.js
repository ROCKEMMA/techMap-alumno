const placamadreC = [
  {
    nombre: "SSD",
    descripcion:
      "La unidad de estado sólido (SSD) es un dispositivo de almacenamiento que utiliza memoria flash para guardar datos, reemplazando los discos mecánicos de los discos duros tradicionales.",
    partes: [
      {
        nombreParte: "Memoria NAND",
        descripcion: "La memoria NAND es el tipo de memoria flash utilizada en los SSD para almacenar datos de manera no volátil.",
        categoria: "Almacenamiento",
      },
      {
        nombreParte: "Controlador",
        descripcion:
          "El controlador es el cerebro del SSD, encargado de gestionar la lectura, escritura y borrado de datos en la memoria NAND.",
        categoria: "Controladores",
      },
      {
        nombreParte: "DRAM Cache",
        descripcion: "El caché DRAM se utiliza para acelerar las operaciones de lectura y escritura temporales.",
        categoria: "Almacenamiento",
      },
      {
        nombreParte: "Interfaz SATA o NVMe",
        descripcion:
          "La interfaz SATA o NVMe conecta el SSD a la placa madre y define la velocidad de transferencia de datos.",
        categoria: "Conectores",
      },
    ],
    imagenes: ["https://i5.walmartimages.com/asr/62a9abd1-926c-4ff9-8f93-a3c2f4d4314d_1.b263a12f4422d31e6c24560b928b4418.jpeg",
       "https://mivoot.com/gt/wp-content/uploads/2021/03/wd-green-ssd-480gb-front.png.thumb_.1280.1280.png",
        "https://acosa.com.gt/wp-content/uploads/2023/03/HS-SSD-E100-1024G.jpg"],
  },
  {
    nombre: "RAM",
    descripcion:
      "La memoria RAM es un tipo de memoria volátil que se utiliza para almacenar datos temporales que la CPU necesita acceder rápidamente.",
    partes: [
      {
        nombreParte: "Módulos de Memoria",
        descripcion:
          "Los módulos de memoria RAM son las piezas físicas que contienen los chips de memoria y se instalan en la placa madre.",
        categoria: "Almacenamiento",
      },
      {
        nombreParte: "Chips de DRAM",
        descripcion:
          "Los chips de DRAM son los componentes en los módulos de RAM que almacenan datos de forma temporal mientras el sistema está en funcionamiento.",
        categoria: "Almacenamiento",
      },
      {
        nombreParte: "Contactos Dorados",
        descripcion:
          "Los contactos dorados permiten la transferencia de datos entre los módulos de RAM y la placa madre.",
        categoria: "Conectores",
      },
      {
        nombreParte: "PCB",
        descripcion:
          "El PCB (Placa de Circuito Impreso) es la estructura que conecta todos los chips y componentes del módulo de RAM.",
        categoria: "Estructura",
      },
    ],
    imagenes: ["https://www.macrosistemas.com/wp-content/uploads/Brocs-101122-3.jpg", 
      "https://cdn.akakce.com/kingston/kingston-1-gb-800-mhz-ddr2-cl6-kvr800d2n6-1g-z.jpg",
       "https://cdn0-production-images-kly.akamaized.net/UMpxIF7wTx9VxQtXYDhiqvAkjKI=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1607481/original/000851700_1496032747-RAM.jpg"],
  },
  {
    nombre: "HDD",
    descripcion:
      "El disco duro (HDD) es un dispositivo de almacenamiento magnético que utiliza discos giratorios para leer y escribir datos.",
    partes: [
      {
        nombreParte: "Plato",
        descripcion:
          "El plato es el disco giratorio dentro del HDD donde se almacenan los datos de manera magnética.",
        categoria: "Almacenamiento",
      },
      {
        nombreParte: "Cabezal de Lectura/Escritura",
        descripcion:
          "El cabezal de lectura/escritura es responsable de leer y escribir datos en el plato mientras gira.",
        categoria: "Lectura/Escritura",
      },
      {
        nombreParte: "Eje de Rotación",
        descripcion: "El eje de rotación permite que los platos giren a alta velocidad dentro del HDD.",
        categoria: "Mecánica",
      },
      {
        nombreParte: "Controlador",
        descripcion:
          "El controlador gestiona la lectura y escritura de datos en el HDD, así como la comunicación con la placa madre.",
        categoria: "Controladores",
      },
      {
        nombreParte: "Interfaz SATA",
        descripcion:
          "La interfaz SATA es el conector que permite que el HDD se comunique con la placa madre y otros componentes.",
        categoria: "Conectores",
      },
    ],
    imagenes: ["https://www.crucial.es/content/dam/crucial/articles/pc-users/why-is-my-laptop-so-slow-/hard-disk-drive.jpg.transform/large-jpg/img.jpg",
       "https://m.media-amazon.com/images/I/51-+KKUA7cL._AC_UF894,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/I/815FxqvNQzL._AC_SL1500_.jpg"],
  },
  {
    nombre: "GPU",
    descripcion:
      "La GPU, o tarjeta gráfica, es responsable de renderizar gráficos y enviar imágenes a la pantalla. Es esencial para tareas gráficas intensivas como juegos y diseño 3D.",
    partes: [
      {
        nombreParte: "Chip Gráfico",
        descripcion:
          "El chip gráfico es el procesador central de la GPU que maneja cálculos de renderizado y procesamiento visual.",
        categoria: "Chips",
      },
      {
        nombreParte: "Memoria VRAM",
        descripcion:
          "La VRAM es la memoria dedicada de la GPU que almacena datos gráficos como texturas y mapas de bits.",
        categoria: "Memoria",
      },
      {
        nombreParte: "Conectores de Energía",
        descripcion:
          "Los conectores de energía proporcionan el voltaje adicional necesario para que la GPU funcione correctamente.",
        categoria: "Conectores",
      },
      {
        nombreParte: "Puertos de Salida de Video",
        descripcion:
          "Puertos como HDMI, DisplayPort o DVI que permiten la conexión de uno o varios monitores.",
        categoria: "Puertos",
      },
      {
        nombreParte: "Ventiladores",
        descripcion:
          "Los ventiladores de la GPU mantienen temperaturas óptimas durante su uso intensivo.",
        categoria: "Componentes de Soporte",
      },
      {
        nombreParte: "Backplate",
        descripcion:
          "El backplate proporciona refuerzo estructural y ayuda en la disipación de calor.",
        categoria: "Componentes de Soporte",
      },
    ],
    imagenes: ["https://www.hellotech.com/blog/wp-content/uploads/2020/02/what-is-a-gpu-770x462.jpg", 
      "https://lh4.googleusercontent.com/BOafTsQU0q3ccS4N-tPzdVmmCYxEePTW9F81hEh1GKU1knFaaU_W6VIoz47wWnGBCAFF_icCmI1PwblNJYwYmY3zSr876CU-zzPFRPUxaNuEbAStsJ-fOQnVxDi8tiFUIhAxpXKv5NZ-ldYi9p7jPg",
       "https://d598hd2wips7r.cloudfront.net/magefan_blog/C_mo_escoger_la_mejor_GPU_para_videojuegos.png"],
  },
  {
    nombre: "CPU",
    descripcion:
      "El CPU, o procesador, es el cerebro del ordenador que realiza los cálculos y operaciones principales.",
    partes: [
      {
        nombreParte: "Núcleos",
        descripcion:
          "Los núcleos son las unidades de procesamiento que ejecutan las instrucciones de los programas.",
        categoria: "Chips",
      },
      {
        nombreParte: "Cache L1/L2/L3",
        descripcion:
          "La memoria cache almacena datos frecuentemente utilizados para acelerar el acceso.",
        categoria: "Memoria",
      },
      {
        nombreParte: "Socket",
        descripcion: "Es el conector que une el CPU con la placa madre.",
        categoria: "Conectores",
      },
      {
        nombreParte: "Controlador de Memoria",
        descripcion:
          "El controlador de memoria integrado gestiona el acceso a la RAM.",
        categoria: "Chips",
      },
      {
        nombreParte: "Disipador de Calor",
        descripcion:
          "El disipador de calor ayuda a evitar el sobrecalentamiento del CPU.",
        categoria: "Componentes de Soporte",
      },
      {
        nombreParte: "Overclocking",
        descripcion:
          "Algunos CPUs permiten ajustar la velocidad de reloj mediante overclocking.",
        categoria: "Configuración",
      },
    ],
    imagenes: ["https://img.pccomponentes.com/pcblog/3560/partes-cpu.jpg",
       "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Intel-Rocker-Lake-2-e1615908186584-920x614.jpg",
        "https://d1g9li960vagp7.cloudfront.net/wp-content/uploads/2023/11/Wordpress_Was-ist-CPU_Lina-1024x576.jpg"],
  },
  {
    nombre: "Fuente de Poder",
    descripcion:
      "La fuente de poder convierte la electricidad de corriente alterna (CA) en corriente continua (CC) para alimentar los componentes del ordenador.",
    partes: [
      {
        nombreParte: "Conectores ATX (24 Pines)",
        descripcion: "Los conectores ATX proporcionan la alimentación principal a la placa madre.",
        categoria: "Conectores",
      },
      {
        nombreParte: "Conectores PCI",
        descripcion: "Los conectores PCI suministran energía adicional a tarjetas de expansión como la GPU.",
        categoria: "Conectores",
      },
      {
        nombreParte: "Ventilador de Refrigeración",
        descripcion:
          "El ventilador de refrigeración mantiene la fuente de poder refrigerada.",
        categoria: "Componentes de Soporte",
      },
      {
        nombreParte: "Transformador",
        descripcion:
          "Convierte la corriente alterna (CA) en corriente continua (CC) a diferentes voltajes.",
        categoria: "Chips",
      },
      {
        nombreParte: "Protecciones contra Sobrecarga",
        descripcion:
          "Incluye circuitos de protección para evitar daños por sobrecarga.",
        categoria: "Componentes de Soporte",
      },
      {
        nombreParte: "Modularidad",
        descripcion:
          "Algunas fuentes de poder son modulares, lo que permite conectar solo los cables necesarios.",
        categoria: "Configuración",
      },
    ],
    imagenes: ["https://compubit.com.co/wp-content/uploads/2023/10/FUENTE-DE-PODER-PARA-PC-DE-750W_2-1-1024x1024.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn7jjCqd0B-Clm7dwRHqJM7qKKeQ9ype6Og&s",
        "https://xcase.com.mx/wp-content/uploads/2017/10/FUE80002_FOTO.jpg"],
  },
  {
    nombre: "Placa Madre",
    descripcion:
      "La placa madre es el componente principal de un ordenador, donde se conectan todos los demás componentes y periféricos.",
    partes: [
      {
        nombre: "Socket del Procesador",
        descripcion: "El socket del procesador es la ranura donde se instala el CPU.",
        categoria: "Conectores",
      },
      {
        nombre: "Ranuras de RAM",
        descripcion: "Las ranuras de RAM son los espacios donde se insertan los módulos de memoria RAM.",
        categoria: "Conectores",
      },
      {
        nombre: "Puertos PCI",
        descripcion: "Los puertos PCI permiten la instalación de tarjetas de expansión.",
        categoria: "Conectores",
      },
      {
        nombre: "Conectores SATA",
        descripcion: "Los conectores SATA se utilizan para conectar discos duros y unidades SSD.",
        categoria: "Conectores",
      },
      {
        nombre: "Chip de Audio",
        descripcion: "El chip de audio maneja el procesamiento y la salida de sonido.",
        categoria: "Chips",
      },
      {
        nombre: "Chip BIOS/UEFI",
        descripcion:
          "El chip BIOS o UEFI contiene el firmware que inicializa el hardware del sistema.",
        categoria: "Chips",
      },
      {
        nombreParte: "Puertos USB",
        descripcion: "Los puertos USB permiten la conexión de dispositivos periféricos.",
        categoria: "Puertos",
      },
      {
        nombre: "Conectores de Energía",
        descripcion: "Los conectores de energía permiten que la placa madre reciba alimentación desde la fuente de poder.",
        categoria: "Conectores",
      },
      {
        nombre: "Chipset",
        descripcion: "El chipset controla la comunicación entre el procesador y los demás componentes.",
        categoria: "Chips",
      },
    ],
    imagenes: ["https://http2.mlstatic.com/D_NQ_NP_862855-MLU70537296149_072023-O.webp",
       "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Placa_Base_MicroATX.JPG/1200px-Placa_Base_MicroATX.JPG"],
  },
];

export { placamadreC };