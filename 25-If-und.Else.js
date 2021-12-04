"use strict"

let studentCount = 10

// Ereignis
if (studentCount < 15) {
    console.log("Es sind noch Plätze im Sprachkurs frei!")
}

// Gegenereignis
if (studentCount >= 15) {
    console.log("Der Spachkurs ist schon voll!")
}


// Mit else ist es einfacher!
if (studentCount < 15) {
    console.log("Es sind noch Plätze im Sprachkurs frei!")
} 
else {
    console.log("Der Spachkurs ist schon voll!")
}




// Man kann If und Else auch verschachteln. Dabei wird das Programm von 
// oben nach unten ausgeführt und die nichtzutreffenden Teile werden 
// ignoriert. 
let studentcount2 = 10

if (studentcount2 < 5) {
    console.log("Es sind noch viele Plätze im Sprachkurs frei!")
} 
else{
    if (studentcount2 < 8) {
        console.log("Es sind noch wenige Plätze frei!")
    }
    else {
        if (studentcount2 < 10) {
         console.log("Es sind noch kaum Plätze frei!")   
        }
        else {
            console.log("Es sind keine Plätze mehr frei!")
        }
    }
}