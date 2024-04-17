alert("Hola Julian");
let cont = 0

let evaluarDia = function(){
    let nivelDeEnergia = prompt("Si tu nivel de energia es bajo no escribas nada, de lo contrario escribe como de bien te sientes")
    let clima = prompt("Si el clima es malo no escribas nada, de lo contrario indica que tan bueno es")
    let cargaTrabajo = prompt("Si la carga de trabajo es baja no escribas nada, de lo contrario escribe que tienes por hacer")


    if( Boolean(nivelDeEnergia) && Boolean(clima) && !Boolean(cargaTrabajo))
    {
        alert("Hoy es el dia perfecto aprovechalo como quieras, podrias salir a correr un rato")
        console.log(`Dia#${cont}: Hoy es el dia perfecto aprovechalo como quieras, podrias salir a correr un rato`)
    }
    else if(!Boolean(nivelDeEnergia) && !Boolean(cargaTrabajo))
    {
        alert("No tienes mucho por hacer, que tal si te tomas el dia libre")
        console.log(`Dia #${cont}:No tienes mucho por hacer, que tal si te tomas el dia libre`)
    }
    else if(Boolean(nivelDeEnergia) && Boolean(cargaTrabajo))
    {
        alert("Tienes mucho por hacer aprovecha tu energia, hoy es dia de trabajo")
        console.log(`Dia #${cont}:Tienes mucho por hacer aprovecha tu energia, hoy es dia de trabajo`)
    }
    else if(!Boolean(nivelDeEnergia) && Boolean(cargaTrabajo)){
        alert("Que ganas de pereza no?, pero hay trabajo por hacer")
        console.log(`Dia #${cont}:Que ganas de pereza no?, pero hay trabajo por hacer`)
    }
    else
    {
        alert("Que dia mas raro! No sabemos que hacer")
        console.log(`Dia #${cont}:Que dia mas raro! No sabemos que hacer`)
    }
}

let sig

do {
    cont++
    evaluarDia()
    sig = confirm("¿Quieres evaluar otro dia?")
} while (sig == true);