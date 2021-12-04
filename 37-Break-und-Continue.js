"use strict"

// Bei continue wird übersprungen, bei break alles abgebrochen.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
    continue
    }

    if (i === 9) {
        break
    }

    console.log("i:", i)
}