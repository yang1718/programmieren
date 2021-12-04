"use strict"

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um. 
// 
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze

let amountStr = "15,37"
console.log(amountStr)

console.log(amountStr.replace(",", "."))
amountStr = amountStr.replace(",", ".")

console.log(parseFloat(amountStr, 10) * 100)
amountStr = parseFloat(amountStr, 10) * 100
console.log(amountStr)

console.log("amountStr % 200: " + amountStr % 200)
console.log((amountStr - (amountStr % 200)) / 200)
amountStr = amountStr % 200

console.log("amountStr % 100: " + amountStr % 100)
console.log((amountStr - (amountStr % 100)) / 100)
amountStr = amountStr % 100

console.log("amountStr % 50: " + amountStr % 50)
console.log((amountStr - (amountStr % 50)) / 50)
amountStr = amountStr % 50

console.log("amountStr % 20: " + amountStr % 20)
console.log((amountStr - (amountStr % 20)) / 20)
amountStr = amountStr % 20

console.log("amountStr % 10: " + amountStr % 10)
console.log((amountStr - (amountStr % 10)) / 10)
amountStr = amountStr % 10

console.log("amountStr % 5: " + amountStr % 5)
console.log((amountStr - (amountStr % 5)) / 5)
amountStr = amountStr % 5

console.log("amountStr % 2: " + amountStr % 2)
console.log((amountStr - (amountStr % 2)) / 2)
amountStr = amountStr % 2

console.log("amountStr % 1: " + amountStr % 1)
console.log((amountStr - (amountStr % 1)) / 1)
amountStr = amountStr % 1
/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!
let bill = 10
let tip = 0.15
let tip2 = 0.2

console.log(bill * tip)
let pay = bill + bill * tip
console.log(bill * tip2)
let pay2 = bill + bill * tip2
console.log((pay + pay2) / 2)
let payend = Math.round(pay + pay2) / 2
console.log(payend)
console.log("Der Gesamtbetrag beträgt " + payend + "€.")
