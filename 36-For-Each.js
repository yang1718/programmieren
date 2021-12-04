"use strict"

const students = ["Max", "Erika", "Monika"]

// for schreibweise
for (let i = 0; i < students.length; i++) {
    console.log("i:", i)
    console.log(students[i])
}


// for in schreibweise
for (const i in students) {
    console.log("i:", i)
    console.log(students[i])
}


// for of schreibweise
for (const student of students) {
    console.log(student)
}