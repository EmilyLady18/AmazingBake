const Productos =[{
    id:1 ,
    nombre:"Torta de corazon",
    precio:3600 ,
    categoria: "Tortas" ,
    imagen:'../img/img.tortas/tortadecorazon.webp',
    descripcion:'Torta en con forma de corazon, decorada con ganache y perlas de color rosado con una frase en el centro',
},{
    id:2 ,
    nombre:"Magdalenas tutifruti",
    precio: 250,
    categoria: "Magdalena",
    imagen:"../img/img.magdalenas/magdalenasFrutosdelBosque.webp",
    descripcion:"Magdalenas elaboradas y decorada con frutos del bosque",
},{
    id: 3 ,
    nombre: "Torta pinky",
    precio: 2000 ,
    categoria: "Tortas" ,
    imagen:'../img/img.tortas/tortapink.webp'  ,
    descripcion:'Torta redonda de color rosado con relleno de frutilla y decorada con una frase ene el centro',
},{
    id: 4,
    nombre:"Magdalenas  blueberry" ,
    precio: 300,
    categoria: "Magdalena" ,
    imagen:"../img/img.magdalenas/magdalenasBlueBerry.webp",
    descripcion: "Magdalenas elaborada y decorada con blueberry y chocolate",
},{
    id: 5 , 
    nombre: "Torta sweet dream",
    precio: 6950,
    categoria: "Torta",
    imagen:"../img/img.tortas/tortasweetdream.webp",
    descripcion:"Torta redonda de color rosa decoraciones con color amarrilo. violeta, celeste y verde, ademas de tener mariposas rosadas con detalles en amarillo y un osito mequeño de color azul",
},{
    id: 6,
    nombre:"Magdalena mouse",  
    precio: 360,
    categoria:"Magdalena",
    imagen: "../img/img.magdalenas/mousemag.webp",
    descripcion: "Magdalenas decoradas como un raton de color rosa, blanco o gris",
},{
    id: 7,
    nombre: "Torta te gree" ,
    precio:  6900 ,
    categoria: "Torta",
    imagen:"../img/img.tortas/tegreeHeart.webp",
    descripcion:"Torta redonda de color verde con decoraciones de color amarillo,verdes y con cerezas",
},{
    id:8 ,
    nombre: "Magdalena florales", 
    precio: 300 ,
    categoria: "Magdalena" , 
    imagen: "../img/img.magdalenas/magFloral.webp",
    descripcion: "Magdalenas decoradas con diversos tipos de flores",
}]

 const contenedorProductos= document.getElementById('contenedorProductos')

for (const producto of Productos) {
    let contenedor = document.createElement('div');
    contenedor.className='contenedores'
    contenedor.id= `${producto.id}` 

    contenedor.innerHTML = `<img class="producImg" src="${producto.imagen}" alt="${producto.categoria}">
                            <figcaption class="subTor">${producto.nombre}</figcaption>
				            <p class="precTor"> ${producto.precio} $</p>
                            <button id="button">Agregar</button>` 
                                                   
    contenedorProductos.append(contenedor)
} 
const button = document.querySelectorAll('#button');
    button.forEach(productosCarrito => {
        productosCarrito.addEventListener('click', carritoClick)
    })  
    const compra = document.querySelector('.offcanvas');

    function carritoClick(event){
        const boton = event.target;
        const items = boton.closest('#contenedorProductos');
        const nombreProduc =items.querySelector('.subTor').textContent;
        const precioProduc =items.querySelector('.precTor').textContent;
        const imagenProduc =items.querySelector('.producImg').src;

        addItemsAlCarrito(nombreProduc,precioProduc,imagenProduc);
    }

    function addItemsAlCarrito(nombreProduc,precioProduc,imagenProduc){
    const carrito = document.createElement('div');
    const compraCarrito = `<img class="producImg" src="${imagenProduc}">
                            <figcaption class="subTor">${nombreProduc}</figcaption>
                            <p class="precTor"> ${precioProduc} $</p`
    carrito.innerHTML= compraCarrito
    compra.append(carrito)
    

}
             
    