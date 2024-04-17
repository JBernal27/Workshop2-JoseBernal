window.addEventListener("load" , verificarPresupuesto)

const destino = prompt("Escriba su destino")
let duracion = prompt("Escriba la duracion de su viaje")
let presupuesto = prompt("Escriba su presupuesto de viaje")

function verificarPresupuesto(){

    if((duracion*350)>presupuesto) //350 es el costo diario aproximado del viaje
    {
    let opt = prompt(`Tu presupuesto (${presupuesto}$) no es suficiente para los dias (${duracion}) de viaje\n¿Que deseas hacer?\n\t1. Cambiar presupuesto\n\t2. Cambiar duracion\n\t3. Ignorar advertencia`)
        if(opt == 1){
            cambiarPresupuesto()
        }
        else if(opt == 2){
            cambiarDuracion()
        }
        else if(opt == 3){
            añadirSuvenirs()
        }
        else
        {
            alert("No ingresaste ninguna opcion valida, se ignorara la advertencia")
            añadirSuvenirs()
        }
    }
    else
    {
        añadirSuvenirs()
    }

}

function cambiarPresupuesto(){
    presupuesto = prompt("Escriba su presupuesto de viaje")
    verificarPresupuesto()
}

function cambiarDuracion(){
    duracion = prompt("Escriba la duracion de su viaje")
    verificarPresupuesto()
}

//RETO2

function añadirSuvenirs(){
    let souvenirsList = souvenirs.split(",")
    let souvenirs = prompt("Ingrese los nombres de todos sus souvenirs separados por ,")

    let souvenirsCost = prompt("Ingrese el costo de los souvenir separados por una ,")
    let souvenirsCostList = souvenirsCost.split(",")
    souvenirsCostList = souvenirsCostList.map(function(item){return parseInt(item)})

    let souvenirsAvaliable = prompt("Ingrese '1' si esta disponible o '2' si no esta disponible")
    let souvenirsAvaliableList = souvenirsAvaliable.split(",")

    // No funciona correctamente
    // console.group('Table');
    // console.table(souvenirsList)
    // console.table(souvenirsCostList)
    // console.table(souvenirsAvaliableList)
    // console.groupEnd();    

    alert(souvenirsList + "\n" + souvenirsCostList + "\n" + souvenirsAvaliableList)
}