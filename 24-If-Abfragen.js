"use strict"

// Einfache If Abfragen
let a = false

if (a) {
    console.log("Hallo Welt!")
}


// In der runden Klammer ist ein Ausdruck. Daraus entsteht ein Boolean
// Wenn der Boolean true ist, wird der Befehl ausgeführt, ansonsten nicht.
let zahl1 = 7
let zahl2 = 6

if (zahl1 <= zahl2) {
    console.log("Zahl1 ist kleiner als Zahl2")
}

// Auch mit Arrays möglich
let students = ["Max", "Moritz"]

if (students.indexOf("Erika") === -1) {
    console.log("Erika nimmt noch nicht am Kurs teil!")
}

