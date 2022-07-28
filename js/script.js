
function inicio() {
let compra = true;
    while (compra) {
        let opcion = prompt("Ingrese  el numeron ala opcion a realizar \n1-Ir al producto \n2 -Agregar al carrito \n3-Cancelar y salir");
        switch (opcion) {
            case "1":
                irAlProducto();
                break;
            case "2":
                agregaralCarrito();
                compra = false;
            case "3":
                compra = false;
                break;

            default:
                alert('La opcion que ingresaste es incorrecto');
        }
    }
 }
    const suma = (n1, n2) => n1 + n2;
    const irAlProducto = function () { alert('Productos:\n1 -Torta corazon: 3600$ \n2 -Magdalenas frutos rojos:250$ c/u \n3 -Torta pinky:2000$ \n4 -Magdalenas blueberry:300$ c/u  \n5 -Torta sweet dream:6950$  \n6 -Magdalenas mouse:360$ c/u \n7 -Torta te gree:6900$ \n8 -Magdalenas florales:300$ c/u'); } 
    const agregarProductos = (lista, productos) => lista + "\n" + productos;
    const finalizarCompra = function (total, lista) { alert("El total es de:" + lista + "\nEl total es de: " + total+"$") }

    function agregaralCarrito() {
        let elTotal = 0 ;
        let listaProductos = "" ;
        const precioTortaCorazon = 3600;
        const precionMagdalenasFrutosRojos = 250 ;
        const precioTortaPinky = 2000;
        const precioMagdalenasBlueberry = 300 ;
        const precioTortaSweetDream = 6950;
        const precioMagdalenasMouse = 360;
        const precioTortaTeGree = 6900;
        const precioMagdalenasFlorales = 300;
        
        let compra = true;
        while (compra) {
        let opcion = prompt("Que opcion desea agregar. Ingrese 9 para ver los productos y la opcion 10 para terminar");
        switch (opcion) {
                case "1":
                    elTotal = suma(elTotal, precioTortaCorazon);
                    listaProductos = agregarProductos(listaProductos, '-Torta corazon: 3600$');
                    console.log(elTotal);
                    alert(listaProductos)
                    break;
                case "2":
                    elTotal = suma(elTotal, precionMagdalenasFrutosRojos);
                    listaProductos = agregarProductos(listaProductos, '-Magdalenas frutos rojos:250$ c/u');
                    console.log(elTotal);
                    alert(listaProductos)
                    break;
                case "3":
                    elTotal = suma(elTotal, precioTortaPinky);
                    listaProductos = agregarProductos(listaProductos, '-Torta pinky:2000$');
                    console.log(elTotal);
                    alert(listaProductos)
                    break;

                case "4":
                    elTotal = suma(elTotal,  precioMagdalenasBlueberry);
                    listaProductos = agregarProductos(listaProductos, '-Magdalenas blueberry:300$ c/u');
                    console.log(elTotal);
                    alert(listaProductos)
                    break;

                case "5":
                    elTotal = suma(elTotal, precioTortaSweetDream);
                    listaProductos = agregarProductos(listaProductos, '-Torta sweet dream:6950$');
                    console.log(elTotal);
                    alert(listaProductos)

                case "6":
                    elTotal = suma(elTotal, precioMagdalenasMouse );
                    listaProductos = agregarProductos(listaProductos, '-Magdalenas mouse:360$ c/u');
                    console.log(elTotal);
                    alert(listaProductos)
                case "7":
                    elTotal = suma(elTotal, precioTortaTeGree);
                    listaProductos = agregarProductos(listaProductos, '-Torta te gree:6900$');
                    console.log(elTotal);
                    alert(listaProductos)

                case "8":    
                    elTotal = suma(elTotal, precioMagdalenasFlorales);
                    listaProductos = agregarProductos(listaProductos, '-Magdalenas florales:300$ c/u');
                    console.log(elTotal);
                    alert(listaProductos)

                case "9":
                    irAlProducto();
                    break;

                case "10":
                    finalizarCompra(elTotal, listaProductos);
                    compra = false;
                    break;
                default:
                    alert("La opcion ingresada es incorrecta.");
            }
        }

    }

inicio()
