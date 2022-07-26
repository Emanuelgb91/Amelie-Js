const clickButton = document.querySelectorAll('.btnAgregar');
let carrito = []

clickButton.forEach(btn =>{
    btn.addEventListener('click', agregarAlCarrito)
});

function agregarAlCarrito(e){
    const button = e.target
    const item = button.closest(".tarjeta")
    const itemTitulo = item.querySelector('.tarjeta__titulo').textContent
    const itemPrecio = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.tarjeta__imagen').src
    
    const nuevoProducto = {
        titulo: itemTitulo,
        precio: itemPrecio,
        imagen: itemImg,
        cantidad: 1
    }
    agregarItemAlCarrito(nuevoProducto)
}

function agregarItemAlCarrito(nuevoProducto) {
    
    carrito.push(nuevoProducto);

}


