class Productos {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria.toUpperCase();
        this.cantidad = 0;
        this.stock = true;
    }
    sinStock() {
        this.stock = false;
    }
}
//Crea los productos
function getProductos(listaProductos) {

        let tortaCorazon = new Productos("Torta de corazon", 3600, "Torta");
        let magdalenaTutifruti = new Productos("Magdalenas tutifruti", 250, "Magdalena");
        let tortaPinky = new Productos("Torta pinky", 2000, "Torta") ;
        let magdalenasBlueberry = new Productos("Magdalena blueberry", 300 , "Magdalena"); 
        let tortaSweetDream = new Productos("Torta sweet dream", 6950, "Torta");
        let magdalenasMouse = new Productos("Magdalena mouse", 360, "Magdalena");
        let tortaTeGree = new Productos("Torta te gree", 6900, "Torta");
        let magdalenasFlorales = new Productos("Magdalena florales", 300, "Magdalena");
        listaProductos[0] = tortaCorazon;
        listaProductos[1] = magdalenaTutifruti;
        listaProductos[2] = tortaPinky;
        listaProductos[3] = magdalenasBlueberry;
        listaProductos[4] = tortaSweetDream;
        listaProductos[5] = magdalenasMouse;
        listaProductos[6] = tortaTeGree;
        listaProductos[7] = magdalenasFlorales;
    }
//pushea el producto al carrito
const carrito = function (miCarrito, producto) { miCarrito.push(producto); }
//Suma el precio 
const suma = (n1, n2) => n1 + n2;
//Calcula el precio final
function getPrecioFinal(miCarrito) {
    let precioFinal = 0;
    for (let i = 0; i < miCarrito.length; i++) {
        precioFinal = precioFinal + (miCarrito[i].cantidad * miCarrito[i].precio)
    }
    return precioFinal;
}

//Muestra la cuenta en un alert
function showCarrito(miCarrito) {
    let string = "Su pedido es:\n";
    for (let i = 0; i < miCarrito.length; i++) {
        string = string + miCarrito[i].cantidad + " " + miCarrito[i].nombre + ".......$" + (miCarrito[i].precio * miCarrito[i].cantidad) + "\n";
    }
    string = string + "Su total a pagar es de : $" + getPrecioFinal(miCarrito);
    return string;
}
//Agrega una cantidad al producto y si es 0 llama a la funcion para ponerlo en el carrito
function agregar(producto, miCarrito) {
    if (producto.cantidad == 0) {
        producto.cantidad++;
        carrito(miCarrito, producto);
    } else {
        producto.cantidad++;
    }
}
//Restar la cantidad de productos y si es igual a 0 sacar al producto
function sacar(producto, miCarrito) {
    if (producto.cantidad == 1) {
        producto.cantidad--;
        miCarrito.splice(miCarrito.indexOf(producto), 1);
    } else if (producto.cantidad > 1) {
        producto.cantidad--;
    } else { }
}
//Ingresar los distintos productos
function llenarCarrito(listaProductos, miCarrito) {
    let compra = true;
    while (compra) {
        let opcion = prompt("Del 1 al 8 se usan para seleccionar los productos y 9 finalizar el pedido\nEl menu es:\n" + listaProductos[0].nombre + ":" + listaProductos[0].precio + "\n" + listaProductos[1].nombre + ":" + listaProductos[1].precio + "\n" + listaProductos[2].nombre + ":" + listaProductos[2].precio + "\n"+  listaProductos[3].nombre + ":" + listaProductos[3].precio +"\n" + listaProductos[4].nombre + ":" + listaProductos[4].precio + "\n"+ listaProductos[5].nombre + ":" + listaProductos[5].precio + "\n"+ listaProductos[6].nombre + ":" + listaProductos[6].precio + "\n"+ listaProductos[7].nombre + ":" + listaProductos[7].precio + "\n"+ showCarrito(miCarrito));
        switch (opcion) {
            case "1":
                agregar(listaProductos[0], miCarrito)
                break;
            case "2":
                agregar(listaProductos[1], miCarrito)
                break;
            case "3":
                agregar(listaProductos[2], miCarrito)
                break;
            case "4":
                agregar(listaProductos[3], miCarrito)
                break;
            case "5":
                agregar(listaProductos[4], miCarrito)
                break;
            case "6":
                agregar(listaProductos[5], miCarrito)
                break;
            case "7":
                agregar(listaProductos[6], miCarrito)
                break;
            case "8":
                agregar(listaProductos[7], miCarrito)
                break;
            case "9":
                compra = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
//Ingresar la opcion de los productos a borrar
function vaciarCarrito(miCarrito) {
    let compra = true;
    while (compra) {
        let opcion = prompt("Del 1 al 8 se usan para seleccionar los productos y 9 Finalizar compra \n" + showCarrito(miCarrito));
        switch (opcion) {
            case "1":
                if (miCarrito[0] != undefined) {
                    sacar(miCarrito[0], miCarrito);
                }

                break;
            case "2":
                if (miCarrito[1] != undefined) {
                    sacar(miCarrito[1], miCarrito);
                }
                break;
            case "3":
                if (miCarrito[2] != undefined) {
                    sacar(miCarrito[2], miCarrito);
                }
                break;
            case "4":
                if (miCarrito[3] != undefined) {
                    sacar(miCarrito[3], miCarrito);
                }
                break;
            case "5":
                if (miCarrito[4] != undefined) {
                    sacar(miCarrito[4], miCarrito);
                }
                break;
            case "6":
                if (miCarrito[5] != undefined) {
                    sacar(miCarrito[5], miCarrito);
                }
                break;
            case "7":
                if (miCarrito[6] != undefined) {
                    sacar(miCarrito[6], miCarrito);
                }
            case "8":
                if (miCarrito[7] != undefined) {
                    sacar(miCarrito[7], miCarrito);
                }
                break;
            case "9":
                compra = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
//Menu principal con opciones
function home() {
    const miCarrito = [];
    const listaProductos = [];
    getProductos(listaProductos);
    alert("Bienvenido a AmazingBake\nLugar de la mejor pasteleria de Argentina!");
    let comprando = true;
    while (comprando == true) {
        let op = prompt("Opciones\n1-Acceder al menu\n2-Eliminar productos del carrito\n3-Finalizar compra");
        switch (op) {
            case "1":
                llenarCarrito(listaProductos, miCarrito);
                break;
            case "2":
                vaciarCarrito(miCarrito)
                break;
            case "3":
                alert(showCarrito(miCarrito));
                comprando = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
home();


