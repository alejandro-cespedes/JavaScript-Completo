function invertir(palabra){
    let invertir = "";
    for (let i of palabra){
        invertir = i + invertir;
    }
    console.log(invertir)
}

invertir('hola')