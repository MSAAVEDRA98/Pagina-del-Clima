function concatenar(cantidad,palabras)
{
    let frase = "";
    for(let indice = 0; indice < cantidad; indice++)
    {
        if(indice == cantidad-1)
        {
            frase += palabras[indice] + ".";
        }
        else
        {
            frase += palabras[indice] +" ";
        }
    }
    return(frase);
}

let oracion = ["El", "auto", "de", "color", "rojo", "esta", "mal", "estacionado"];
let cantidad = oracion.length;
console.log(concatenar(cantidad,oracion));