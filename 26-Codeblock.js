"use strict"

let a = 42

// So ist das richtig! :)
console.log("Zeile1")
console.log("Zeile2")

// SO NICHT MACHEN!!!!! :(
{
    console.log("Zeile1")
    console.log("Zeile2")
}

// So ist das richtig!
if (a === 42) {
    console.log("Zeile1")
    console.log("Zeile2")

}

// SO NICHT MACHEN!!!!!:( (ansonsten gehört die zweite Zeile nicht zum Block)
if (a === 42) 
    console.log("Zeile1")
    console.log("Zeile2")

