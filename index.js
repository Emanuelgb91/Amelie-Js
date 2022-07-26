const clickButton = document.querySelectorAll('.btnAgregar');
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn =>{
    btn.addEventListener('click', agregarAlCarrito)
});

function agregarAlCarrito(e){
    const button = e.target
    const item = button.closest(".tarjeta")
    const itemTitulo = item.querySelector('.tarjeta__titulo').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.tarjeta__imagen').src;
    
    const nuevoProducto = {
        titulo: itemTitulo,
        precio: itemPrecio,
        imagen: itemImg,
        cantidad: 1
    }
    agregarItemAlCarrito(nuevoProducto)
}

function agregarItemAlCarrito(nuevoProducto) {
    const inputElemento = tbody.getElementsByClassName('input__elemento')
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].titulo.trim() === nuevoProducto.titulo.trim()) {
            carrito[i].cantidad ++;
            const inputValor = inputElemento[i]
            inputValor.value++
            totalCarrito()
            return null;
        }
        
    }
    carrito.push(nuevoProducto);
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map (item =>{
    const tr = document.createElement('tr')
    tr.classList.add('itemCarrito')
    const contenido = `
    <th scope="row">1</th>
    <td class="tabla__producto">
    <img src=${item.img} alt="">
    <h6 class="titulo__imagen">${item.titulo}</h6></td>
    <td class="tabla__precio"><p>$ ${item.precio}</p></td>
    <td class="tabla__cantidad"><input type="number" min="1" value=${item.cantidad} class="input__elemento">
    <button class="delete btn btn-danger">X</button></td>
    `

        tr.innerHTML = contenido
        tbody.append(tr)
        // tr.querySelector('.delete').addEventListener('click', removerItemCarrito())
    })
    
}

function totalCarrito(){
    let total = 0
    const totalItemCarrito = document.querySelector('.totalCarrito');
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio * item.cantidad
    })

    totalItemCarrito.innerHTML = `total ${total}`
}

// function removerItemCarrito(e){
//     const botonEliminar = e.target
//     const tr = botonEliminar.closest('.itemCarrito')
//     const titulo = tr.querySelector('.__titulo').textContent;
//     for (let i=0 ; i < carrito.length ; i++){
//         if (carrito[i].titulo.trim() === titulo.trim()) {
//             carrito.splice(i, 1)
//         }
//     }
//     tr.remove()
//     totalCarrito()
// }