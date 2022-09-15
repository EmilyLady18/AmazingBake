const productos = [];
const carrito = [];
function stock() {
    let url = "../js/json.json"
    fetch(url)
        .then(response => response.json().then(data => {
            productos.push(...data);
            menu();
        }))
}
window.onload = () => {
    stock()
    let aux = solicitar();
    if(aux !=null ){
        carrito.push(...aux)
        addItemsAlCarrito()
    }
}

//Permite que se muestren los productos en la pagina
const contenedorProductos = document.getElementById('contenedorProductos')
function menu() {
    for (const producto of productos) {
        let contenedor = document.createElement('div');
        contenedor.className = 'contenedores'
        contenedor.innerHTML = `<img class="producImg" src="${producto.imagen}" alt="${producto.categoria}">
                                <figcaption class="subTor">${producto.nombre}</figcaption>
                                <p class="precTor"> ${producto.precio}$</p>
                                <button class="button" id=${producto.id}>Agregar</button>`
        contenedorProductos.append(contenedor)
    } addItems()
}


//funcion para que los elementos de agregen al carrito
function addItems() {
    const button = document.querySelectorAll('.button')
    button.forEach((btn) => {
        btn.onclick = () => {
            let productoFind = productos.find((producto) => producto.id == btn.id)
            let verifyCarrito = carrito.find((producto) => producto.id == productoFind.id)
            if (verifyCarrito == undefined) {
                carrito.push(productoFind);
                addItemsAlCarrito()
                guardarStorage()
                Toastify({
                    text: "Has agregado un producto",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }
        }
    })
}

//funcion para que los productos selecionados se muestren en el carrito
function addItemsAlCarrito() {
    const compra = document.querySelector('.offcanvas');
    compra.innerHTML = ``;
    for (const product of carrito) {
        const cardProductos = document.createElement('div');
        const compraCarrito = `<img class="producImg" src="${product.imagen}">
                            <figcaption class="subTor">${product.nombre}</figcaption>
                            <p class="precTor"> ${product.precio}</p>
                            <button class="btnDel" >Eliminar</button>`;
        cardProductos.innerHTML = compraCarrito
        compra.append(cardProductos)
    }
    eliminarProduct()
}

//funcion para eliminar productos del carrito uno por uno
function eliminarProduct() {
    const eliminar = document.querySelectorAll('.btnDel');
    eliminar.forEach((btnDel, index) => {
        btnDel.addEventListener("click", () => {
            carrito.splice(index, 1)
            addItemsAlCarrito()
            guardarStorage()
            Toastify({
                text: "Has eliminado un producto",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        })
    })
}

//funcion para que los productos selecccionados se guarden aun cuando el usuario recarge la pagina
function guardarStorage() {
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

//funcion para solicitar los datos posteriormente seleccionados por el usuario al haber recargado la pagina
function solicitar() {
    return JSON.parse(sessionStorage.getItem("carrito"))
}
 
//funcion para limpiar todo el carrito
function cleantCarrito() {
    carrito.splice(0);
    addItemsAlCarrito();
    let canasta = document.getElementById("carrito");
    canasta.innerHTML = carrito.length == 0 && `<div class="d-block msgSinP"><h3>No hay productos</h3></div>`
}


//boton para finalizar el pedido
const btnFinal = document.getElementById("btnFinalizar");
btnFinal.onclick = () => {
    if (usuarioNow != undefined && usuarioNow != "") {
        condition = carrito.length != 0 && true;
        if (condition) {
            showMetPago()
        }
    } else {
        Swal.fire("Registrar", "Para hacer un pedido tiene que logearse o registrarse", "warning")
    }


}

//boton para borrar el pedido
const eliminar = document.getElementById("borrar");
eliminar.onclick = () => {
    condicion = carrito.length != 0 && true;
    //Swal para la confirmacion de vaciado de Carrito
    if (condicion) {
        Swal.fire({
            title: 'Vaciar Carrito',
            text: '¿Desea vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            customClass: {
                confirmButton: 'btnRed',
            },
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Borrado', 'El carrito ha sido vaciado', 'success')
                cleanCarrito();
                guardarStorage();
            }
        })
    }
}