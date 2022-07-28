const buttons = document.querySelectorAll('.agregar');
const tbody = document.querySelector('.tbody')
let carrito = []
buttons.forEach(
    function (button){
        button.addEventListener('click', function(e){agregarAlCarrito(e)})
    }
)

function agregarAlCarrito(e){
    const button = e.target
    const item = button.closest(".tarjeta")
    const itemTitulo = item.querySelector('.tarjeta__titulo').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
        
    const nuevoProducto = {
        titulo: itemTitulo,
        precio: itemPrecio,
        id: `${Math.random()*1000}`,
        cantidad: 1
    }
    carrito.push(nuevoProducto);
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
    let nuevoCarrito = []
    nuevoCarrito = carrito.filter((item) => (item.id !== id ))
    carrito = nuevoCarrito
    renderCarrito()
    
}

function sumarLaCantidad(id, event){
    const nuevoCarrito = carrito
    let nuevaCantidad = Number(event.target.value);
    let indiceItem = carrito.findIndex((item) => (item.id === id))
    nuevoCarrito[indiceItem].cantidad = nuevaCantidad
    carrito = nuevoCarrito
    renderCarrito()
    
}