"use strict"

let s = "3.141"

// String in eine Ganzzahl umwandeln
console.log(parseInt(s, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(s, 10))

//Achtung bein Rechnen nit Kommazahlen!
let result = 50.35 % 6 -2.35
console.log(result)

//Lösung: Kommazahlen vermeiden! 
let result2 = 5035 % 600 -235
console.log(result)

//Zahl zu String
let n = 3.141
console.log(""+ n)
//console.log(n.toExponential())
console.log(n.toFixed(2))
//console.log(n.toPrecision(2))