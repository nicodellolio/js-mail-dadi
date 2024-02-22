// console.log('Does It work?');

// const colors = ['Blue', 'Red', 'Green'];
// console.log(colors);

// console.log(colors.length);

// for (let index = 0; index < colors.length; index++) {
//     const element = colors[index];
//     console.log(colors);
// }



/* 
# Descrizione della somma degli elementi dell'array: 
inizializza una variabile con un valore pari a O. 
Passa in rassegna i numeri dell'array e aggiungi ciascun elemento alla somma
*/

let sum = 0;
// console.log(sum);

let numbers = [1, 2, 3, 4, 5]
// console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const singlenumber = numbers[i];
    // console.log(i);
    sum += singlenumber;
}

// console.log(sum);


//INIZIALIZZA UN VARIABILE LARGEST CON IL PRIMO ELEMENTO DELL'ARRAY NUMBS. CICLA ATTRTAVERSO L'ARRAY E AGGIORNA LARGEST SE TROVI UN UNMERO MAGGIORE

let numbs = [2, 3, 5, 10, 7];
let largest = numbs[0]

for (let i = 0; i < numbs.length; i++) {
    const element = numbs[i];
    if (largest < 10) {
        largest = numbs[3]
    }
}

// console.log(largest);

// # _________________________ //#endregion


/*
Challenge 3: Verifica la Presenza di un Elemento
Descrizione: Inizializza una variabile trovato con false. Cicla attraverso l'array elementi e imposta trovato su true se l'elemento è presente nell'array.
*/

let trovato = false;
let elementi = ['mela', 'banana', 'arancia'];
let elemento = 'banana';

for (let i = 0; i < elementi.length; i++) {
    const elemento = elementi[i];
    
    if (elementi.includes(elemento)) {
        trovato=true
    }
}

console.log(trovato); // L'output sarà true se l'elemento è stato trovato, altrimenti false.
