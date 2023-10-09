let chilometri = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
let eta = parseInt(prompt("Inserisci la tua età:"));

let prezzoBase = chilometri * 0.21;
let sconto = 0;

if (eta < 18) {
    // sconto del 20% per i minorenni
    sconto = prezzoBase * 0.2;
} else if (eta >= 65) {
    // sconto del 40% per gli over 65
    sconto = prezzoBase * 0.4;
}
let prezzoFinale = prezzoBase - sconto;

// prezzo arrotondato a due cifre decimali
let prezzoFormattato = prezzoFinale.toFixed(2);

// stampa il prezzo finale sulla pagina
document.write("Il prezzo del biglietto è: " + " €" + prezzoFormattato );


