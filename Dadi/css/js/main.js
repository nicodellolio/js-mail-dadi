//                           ### DICES EXCERCISE

/* # tools
-Math.floor(Math.random)
-if, else
-log
*/

// creiamo due variabaili con i rispettivi Math.random per generare i numeri del dado

//per il giocatore
const playerDice = Math.floor(Math.random() * 6) + 1;
console.log(playerDice);

//per il computer
const cpuDice = Math.floor(Math.random() * 6) + 1;
console.log(cpuDice);

// stabiliamo il vincitore attraverso l'uso di
if (playerDice > cpuDice) {
    console.log('Player win');
    alert('Congratulation! You won. 🏆')
} else if (cpuDice > playerDice) {
    console.log('Computer win');
    alert('Oh no! Sorry, you did not win this. 😩')
} else {
    console.log('Game it is a tie');
    alert('Well looks like it is a tie. 🥱')
}
