// Agregar y sacar (productos + precios + imagen)
const productos = [ //repito los pijamas pq es una pagina inventada y los puse de forma de testeo, en la entrega final los voy a cambiar para que sean todos distintos
  { id: 1, nombre: "Pijama Lilo y Stitch", precio: 5000, imagen: "./media/productos/lilo.jpg" },
  { id: 2, nombre: "Pijama Paw Patrol", precio: 4800, imagen: "media/productos/paw.jpg" },
  { id: 3, nombre: "Pijama Super Mario", precio: 4500, imagen: "media/productos/mario.jpg" },
  { id: 4, nombre: "Pijama Lilo y Stitch", precio: 5000, imagen: "./media/productos/lilo.jpg" },
  { id: 5, nombre: "Pijama Paw Patrol", precio: 4800, imagen: "media/productos/paw.jpg" },
  { id: 6, nombre: "Pijama Super Mario", precio: 4500, imagen: "media/productos/mario.jpg" },
  { id: 7, nombre: "Pijama Lilo y Stitch", precio: 5000, imagen: "./media/productos/lilo.jpg" },
  { id: 8, nombre: "Pijama Paw Patrol", precio: 4800, imagen: "media/productos/paw.jpg" },
  { id: 9, nombre: "Pijama Super Mario", precio: 4500, imagen: "media/productos/mario.jpg" },
  { id: 10, nombre: "Pijama Lilo y Stitch", precio: 5000, imagen: "./media/productos/lilo.jpg" },
  { id: 11, nombre: "Pijama Paw Patrol", precio: 4800, imagen: "media/productos/paw.jpg" },
  { id: 12, nombre: "Pijama Super Mario", precio: 4500, imagen: "media/productos/mario.jpg" },

];
// constantes
const listaHTML = document.getElementById("lista-productos"); //ul de productos
const botonComprar = document.getElementById("comprar"); // boton de compra (se explica solo)

// funcion mostrar productos
function mostrarProductos() {
  productos.forEach(prod => {
    const li = document.createElement("li"); // creo un elemento li

    const img = document.createElement("img"); // creo un elemento img
    img.src = prod.imagen; //le digo que la src de la imagen sea lo que defini como imagen en producto
    img.alt = prod.nombre; //le digo que la alt de la imagen sea lo que defini como nombre en producto
    

    const texto = document.createElement("p"); // creo un contenedor p
    texto.textContent = `${prod.nombre} - $${prod.precio}`; // agrego valores de los elemento al contenedor p (texto)
    
    li.appendChild(img); //agrego como elemento de lista la imagen
    li.appendChild(texto); //agrego como elemento de lista el texto

    listaHTML.appendChild(li); //agrego el elemento del tipo li dentro del ul 
  });
}

mostrarProductos(); // llamo a la funcion 

function comprarProductos() {
  let seleccion = prompt("¿Qué pijama querés comprar? Ingresá el número:\n" +
    productos.map(p => `${p.id}. ${p.nombre}`).join("\n"));

  const productoElegido = productos.find(p => p.id === parseInt(seleccion)); // uso el parseInt() para que lo que me escriba el usuario se pase a entero

  if (!productoElegido) {
    alert("Producto no encontrado :C");
    return;
  }

  const confirmar = confirm(`¿Seguro que querés comprar el ${productoElegido.nombre} por $${productoElegido.precio}?`);

  if (confirmar) {
    alert(`¡Gracias por tu compra! Elegiste: ${productoElegido.nombre}`);
    console.log("Compra confirmada:", productoElegido);
  } else {
    alert("Compra cancelada");
    console.log("Compra cancelada");
  }
}

botonComprar.addEventListener("click", comprarProductos);
