// Agregar y sacar (productos + precios + imagen)
const productos = [ 
  { id: 1, nombre: "Pijama Lilo y Stitch", precio: 24000, imagen: "./media/productos/lilo.jpeg" },
  { id: 2, nombre: "Pijama Super Mario", precio: 24000, imagen: "media/productos/mario.jpeg" },
  { id: 3, nombre: "Pijama Capybara", precio: 24000, imagen: "media/productos/capybara.jpeg" },
  { id: 4, nombre: "Pijama Boca", precio: 24000, imagen: "./media/productos/boca.jpeg" },
  { id: 5, nombre: "Pijama River", precio: 24000, imagen: "media/productos/river.jpeg" },
  { id: 6, nombre: "Pijama Unicornio", precio: 20000, imagen: "media/productos/unicornio-violeta.jpeg" },
  { id: 7, nombre: "Pijama Unicornio", precio: 20000, imagen: "./media/productos/unicornio-negro.jpeg" },
  { id: 8, nombre: "Pijama Unicornio", precio: 20000, imagen: "media/productos/unicornio-gris.jpeg" },
  { id: 9, nombre: "Pijama Unicornio", precio: 20000, imagen: "media/productos/unicornio-fuxia.jpeg" },
  { id: 10, nombre: "Pijama Skye Paw Patrol", precio: 20000, imagen: "./media/productos/skye-negro.jpeg" },
  { id: 11, nombre: "Pijama Skye Paw Patrol", precio: 20000, imagen: "media/productos/skye-fuxia.jpeg" },
  { id: 12, nombre: "Pijama Marshall Paw Patrol", precio: 20000, imagen: "media/productos/marshall-rojo.jpeg" },
  { id: 13, nombre: "Pijama Marshall Paw Patrol", precio: 20000, imagen: "media/productos/marshall-negro.jpeg" },
  { id: 14, nombre: "Pijama Marshall Paw Patrol", precio: 20000, imagen: "media/productos/marshall-azul.jpeg" },
  { id: 15, nombre: "Pijama Chase Paw Patrol", precio: 20000, imagen: "media/productos/chase-rojo.jpeg" },
  { id: 16, nombre: "Pijama Chase Paw Patrol", precio: 20000, imagen: "media/productos/chase-negro.jpeg" },
  { id: 17, nombre: "Pijama Chase Paw Patrol", precio: 20000, imagen: "media/productos/chase-azul.jpeg" },
  { id: 18, nombre: "Pijama Minnie Mouse", precio: 20000, imagen: "media/productos/minnie-violeta.jpeg" },
  { id: 19, nombre: "Pijama Minnie Mouse", precio: 20000, imagen: "media/productos/minnie-negro.jpeg" },
  { id: 20, nombre: "Pijama Minnie Mouse", precio: 20000, imagen: "media/productos/minnie-gris.jpeg" },
  { id: 21, nombre: "Pijama Kuromi", precio: 20000, imagen: "media/productos/kuromi-violeta.jpeg" },
  { id: 22, nombre: "Pijama Kuromi", precio: 20000, imagen: "media/productos/kuromi-negro.jpeg" },
  { id: 23, nombre: "Pijama Kuromi", precio: 20000, imagen: "media/productos/marshall-rojo.jpeg" }, // CAMBIAR, es de relleno pq me quedaba feo sino
  { id: 24, nombre: "Pijama Kuromi", precio: 20000, imagen: "media/productos/marshall-rojo.jpeg" }, // CAMBIAR, es de relleno pq me quedaba feo sino
];
// carrito de compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// constantes
const listaHTML = document.getElementById("lista-productos"); //ul de productos
const botonComprar = document.getElementById("comprar"); // boton de compra (se explica solo)
const cantidadCarrito = document.getElementById("cantidad-carrito");
const botonVaciar = document.getElementById("vaciar");

// funcion mostrar productos
function mostrarProductos() {
  productos.forEach(prod => {
    const li = document.createElement("li"); // creo un elemento li

    const img = document.createElement("img"); // creo un elemento img
    img.src = prod.imagen; //le digo que la src de la imagen sea lo que defini como imagen en producto
    img.alt = prod.nombre; //le digo que la alt de la imagen sea lo que defini como nombre en producto
    document.createElement("button")

    const boton = document.createElement("button"); // creo el boton
    boton.textContent = "Agregar al carrito"; // texto del boton
    boton.classList.add("boton-agregado"); // clase para editar el estilo

    // evento al hacer click en el boton
    boton.addEventListener("click", () => {
      agregarAlCarrito(prod); // 
    });

    const texto = document.createElement("p"); // creo un contenedor p
    texto.textContent = `${prod.nombre} - $${prod.precio}`; // agrego valores de los elemento al contenedor p (texto)
    
    li.appendChild(img); //agrego como elemento de lista la imagen
    li.appendChild(texto); //agrego como elemento de lista el texto
    li.appendChild(boton); //agrego como elemento de la lista al boton

    listaHTML.appendChild(li); //agrego el elemento del tipo li dentro del ul 
  });
}

mostrarProductos(); // llamo a la funcion 

function agregarAlCarrito(producto) {
  carrito.push(producto); //lo agrega al carrito (array)
  localStorage.setItem("carrito", JSON.stringify(carrito)); // guarda en localStorage
  alert(`${producto.nombre} fue agregado al carrito`);
  mostrarCarrito();
}

function mostrarCarrito(){
  cantidadCarrito.textContent = carrito.length;
}

function comprarProductos() { // toca cambiarle la logica a esta funcion ya que ahora va a comprar lo que esta dentro del carrito que arme, dejo el codigo anterior para que se vea el pq cambie la funcion
  /*let seleccion = prompt("¿Qué pijama querés comprar? Ingresá el número:\n" +
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
  }*/
  if (carrito.length === 0) {
    alert("Tu carrito esta vacio, agrega algo antes de comprar");
    return;
  }

  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  const confirmar = confirm(`Estás por comprar ${carrito.length} productos por un total de $${total}.\n¿Confirmás la compra?`);
  if (confirmar) {
    alert("¡Gracias por tu compra! 🎉");
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
  } 
  else {
    alert("Compra cancelada.");
  }
}
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito() // actualiza la vista y pone el total en 0
}

botonComprar.addEventListener("click", comprarProductos);

botonVaciar.addEventListener("click", vaciarCarrito);

mostrarCarrito();
