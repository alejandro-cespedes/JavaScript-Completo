function palindromo(palabra) {
    if (palabra === palabra.split('').reverse().join("")){
        console.log(true)
    }else {
        console.log(false)
    }
    
}

palindromo("otso")