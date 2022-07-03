const CATALOGO = [{
    id: 1,
    nombre: "Cheesecake tipo NY",
    precio: 4000,
    cantidad: 0
}, {
    id: 2,
    nombre: "Rogel",
    precio: 3500,
    cantidad: 0
},
{
    id: 3,
    nombre: "Marquisse",
    precio: 3800,
    cantidad: 0
},
{
    id: 4,
    nombre: "Torta de Nuez",
    precio: 3800,
    cantidad: 0
}, {
    id: 5,
    nombre: "Pavlova Clásica",
    precio: 3500,
    cantidad: 0
}, {
    id: 6,
    nombre: "Pavlova Silvestre",
    precio: 4200,
    cantidad: 0
}, {
    id: 7,
    nombre: "Pavlova de Nuez/Almendras",
    precio: 4000,
    cantidad: 0
}, {
    id: 8,
    nombre: "Key Lemon Pie",
    precio: 3800,
    cantidad: 0
}, {
    id: 9,
    nombre: "Tarta de Frutillas",
    precio: 3500,
    cantidad: 0
}, {
    id: 10,
    nombre: "Key Lime Pie",
    precio: 3900,
    cantidad: 0
}, {
    id: 11,
    nombre: "Sablée con Frutos Rojos",
    precio: 4000,
    cantidad: 0
},
{
    id: 12,
    nombre: "Lemon Pie",
    precio: 3500,
    cantidad: 0
}, {
    id: 13,
    nombre: "Sablée de Nuez/Almendras",
    precio: 4000,
    cantidad: 0
}, {
    id: 14,
    nombre: "Chocotorta",
    precio: 4000,
    cantidad: 0
}, {
    id: 15,
    nombre: "Torta Oreo",
    precio: 2800,
    cantidad: 0
}, {
    id: 16,
    nombre: "Havanet Negro",
    precio: 3200,
    cantidad: 0
},
{
    id: 17,
    nombre: "Havanet Blanco",
    precio: 3200,
    cantidad: 0
}, {
    id: 18,
    nombre: "Layer Cake",
    precio: 5500,
    cantidad: 0
},
{
    id: 19,
    nombre: "Cookie Cake",
    precio: 4500,
    cantidad: 0
}, {
    id: 20,
    nombre: "Macarons",
    precio: 1100,
    cantidad: 0
}, {
    id: 21,
    nombre: "Brownies",
    precio: 1200,
    cantidad: 0
}, {
    id: 22,
    nombre: "Alfajorcitos Clásicos",
    precio: 1200,
    cantidad: 0
}, {
    id: 23,
    nombre: "Alfajorcitos de Nuez/Almendras",
    precio: 1400,
    cantidad: 0
}, {
    id: 24,
    nombre: "Alfajores Blockazo",
    precio: 1000,
    cantidad: 0
}, {
    id: 25,
    nombre: "Coquitos",
    precio: 1000,
    cantidad: 0
}, {
    id: 26,
    nombre: "Alfajores de Maicena",
    precio: 1200,
    cantidad: 0
}
]

const CARRITO = [];
let cantidadCarrito = 0;
let precioCarrito = 0;
const contenedorCarrito = document.getElementById("carrito-contenedor");
const borrarCarrito = document.getElementById("vaciar-carrito");
const confirmarCompra = document.getElementById("confirmar-carrito");
const opcionesDePago = document.getElementById("opciones-pago");

const PRODUCTO = document.querySelectorAll("#hola button")
console.log(PRODUCTO)

PRODUCTO.forEach(btn => {
btn.addEventListener("click", () => {
    console.log(btn.dataset.id)
    let productoElegido = CATALOGO.find(item => item.id === parseInt(btn.dataset.id));
    console.log(productoElegido);
    
    agregarAlCarrito(parseInt(btn.dataset.id));
    console.log(CARRITO);
});

});

confirmarCompra.addEventListener("click", confirmarCarrito);

borrarCarrito.addEventListener("click", vaciarCarrito);


function calcularCantidad() {

cantidadCarrito = CARRITO.reduce((acc, elemento) => acc + elemento.cantidad, 0);
console.log(cantidadCarrito)
let display = document.getElementById("display");
let quantity = document.getElementById("quantity");
console.log(display.innerText);
display.innerHTML = cantidadCarrito;
quantity.innerHTML = cantidadCarrito;
}

function calcularPrecio() {

precioCarrito = CARRITO.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);
console.log(precioCarrito)
let precioTotal = document.getElementById("total");
console.log(precioTotal.innerText);
precioTotal.innerHTML = precioCarrito;
}

function agregarAlCarrito(id) {

let productoElegido = CATALOGO.find(productoElegido => productoElegido.id === id);
let productoExistenteEnCarrito = CARRITO.some(producto => producto.id === id);

if (productoExistenteEnCarrito) {
    
    productoElegido.cantidad++;
    actualizarCarrito();
    console.log(CARRITO);
} else {
    productoElegido.cantidad = 1;
    
    CARRITO.push(productoElegido);
    actualizarCarrito();
    console.log(CARRITO);
}

}


function actualizarCarrito() {
contenedorCarrito.innerHTML = " ";
CARRITO.forEach(item => {
    const div = document.createElement("div");
    div.className = "tabla"
    div.innerHTML = `
<tr>
<td>${item.nombre} </td>
<td>Cantidad: <span id=cantidad>${item.cantidad}</td>
<td>Precio: $${item.precio * item.cantidad}</td>
<td><button onclick = "disminuirCantidad(${item.id})" class="boton">-</button></td>
<td><button onclick = "aumentarCantidad(${item.id})" class="boton">+</button></td>
<td><button onclick = "eliminarProducto(${item.id})" class="boton">Eliminar</button></td>
</tr>
`
    contenedorCarrito.appendChild(div);
})
calcularCantidad();
calcularPrecio();
}

function eliminarProducto(id) {

let productoEliminado = CARRITO.find(productoEliminado => productoEliminado.id === id)
CARRITO.splice(CARRITO.indexOf(productoEliminado), 1);
actualizarCarrito();
calcularCantidad();
calcularPrecio();
console.log(CARRITO);

}

function aumentarCantidad(id) {
let productoModificado = CARRITO.find(productoModificado => productoModificado.id === id);
productoModificado.cantidad++;
actualizarCarrito();
calcularPrecio();
console.log(CARRITO);

}

function disminuirCantidad(id) {

let productoModificado = CARRITO.find(productoModificado => productoModificado.id === id);
productoModificado.cantidad--;
actualizarCarrito();
calcularPrecio();
console.log(CARRITO);

}

function confirmarCarrito() {
const newDiv = document.createElement("div");
newDiv.innerHTML =
    `
<table>
<tr>
<td><h3 class="fw-bold">Seleccione la forma de pago</h3></td>
</tr>
<tr>
<td><button onclick = "pagoEfectivo()" id="efectivo" class="boton my-3">Efectivo</button></td><td><h4 class="fw-bold px-2">10% de descuento</h4></td>
</tr>
<tr>
<td><button onclick = "pagoTransferencia()" id="transferencia" class="boton my-3">Transferencia</button></td><td><h4 class="fw-bold px-2">5% de descuento</h4></td>
</tr>
<tr>
<td><button onclick = "pagoMP()" id="mercado-pago" class="boton my-3">Mercado Pago</button></td>
</tr>
</table>
`
opcionesDePago.appendChild(newDiv);

}

function vaciarCarrito() {
CARRITO.splice(0, CARRITO.length);
console.log(CARRITO);
actualizarCarrito();
calcularPrecio();
actualizarCarrito();
}

function pagoEfectivo(){
    const ultimoPrecio = document.getElementById("precioFinal");
    ultimoPrecio.innerHTML= "El precio total abondando en efectivo es $" + precioCarrito * 0.90;
}

function pagoTransferencia(){
    const ultimoPrecio = document.getElementById("precioFinal");
    ultimoPrecio.innerHTML= "El precio total abondando en efectivo es $" + precioCarrito * 0.95;
}

function pagoMP(){
    const ultimoPrecio = document.getElementById("precioFinal");
    ultimoPrecio.innerHTML= "El precio total abondando en efectivo es $" + precioCarrito;
}