const CATALOGO = [{
    id: 1,
    nombre: "Cheesecake tipo NY",
    precio: 4000,
    cantidad: 0
},{
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
},{
    id: 5,
    nombre: "Pavlova Clásica",
    precio: 3500,
    cantidad: 0
},{
    id: 6,
    nombre: "Pavlova Silvestre",
    precio: 4200,
    cantidad: 0
},{
    id: 7,
    nombre: "Pavlova de Nuez/Almendras",
    precio: 4000,
    cantidad: 0
},{
    id: 8,
    nombre: "Key Lemon Pie",
    precio: 3800,
    cantidad: 0
},{
    id: 9,
    nombre: "Tarta de Frutillas",
    precio: 3500,
    cantidad: 0
},{
    id: 10,
    nombre: "Key Lime Pie",
    precio: 3900,
    cantidad: 0
},{
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
},{
    id: 13,
    nombre: "Sablée de Nuez/Almendras",
    precio: 4000,
    cantidad: 0
},{
    id: 14,
    nombre: "Chocotorta",
    precio: 4000,
    cantidad: 0
},{
    id: 15,
    nombre: "Torta Oreo",
    precio: 2800,
    cantidad: 0
},{
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
},{
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
},{
    id: 20,
    nombre: "Macarons",
    precio: 1100,
    cantidad: 0
},{
    id: 21,
    nombre: "Brownies",
    precio: 1200,
    cantidad: 0
},{
    id: 22,
    nombre: "Alfajorcitos Clásicos",
    precio: 1200,
    cantidad: 0
},{
    id: 23,
    nombre: "Alfajorcitos de Nuez/Almendras",
    precio: 1400,
    cantidad: 0
},{
    id: 24,
    nombre: "Alfajores Blockazo",
    precio: 1000,
    cantidad: 0
},{
    id: 25,
    nombre: "Coquitos",
    precio: 1000,
    cantidad: 0
},{
    id: 26,
    nombre: "Alfajores de Maicena",
    precio: 1200,
    cantidad: 0
}
]
const CARRITO = []; 
let cantidadCarrito=0;


//mapeo cada botón con su Id
const PRODUCTO = document.querySelectorAll("#hola button")
console.log(PRODUCTO)

PRODUCTO.forEach(btn => {
    btn.addEventListener("click", ()=> {console.log(btn.dataset.id)
    let productoElegido = CATALOGO.find(item => item.id === parseInt(btn.dataset.id));
    console.log(productoElegido);

    agregarAlCarrito(parseInt(btn.dataset.id));
    console.log(CARRITO);

    cantidadCarrito = CARRITO.reduce((acc, elemento) => acc + elemento.cantidad, 0);
    console.log(cantidadCarrito)

    if(CARRITO.length !=0){
        let display= document.getElementById("display");
        console.log(display.innerText);
        display.innerHTML= cantidadCarrito;
    }
    if(CARRITO.length != 0){
        let carro= document.getElementById("carro");
        console.log(carro.innerText);
        carro.innerHTML= "Detalle del carrito";  

    }
    for (let i=0; i< CARRITO.length; i++){      

        const carro = document.createElement("div");

        console.log(carro);

        console.log(CARRITO);

       let contenido = (CARRITO[i].cantidad + " unidad(es) de " + CARRITO[i].nombre);

        console.log(contenido);

        let content= document.createTextNode(contenido);
        

        carro.appendChild(content);
        
        let tablita = document.getElementById("tabla");

        console.log(tablita)
        
        tablita.appendChild(carro, tablita);

       }
    
});
  
});


function agregarAlCarrito (id) {


       let productoElegido = CATALOGO.find(productoElegido => productoElegido.id === id);
       let precioProducto= productoElegido.precio;
       let productoExistenteEnCarrito = CARRITO.some(producto => producto.id === id);

        if (productoExistenteEnCarrito) {

           productoElegido.cantidad++;
           productoElegido.precio = precioProducto * productoElegido.cantidad;

            console.log(CARRITO);
        } else {
           productoElegido.cantidad = 1;
           productoElegido.precio = precioProducto * productoElegido.cantidad;


            CARRITO.push(productoElegido);

            console.log(CARRITO);
        }

    }

  


    