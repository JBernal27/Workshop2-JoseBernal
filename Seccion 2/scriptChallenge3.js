
const asignarNumero = (msj, num = 0) => {
    while(true){
        num = Number(prompt(msj))
        if(typeof num === "number" && !Number.isNaN(num)){
            return num
        }else{
            alert("Por favor ingrese un valor numerico")
        }
    }
}

const pesoMaximo = asignarNumero("Cual es el peso maximo permitido para el viaje (Kg)?")
const pronosticoClima = confirm("El clima pronosticado es soleado?")
const espaciosMaximos = asignarNumero("Cuantos espacios tiene tu maleta?")

const articulosPrioritarios = []
const articulosIrrelevantes = []
const articulosDescartables = []

const articulosEmpacados = []
const articulosDescartados = []

let pesoActual = 0
let espacioActual = 0

do{

    let nombre = prompt("Ingrese el nombre del articulo")
    let peso = asignarNumero("Ingrese el peso del articulo (Kg)")
    let clima = confirm("Es para clima caliente?")
    let espaciosOcupados = asignarNumero("Cuantos espacios ocupa este articulo?")
    let tienePrioridad = confirm("Este articulo es prioritario?")

    const articulo = {
        nombre,
        peso,
        clima,
        espaciosOcupados,
        tienePrioridad
    }

    if(tienePrioridad)
    {
        if(clima === pronosticoClima)
        {             
            articulosPrioritarios.push(articulo)
        }else{
            alert("Este articulo no es apto para este clima")
            articulosDescartables.push(articulo)
        }
    }
    else{
        if(clima === pronosticoClima)
        {                      
            articulosIrrelevantes.push(articulo)
        }
        else
        {
            alert("Este articulo no es apto para este clima")
            articulosDescartables.push(articulo)
        }
    }

}while(confirm("Deseas Añadir otro elemento?"))

articulosPrioritarios.forEach(element => {
    if((espacioActual+element.espaciosOcupados) <= espaciosMaximos)
    {
        if((pesoActual+element.peso) <= pesoMaximo){
            articulosEmpacados.push(element)
            pesoActual += element.peso
            espacioActual += element.espaciosOcupados
        }
        else{
            alert("Se supero el limite de peso, quedaron algunos articulos sin empacar")
            articulosDescartados.push(element)
        }
    }
    else{
        alert("Se han usado todos los espacios dispoibles, quedaron algunos articulos sin empacar")
        articulosDescartados.push(element)
    }
});

articulosIrrelevantes.forEach(element => {
    if((espacioActual+element.espaciosOcupados) <= espaciosMaximos)
    {
        if((pesoActual+element.peso) <= pesoMaximo){
            articulosEmpacados.push(element)
            pesoActual += element.peso
            espacioActual += element.espaciosOcupados
        }
        else{
            alert("Se supero el limite de peso, quedaron algunos articulos sin empacar")
            articulosDescartados.push(element)
        }
    }
    else{
        alert("Se han usado todos los espacios dispoibles, quedaron algunos articulos sin empacar")
        articulosDescartados.push(element)
    }
});

articulosDescartables.forEach(element => {
    if((espacioActual+element.espaciosOcupados) <= espaciosMaximos)
    {
        if((pesoActual+element.peso) <= pesoMaximo){
            articulosEmpacados.push(element)
            pesoActual += element.peso
            espacioActual += element.espaciosOcupados
        }
        else{
            alert("Se supero el limite de peso, quedaron algunos articulos sin empacar")
            articulosDescartados.push(element)
        }
    }
    else{
        alert("Se han usado todos los espacios dispoibles, quedaron algunos articulos sin empacar")
        articulosDescartados.push(element)
    }
});

if(confirm("Deseas ver como quedo tu maleta?"))
{
    let mensaje = "EMPACADOS\n"
    articulosEmpacados.forEach(element => {
        mensaje += " - Articulo: " + Object.values(element)[0] + "\n"
    });
    alert(mensaje)

    mensaje = "DESCARTADOS:\n"
    articulosDescartados.forEach(element => {
        mensaje += " - Articulo: " + Object.values(element)[0] + "\n"
    });
    alert(mensaje)
}

console.log("Irrelevantes: " + articulosIrrelevantes)
console.log("Descartables: " + articulosDescartables)
console.log("Prioritarios: " + articulosPrioritarios)

/*console.log("---------------------//---------------------")
console.log("Empacados: " + articulosEmpacados)
console.log("Descartados: " + articulosDescartados) */



/* let mensaje = ""
articulosPrioritarios.forEach(element => {
    mensaje += " - Articulo: " + Object.values(element)[0] + "\n"
});
alert(mensaje) */

// const objetos = []

// const persona = {
//     nombre,
//     edad
// }

// const newPerson = { //desestrucurar un objeto, el objeto NUNCA se debe modificar
//     ...persona,
//     direccion : 'Calle 1'
// }
