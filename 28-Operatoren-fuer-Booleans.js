"use strict"

console.log("!true:", !true)
console.log("!false:", !false)

console.log(42 !== 13)

// Logisches UND
console.log("true && true:", true && true)
console.log("true && false:", true && false)
console.log("false && true:", false && true)
console.log("false && false:", false && false)

// Logisches ODER
console.log("true || true:", true || true)
console.log("true || false:", true || false)
console.log("false || true:", false || true)
console.log("false || false:", false || false)

// Beispiel:
let student1 = ["Max"]
let student2 = ["Monika"]

if (student1.indexOf("Erika") === -1 && student2.indexOf("Erika") === -1) {
    console.log("Erika ist weder Teilnehmer von student1 noch von student2")
}
