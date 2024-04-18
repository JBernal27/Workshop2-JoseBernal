//PRESUPUESTO

const ahorro = parseInt(prompt("Cuanto te gustaria ahorrar diariamente"))
const presupuestoDiario = parseInt(prompt("Ingresa tu presupuesto diario aproximado"))

let costosComida = 0
let costoOtros = 0
let costoTotal = () => costosComida + costoOtros

let calcular = function(){
    costosComida = parseInt(prompt("Cuando gastaste hoy comiedo por fuera?"))
    costoOtros = parseInt(prompt("Ingresa otros gastos, como la compra de libros, videojuegos, etc"))

    if(costoTotal() + ahorro <= presupuestoDiario){
        alert(`Tu presupuesto diario es suficiente para estos gastos, cumpliendo tambien con la tarifa de ahorro`)
        console.log(`Costo total: ${costoTotal()}\n Ahorrado: ${ahorro}`)
    }
    else{
        alert(`Tu presupuesto diario no puede cubrir todos tus gastos`)
        if(costoOtros < (presupuestoDiario - ahorro) && costosComida < (presupuestoDiario - ahorro) && costoTotal() < presupuestoDiario)
        {
            alert(`Puedes eliminar alguno de los dos gastos para conservar tu ahorro o ahorrar unicamente ${presupuestoDiario - costoTotal()} en vez de ${ahorro}`)
            console.log(`Costo total: ${costoTotal()}\nAhorrado: ${presupuestoDiario - costoTotal()}`)
        }
        else if(costoOtros < (presupuestoDiario - ahorro) && costosComida < (presupuestoDiario - ahorro) && costoTotal() > presupuestoDiario){
            alert(`Para conservar el ahorro tendrias que eliminar alguno de los gastos o gastar ${costoTotal()} igualando o sobrepasando tu presupuesto de ${presupuestoDiario}`)
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}`)
        }
        else if(costoOtros < (presupuestoDiario-ahorro) && costosComida > (presupuestoDiario) && costoTotal() > presupuestoDiario){
            alert("Para no salirte de tu presupuesto solo puedes  gastar en los costos extras y mantendrias tu tarifa de ahorro")
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}\nCostos Extras: ${costoOtros}\nAhorrado: ${ahorro}`)
        }
        else if(costoOtros > (presupuestoDiario-ahorro) && costosComida < (presupuestoDiario) && costoTotal() > presupuestoDiario){
            alert("Para no salirte de tu presupuesto solo puedes  gastar en comida y mantendrias tu tarifa de ahorro")
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}\nCosto Comida: ${costosComida}\nAhorrado: ${ahorro}`)
        }
        else if(costoOtros < (presupuestoDiario) && costosComida > (presupuestoDiario) && costoTotal() > presupuestoDiario){
            alert("Para no salirte de tu presupuesto solo puedes  gastar en los costos extras y NO mantendrias tu tarifa de ahorro")
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}\nCosto Comida: ${costoOtros}`)
        }
        else if(costoOtros > (presupuestoDiario) && costosComida < (presupuestoDiario) && costoTotal() > presupuestoDiario){
            alert("Para no salirte de tu presupuesto solo puedes  gastar en comida y NO mantendrias tu tarifa de ahorro")
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}\nCosto Comida: ${costosComida}`)
        }
        else{
            alert("No hay manera de no salirse el presupuesto")
            console.log(`Costo total: ${costoTotal()}\n Presupuesto: ${presupuestoDiario}\nCosto Comida: ${costosComida}\nCostos Extras: ${costoOtros}`)
        }
    }
}

let sig

do {
    calcular();
    sig  = confirm("¿Deseas calcular otro dia?")
} while (sig);