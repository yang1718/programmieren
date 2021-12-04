"use strict"

// While
let counter = 0
while (counter < 5) {
    // counter = counter + 1
    counter++

    console.log("Counter: ", counter)
}


// Aufpassen! Endlosschleife


while (true) {
    console.log("Hallo Welt")
}

// versteckte Endlosschleife
let student = ["Max"]

while (student.length < 4) {
    console.log("Hallo Welt")
}


// wird sehr selten verwendet.
let counter2 = 0
do {
    counter++

    console.log(counter2)
} while (counter2 < 5)
