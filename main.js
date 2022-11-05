// const apiClima = "https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo";
const apiClima = "https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo";

function nombreCiudad(nombre){
    let city = nombre;
    return (city)
}

function nombreMes (numeroMes){
    let mes = "";
    switch (numeroMes){
        case 11:
            mes = "Nov";
            break;
        case 12:
            mes = "Dic";
            break;
        case 1 || 01:
            mes = "Ene";
            break;
    }
    return(mes);
}

// let dias = [day2, day3, da4, day5, day6, day7];

fetch (apiClima)
.then (Response => Response.json() )
.then (data => {
    

    let dia = new Date; //fecha del sistema
    // let hoy = dia.getDay() - 1; //numero del dia de hoy
    // let mes = dia.getMonth() + 1; //numero del mes en el que estamos
    let hora = dia.getHours();  //numero de hora (9:35 => 9)
    let fecha = data.hourly.time[hora]; //Devuelve la fecha en formato YY/MM/DD T HH:MM
    let index = data.hourly.time.indexOf(fecha); //Devuelve el indice en el arreglo para obtener datos especificos del dia de hoy

    let temperatura = data.hourly.temperature_2m[index];    //Obtiene la temperatura en la hora en la que estamos
    let sensacion_Termica = data.hourly.apparent_temperature[index]; //sensacion termica en la hora en la que estamos 
    let precipitacion_js = data.hourly.precipitation[index];    //precipitacion en la hora en la que estamos
    let velocidad_Viento = data.hourly.windspeed_10m[index];    //velocidad del viento a la hora en la que estamos-

    ciudad.innerHTML = nombreCiudad("Ushuaia");     //Muestra en pantalla el nombre de la ciudad
    tempHoy.innerHTML = "T: " + temperatura + "°";  //Muestra en pantalla los datos obtenidos sobre la temperatura de hoy
    sensacionTermica.innerHTML = "S.T -> " + sensacion_Termica;   //Muestra en pantalla los datos obtenidos sobre la sensacion termica
    precipitacion.innerHTML = "P -> " + precipitacion_js;     //Muestra en pantalla los datos obtenidos sobre la precipitacion
    velocidadViento.innerHTML = "V.V -> " + velocidad_Viento;  //Muestra en pantalla los datos obtenidos sobre la velocidad del viento

    let arreglo = [day1, day2, day3, day4, day5, day6, day7];   //Arreglo con los ID del HTML sobre el nombre de los días de las tarjetas inferiores
    let nombreSemana = [dia2, dia3, dia4, dia5, dia6, dia7];              //Arreglo con los ID del HTML sobre los días de las tarjetas inferiores
    let diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];     //Arreglo con el nombre de los días de la semana
    let diaHoy = dia.getUTCDay();       //Numero del día de la semana en el que nos encontramos (del 0 al 6)

    /* Cambia los dias que aparecen en las tarjetas inferiores */
    let auxHoy = hoy;
    for (let indice = 0;indice < arreglo.length; indice++){
        arreglo[indice].innerHTML = auxHoy + " " + nombreMes(mes);
        nombreSemana[indice].innerHTML = diaSemana[diaHoy];
        diaHoy++;
        auxHoy++;
        if(diaHoy == 7){
            diaHoy = 0;
        }
    }

    console.log(index + "Hs");
    console.log("Hoy "+diaSemana[diaHoy]+" "+diaHoy/* diaHoy + "hoy" + diaSemana[diaHoy] */);
    console.log(hoy);
    console.log(fecha);
    console.log(data);
    
})