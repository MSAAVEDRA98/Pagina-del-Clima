function crearObjeto(nombre,edad)
{
    let objetoNumero = {
        "nombre" : "", "edad" : 0
    }

    objetoNumero.nombre = nombre;
    objetoNumero.edad = edad;
    return(objetoNumero);
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

/* function numeroMaximo()
{

} */


let arreglo = [];
let contador = [];
let numeroMax = 0;

arreglo.push(crearObjeto("Simon", 10));
arreglo.push(crearObjeto("Natalia", 11));
arreglo.push(crearObjeto("Anahi", 10));
arreglo.push(crearObjeto("Carlos", 20));

console.log(arreglo);
contador.push(cargarNumero(0,0));

for(let indice = 0; indice < arreglo.length; indice++)
{
    let repeticiones = 0;
    numeroMax = arreglo[indice].edad;
    // console.log("Numero -> ",numeroMax);
    // if(numeroMax == )
        for(let indice2 = 0; indice2< arreglo.length; indice2++)
        {
            if(numeroMax == arreglo[indice2].edad)
            {
                repeticiones++;
            }
        }
        // console.log(contador.cantidad);
        if(repeticiones > contador[0].cantidad)
            contador[0] = cargarNumero(numeroMax, repeticiones);
    // console.log("repeticiones -> ",repeticiones);
}

console.log(contador);