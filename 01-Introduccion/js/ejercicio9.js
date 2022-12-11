function elementoComunes(array1, array2){
    let resultado = array1.filter((elemento) =>{
        return array2.includes(elemento)
    })
    console.log(resultado)
    }
    

elementoComunes([4,5,6,7], [7,8,9,7,5])