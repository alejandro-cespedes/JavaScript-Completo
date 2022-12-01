function coincidencias (frase, busqueda) {
    frase = frase.toLowerCase().replace(/[!¡.,-]/gi, '')
    let resultado = 0;
    console.log(frase)

    if (frase.includes(busqueda)){

        let palabras = frase.split(' ');
        for (let palabra of palabras) {
            if (palabra === busqueda){
                resultado++
            }
        }

    } else {
        resultado = 0;
    }
    console.log(`la palabra ${busqueda} se repite ${resultado} veces`)
}

coincidencias('hola soy una palabra en una frase, PALABRA.', 'juan')