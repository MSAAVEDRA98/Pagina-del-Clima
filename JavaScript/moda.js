/* let personas = [
    {'nombre': 'Julio','edad': 17},
    {'nombre': 'Fabiana','edad': 20},
    {'nombre': 'Estefanía','edad': 18},
    {'nombre': 'Gustavo','edad': 23},
    {'nombre': 'Luisa','edad': 16 }
] */

// _____________________________________________________________________________

function crearPersona(nombre, apellido, edad, dni)
{
    let persona = [
        {
            "nombre": "",
            "appelido": "",
            "edad": 0,
            "dni": 0
        }
    ];

    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.edad = edad;
    persona.dni = dni;
    return(persona);
}

function mediaEdades (suma, cantidad){
    
    return(suma / cantidad)
}

function cargarNumero (numero, cantidad)
{
    let objeto = {
        "numero": 0, "cantidad" : 0
    }
    objeto.numero = numero;
    objeto.cantidad = cantidad;
    return(objeto)
}

/* COMIENZO DEL CODIGO "FUENTE" */

let listaPersonas = [];
let contador = [];
let indice = 0;
let suma = 0;
let numeroMax = 0;
let repeticiones;

listaPersonas.push(crearPersona("Simon","Saavedra", 24, 1));
listaPersonas.push(crearPersona("Natalia","Roberto", 25, 2));
listaPersonas.push(crearPersona("Anahi","Saavedra", 12, 3));
listaPersonas.push(crearPersona("Piston","Godoy", 1, 4));
listaPersonas.push(crearPersona("Armadillo","Fernandez", 5, 4));
listaPersonas.push(crearPersona("Paulina","Bolognesa", 5, 4));


contador.push(cargarNumero(0,0));

/* COMIENZA PROMEDIO DE EDADES */
for (let indice = 0; indice < listaPersonas.length; indice++)
{
    suma+= listaPersonas[indice].edad;
}

for(let indice = 0; indice < listaPersonas.length; indice++)
{
    repeticiones = 0;
    numeroMax = listaPersonas[indice].edad;
        for(let indice2 = 0; indice2< listaPersonas.length; indice2++)
        {
            if(numeroMax == listaPersonas[indice2].edad)
            {
                repeticiones++;
            }
        }
        if(repeticiones > contador[0].cantidad)
            contador[0] = cargarNumero(numeroMax, repeticiones);
}



console.log("Edad promedio ->",mediaEdades(suma,listaPersonas.length));
console.log("Edad que mas se repite -> ",contador[0].numero);
console.log("Lista -> ",listaPersonas);