// JavaScript source code

"use strict";

let location1 = 3;
let location2 = 4;
let location3 = 5;

let hits = 0; //  iloœæ trafien
let guess; // komorka do sprawdzenia
let guesses = 0; // ilosc prob

let isSunk = false // sprawdza czy statek jest zatopiony
while (isSunk == false) {
    guess = prompt('Wybierz pole z zakresu 0-6?', '');
    if (guess > 6 || guess < 0) {
        alert("Podaj prawidlowe numer pola z zakresu 0-6")
    }
    else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits++;
            alert("Trafiony!");



            if (hits == 3) {
                isSunk = true;
                alert("Zatopiles moj okret");
            }
        }
        else {
            alert("Pud³o")
        }
    } 
}
let stats = "Potrzebowales " + guesses + " prob by zatopic okret, " +
    "czyli twoja efektywnosc wynosi " + (guesses / 3) + ".";
alert(stats);
