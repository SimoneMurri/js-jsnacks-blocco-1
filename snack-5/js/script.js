let primaParola = prompt("Inserisci la prima parola");
let secondaParola = prompt("Inserisci la seconda parola");

let lunghezzaPrimaParola = primaParola.length;
let lunghezzaSecondaParola = secondaParola.length;

if (lunghezzaPrimaParola < lunghezzaSecondaParola){
    console.log(primaParola);
    console.log(secondaParola);
} else {
    console.log(secondaParola);
    console.log(primaParola);
}