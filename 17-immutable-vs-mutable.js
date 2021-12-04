"use strict"

// Strings sind immutable (unveränderlich!)
let greeting = "Hallo Welt"
greeting = greeting + "!"
console.log("Hallo")

// Aber Arrays sind muteable (veränderlich!)
let students = ["Max", "Moritz"]
let copy = students
students.push("Joker")
console.log(copy)

// Mutable und const...
const students2 = ["Max", "Moritz"]
students2.push("Joker")
console.log("students2", students2)

//students2 = ["Max", "Moritz"]