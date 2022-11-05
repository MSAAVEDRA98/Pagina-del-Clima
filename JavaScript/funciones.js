/* EJERCICIO 1 */
let personas = [
    {'nombre': 'Julio','edad': 17},
    {'nombre': 'Fabiana','edad': 20},
    {'nombre': 'Estefanía','edad': 18},
    {'nombre': 'Gustavo','edad': 23},
    {'nombre': 'Luisa','edad': 16 }
]

function mostraralgo(personas){
    let mayores = [];
    let menores = [];
    let lista = [];
    for(let indice = 0;indice < personas.length; indice++)
    
        if(personas[indice].edad>=18){
            mayores.push(personas[indice].nombre);
        }
        else{
            menores.push(personas[indice].nombre)
        }
        lista.push(mayores);
        lista.push(menores);
        return(lista)

}
let listado = mostraralgo(personas);
console.log("Mayores: "+ listado[0]);
console.log("Menores: "+ listado[1]);
console.log("Lista completa:");
console.log(personas);