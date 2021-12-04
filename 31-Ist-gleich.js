"use strict"

// = vs. == vs. ===


// Zuweisung einer Variable
let massage = "Hallo Welt"

// Vergleich (alles wird in einen Boolean umgewandelt)
console.log("true == 1:",true == 1)
console.log("true != 1:",true != 1)

// Strikter vergleich (immer das benutzen)
console.log("true === 1:",true === 1)
console.log("true !== 1:",true !== 1)

//Probleme:
console.log("0" == false)

// https://github.com/denysdovhan/wtfjs
console.log("[] == ![]:", [] == ![])