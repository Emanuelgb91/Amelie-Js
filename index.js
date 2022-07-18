class datosPersonales {
    constructor(nombre, apellido,domicilio,edad,telefono,consultaPrecio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.edad = edad;
        this.telefono = telefono;
        this.consultaPrecio = consultaPrecio;
    }
}

const almacenarDatosPedido = [];

let respuesta = confirm("¿Bienvenido,desea realizar una consulta?");
if(respuesta){
    solicitarDatos();
}
let respuesta2 = confirm("¿Bienvenido,desea realizar una consulta?");
if(respuesta2){
    solicitarDatos();
}
let respuesta3 = confirm("¿Bienvenido,desea realizar una consulta?");
if(respuesta3){
    solicitarDatos()
}

//Funcion Inicial
function solicitarDatos () {
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let domicilio = prompt("ingrese su domicilio para la entrega");
let telefono = parseInt(prompt("ingrese su numero de telefono"));
let edad = parseInt(prompt("ingrese su edad"));
    if(edad >= 18){
        alert (`Bienvenido ${nombre} ${apellido}`);
        let consultaPrecio = prompt("escriba el nombre del producto que desea consultar\n"+
        "1- Serum\n"+
        "2- Acido\n"+
        "3- Exfoliante\n"+
        "4- Humectante")
        
        while(consultaPrecio !== "ESC" && consultaPrecio !== "esc") {
            
            switch(consultaPrecio.toUpperCase()){
                case "SERUM":
                    alert("el precio del serum es de $1.500");
                    const serum = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoSerum(serum));
                    break;
                
                case "ACIDO":
                    alert("el precio del acido es de $4.500");
                    const acido = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoAcido(acido));
                    break;
                
                case "EXFOLIANTE":
                    alert("el precio del exfoliante es de $2.000");
                    const exfoliante = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoExfoliante(exfoliante));
                    break;
                
                case "HUMECTANTE":
                    alert("el precio del humectante es de $6.000");
                    const humectante = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoHumectante(humectante));
                    break
                
                default:
                    alert("no disponemos de dicho producto");
                    break;
            }
            const informacionPedido = new datosPersonales (nombre,apellido,domicilio,edad,telefono,consultaPrecio)
            almacenarDatosPedido.push(informacionPedido)
            
            consultaPrecio = prompt("ingrese otra consulta\n"+
            "1- Serum\n"+
            "2- Acido\n"+
            "3- Exfoliante\n"+
            "4- Humectante\n"+
            "escriba ESC para terminar su consulta");
        }
    }   else{
            alert ("lo siento eres menor de edad, no puedes realizar la compra")
    }
}


//Aplicacion de ordenamiento de arrays de menor a mayor
almacenarDatosPedido.sort((a,b) => {
    if (a.nombre < b.nombre){
        return -1;
    }
    if(a.nombre > b.nombre){
        return 1;
    }
    return 0;
    });

    

//Funciones de calculo de cantidad
function calculoSerum (serum) {
    return serum * 1500;
}

function calculoAcido (acido) {
    return acido * 4500;
}

function calculoExfoliante (exfoliante) {
    return exfoliante * 2000;
}

function calculoHumectante (humectante) {
    return humectante * 6000;
}


//Funcion Generica de respuesta al calculo de cantidad
function valorFinal (cantidadProducto){
    alert (`El valor total a abonar es de $${cantidadProducto} `);
}

