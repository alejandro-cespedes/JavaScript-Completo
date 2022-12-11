function censurado(texto=false, busqueda=false){
    listacensurada = []
    let resultado = ''
    if (!texto && !busqueda){
        resultado = 'No puedes leer el texto y la busqueda'
    }else if (!texto && busqueda){
        resultado = 'No puede hacer el texto'
    }else if (texto && !busqueda){
        resultado = 'No puedes leer el texto y la busqueda'
    }else if (texto && busqueda){
        texto = texto.split(" ")
        texto.forEach( palabra => {
            if (palabra == busqueda){
                palabra = '[-CENSURADO-]'
                listacensurada.push(palabra)
            }
        })
        console.log(listacensurada)
    }
    return resultado;
}


console.log(censurado())

