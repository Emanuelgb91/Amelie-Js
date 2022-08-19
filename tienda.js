// Agregado de productos de manera dinamica a la tienda
const tablaProductos = document.querySelector('#fetchProductos')

function datosProductos(){
    fetch('tiendaProductos.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            productos.forEach(producto =>{
                const div = document.createElement('div');
                    div.innerHTML +=  `
                        <div class="tarjeta card h-100">
                        <img src=${producto.imagen} class="tarjeta__imagen card-img-top" alt="producto">
                        <div class="card-body">
                        <h5 class="tarjeta__titulo card-title1" data-id="${producto.id}">${producto.nombre}</h5>
                            <p>
                            <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Beneficios</a>
                                </p>
                            <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        ${producto.descripcion}
                                        <p><span>Precio $</span><span class="precio">${producto.precio}</span></p>
                                        <div>
                                        <small class="text-muted"><button type="button" class="agregar btn btn-secondary ">Agregar</button></small>
                                        </div>                  
                                            </div>
                                        </div>              
                                    </div>
                                </div>
                                        `
            tablaProductos.appendChild(div);
            })

        });
}

datosProductos()

// Funciones del Carrito de Compras
const buttons = document.querySelectorAll('.agregar');
const tbody = document.querySelector('.tbody')
let carrito = []
buttons.forEach(
    function (button){
        button.addEventListener('click', function(e){agregarAlCarrito(e)
            Toastify({
                text: "Producto Agregado",
                duration: 2000,
                newWindow: true,
                gravity: "top",
                position: "center", 
                stopOnFocus: true,
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
        }).showToast();})
    }
)

function agregarAlCarrito(e){
    const button = e.target
    const item = button.closest(".tarjeta");
    const itemTitulo = item.querySelector('.tarjeta__titulo');
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemId = itemTitulo.dataset.id;

    let indiceItem = carrito.findIndex((item) => (item.id === itemId));
    if (indiceItem === -1 ) {
        const nuevoProducto = {
            titulo: itemTitulo.textContent,
            precio: itemPrecio,
            id: itemId,
            cantidad: 1
        }
        carrito.push(nuevoProducto); 
    }else{
        let nuevaCantidad = carrito[indiceItem].cantidad +1
        carrito[indiceItem].cantidad = nuevaCantidad

    }
    agregarAlLocalStorage()
    renderCarrito();
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map (item =>{
        const tr = document.createElement('tr')
        const contenido = `
            <td class="tabla__producto">
            <h6 class="titulo__imagen">${item.titulo}</h6></td>
            <td class="tabla__precio"><p>$ ${item.precio}</p></td>
            <td class="tabla__cantidad"><input type="number" min="1" value=${item.cantidad} class="input__elemento">
            <button class="delete btn btn-danger">X</button></td>
        `

        tr.innerHTML = contenido
        tbody.appendChild(tr)
        tr.querySelector('.delete').addEventListener('click', () => removerItemCarrito(item.id));
        tr.querySelector('.input__elemento').addEventListener('change', (event) => sumarLaCantidad(item.id, event) )
    })
    totalCarrito()
}

function totalCarrito(){
    let total = 0
    const totalItemCarrito = document.querySelector('.totalCarrito');
    carrito.forEach((item) => {
        const precioProducto = Number(item.precio);
        total = total + precioProducto * item.cantidad
    })

    totalItemCarrito.innerHTML = `total $${total}`
    
}

function removerItemCarrito(id){
    Toastify({
        text: "Producto Eliminado",
        duration: 2000,
        newWindow: true,
        gravity: "top",
        position: "center", 
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #ff0000, #c9673d)",
            },
        }).showToast();
    let nuevoCarrito = []
    nuevoCarrito = carrito.filter((item) => (item.id !== id ))
    carrito = nuevoCarrito
    agregarAlLocalStorage()
    renderCarrito()
    
}

function sumarLaCantidad(id, event){
    const nuevoCarrito = carrito
    let nuevaCantidad = Number(event.target.value);
    let indiceItem = carrito.findIndex((item) => (item.id === id))
    nuevoCarrito[indiceItem].cantidad = nuevaCantidad
    carrito = nuevoCarrito
    agregarAlLocalStorage()
    renderCarrito()
    
}

function agregarAlLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function() {
    const guardado = JSON.parse(localStorage.getItem('carrito'));
    if(guardado){
        carrito = guardado;
        renderCarrito();
    }
}


