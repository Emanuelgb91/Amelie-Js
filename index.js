solicitarDatos()

//Funcion Inicial
function solicitarDatos () {
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrese su edad"));
    if(edad >= 18){
        alert (`Bienvenido ${nombre} ${apellido}`);
        alert ("productos disponibles\n"+
        "1- Serum\n"+
        "2- Acido\n"+
        "3- Exfoliante\n"+
        "4- Humectante\n"+
        "escriba ESC para terminar su consulta");
        let consultaPrecio = prompt("escriba el numero del producto que desea consultar");
        while(consultaPrecio !== "ESC" && consultaPrecio !== "esc") {
            switch(consultaPrecio.toUpperCase()){
                case "1":
                    alert("el precio del serum es de $1.500");
                    const serum = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoSerum(serum));
                    break;
                
                case "2":
                    alert("el precio del acido es de $4.500");
                    const acido = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoAcido(acido));
                    break;
                
                case "3":
                    alert("el precio del exfoliante es de $2.000");
                    const exfoliante = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoExfoliante(exfoliante));
                    break;
                
                case "4":
                    alert("el precio del humectante es de $6.000");
                    const humectante = prompt("¿cuantas unidades desea adquirir?")
                    valorFinal(calculoHumectante(humectante));
                    break
                
                default:
                    alert("no disponemos de dicho producto");
                    break;
            }
            consultaPrecio = prompt("ingrese otra consulta\n"+
            "1- Serum\n"+
            "2- Acido\n"+
            "3- Exfoliante\n"+
            "4- Humectante\n"+
            "escriba ESC para terminar su consulta");
        }

    }else{
        alert ("lo siento eres menor de edad")
    }
}

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

