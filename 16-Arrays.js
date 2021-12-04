"use strict"

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichen!
 */
let students = [
 "Max Müller",
 "Erika Mustermann",
 "Annika Müller",
 "Max Mustermann"
]

// Was ist der Typ von einem Array?
console.log(students)
console.log(students instanceof Array)

// Wie viele Elemente sind in einem Array?
console.log(".length", students.length)

// Auf ein einzelnes Element zugreifen
console.log("[0]", students[0])

// Element hinzufügen
students.push("Joker", "Joker 2")
console.log(students)

// Letztes Element entfernen
let lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

//Ein Element überschreiben
students[0] = "Maximilian Müller"
console.log(students)