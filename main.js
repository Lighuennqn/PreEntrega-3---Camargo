//Variables
let numero1 = ""; 
let numero2 = "";
let operacion = "";
let resultado = 0;
let fase = false;
let pantalla = document.querySelector(".pantalla");
let ultima = localStorage.getItem("ultimaOp"); 
render(JSON.parse(ultima))



// el dommm
let entrada = document.querySelectorAll(".numero");
let entradaOperacion = document.querySelectorAll(".operacion")
let igual = document.getElementById("igual")
let reset = document.getElementById("reset")
///////////////////////////////// botones/////////////////////////////
// entrada del numeral

entrada.forEach((botonApretado) => {
    botonApretado.addEventListener("click", () => {
        if (!fase){
            numero1 += botonApretado.innerHTML
            console.log(numero1)
            console.log(parseInt(numero1))
            render(numero1 + operacion)
        } else {
            numero2 += botonApretado.innerHTML
            console.log(numero2)
            console.log(parseInt(numero2))
            render(numero1 + operacion + numero2)
        }
        
    });
});

// Evento de los botones operacionales 
entradaOperacion.forEach((botonOperacionApretado) => {
    botonOperacionApretado.addEventListener("click", () => {
        console.log("boton de operacion")
        if(numero1.length == 0){
            console.log("inserte un valor (boton operacion)")
        }
        else {
        console.log("seteando operacion")
        console.log(botonOperacionApretado.innerHTML);
        fase = true 
        operacion = botonOperacionApretado.innerHTML 
        render (numero1 + operacion + numero2)
        }
    })
})
//boton igual
igual.addEventListener("click", calculadora)

reset.addEventListener("click", ()=>{
    numero1 = ""; 
    numero2 = "";
    operacion = "";
    resultado = 0;
    fase = false;
    render("")
})

///////////////////////////////////////////////////////////////////////////////////////////////////////
// funcion que hace la operacion
function accion (num1, num2) {
    switch (operacion) {
        case "-":
            resultado = num1 - num2
           
            break;
        case "+":
            resultado = num1 + num2
            
            break;
         case "*":
            resultado = num1 * num2
            
            break;
        case "/":
            resultado = num1 / num2
            
            break;
        case "%":
            resultado = num1 % num2
            
            break;
    }

    render(`${resultado}`)
    console.log(`${num1}${operacion}${num2}=${resultado}`)
    console.log(ultima);
    localStorage.setItem("ultimaOp", JSON.stringify(`${num1}  ${operacion} ${num2} = ${resultado}`))
}

// funcion que verifica si estan los 2 valores y da accionar a la operacion
function calculadora(){
    if(numero1.length == 0 || numero2.length == 0){
        
        
        
        if (numero1 == ""){
            console.log("inserte un valor")
        }
        else if (operacion == "") {
            console.log("Seleccione una operacion");
        }
        else {
            console.log("inserte el segundo valor")
        }



    }

    else if (numero1.length !== 0 || numero2.length !== 0){
     accion(Number(numero1),Number(numero2))  
     console.log("entre al else if" + resultado) 
     numero2 = ""
     numero1 = resultado
    }

}
function render(text) {
    pantalla.innerHTML = `<p>${text}</p>`
}





