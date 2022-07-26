
 function inicio() {
let compra = true;
    while (compra) {
        let opcion = prompt("Ingrese la opcion a realizar \n1-Ir al producto \n2 -Agregar al carrito \n3-Cancelar y salir");
        switch (opcion) {
            case "1":
                IrAlProducto ;
                break;
            case "2":
                AgregaralCarrito;
                compra = false;
            case "3":
                CancelarySalir;
                compra = false;
                break;

            default:
                alert('La opcion que ingresaste es incorrecto');
        }
    }
 }
    const suma = (n1, n2) => n1 + n2;
    const IrAlProducto = function () { alert('Productos:\n1 - Torta corazon: 3600$ \n2 Magdalenas frutos rojos:250$ c/u \n3- Torta pinky:2000$ \n4 -Magdalenas blueberry:300$ c/u  \n5- Torta sweet dream:6950$  \n6 -Magdalenas mouse:360$ c/u \n7- Torta te gree:6900$  -  \n8 - Magdalenas florales:300$ c/u'); } 
    const agregarProductos = (lista, productos) => lista + "\n" + productos;
    const finalizarCompra = function (total, lista) { alert("El total es de:" + lista + "\nEl total es de: " + total+"$") }

    function realizarCompra() {
        let ElTotal = 0 ;
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
                    ElTotal = suma(ElTotal, precioTortaCorazon);
                    listaProductos = agregarProducto(listaProductos, 'Torta corazon: 3600$');
                    console.log(ElTotall);
                    alert(Productos)
                    break;
                case "2":
                    ElTotal = suma(ElTotal, precionMagdalenasFrutosRojos);
                    listaProductos = productos(listaProductos, 'Magdalenas frutos rojos:250$ c/u');
                    console.log(ElTotal);
                    alert(Productos)
                    break;
                case "3":
                    ElTotal = suma(ElTotal, precioTortaPinky);
                    listaProductos = Productos(listaProductos, 'Torta pinky:2000$');
                    console.log(ElTotal);
                    alert(Productos)
                    break;

                case "4":
                    ElTotal = suma(ElTotal,  precioMagdalenasBlueberry);
                    listaProductos = Productos(listaProductos, 'Magdalenas blueberry:300$ c/u');
                    console.log(ElTotal);
                    alert(Productos)
                    break;

                case "5":
                    ElTotal = suma(ElTotal, precioTortaSweetDream);
                    listaProductos = Productos(listaProductos, 'Torta sweet dream:6950$');
                    console.log(ElTotal);
                    alert(Productos)

                case "6":
                    ElTotal = suma(ElTotal, precioMagdalenasMouse );
                    listaProductos = Productos(listaProductos, 'Magdalenas mouse:360$ c/u');
                    console.log(ElTotal);
                    alert(Productos)
                case "7":
                    ElTotal = suma(ElTotal, precioTortaTeGree);
                    listaProductos = Productos(listaProductos, 'Torta te gree:6900$');
                    console.log(ElTotal);
                    alert(Productos)

                case "8":    
                    ElTotal = suma(ElTotal, precioMagdalenasFlorales);
                    listaProductos = Productos(listaProductos, 'Magdalenas florales:300$ c/u');
                    console.log(ElTotal);
                    alert(Productos)

                case "9":
                    mostrarProductos();
                    break;

                case "10":
                    finalizarCompra(ElTotal, listaProductos);
                    compra = false;
                    break;
                default:
                    alert("La opcion ingresada es incorrecta.");
            }
        }

    }
