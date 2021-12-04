"use strict"

let request = null

// String wird automatisch in Boolean umgewandelt. Wenn es einen Inhalt
// gibt, ist der Boolean true.
request = "GET /"

if (request) {
    console.log("Hallo Welt!")
}


// String wird automatisch in Boolean umgewandelt. Wenn es kinen Inhalt
// gibt, ist der Boolean false. 
request = ""

if (request) {
    console.log("Hallo Welt!")
}