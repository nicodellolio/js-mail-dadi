//                           ### DICES EXCERCISE

/* # tools
-Math.floor(Math.random)
-if, else
-log
*/

function throwDice() {

    let message = null
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
        message = ('Congratulation! You won. 🏆')
    } else if (cpuDice > playerDice) {
        console.log('Computer win');
        message = ('Oh no! Sorry, you did not win this. 😩')
    } else {
        console.log('Game it is a tie');
        message = ('Well looks like it is a tie. 🥱')
    };

    return message
}

//dichiariamo la variabile con l'elemento del DOM da cliccare
let dice_box;

dice_box = document.getElementById("dice_box");


dice_box.addEventListener("click", function(message){
    //dichiariamo la variabile che ci farà manipolare la DOM inserendo il risulto del gioco
    const result = document.getElementById("result")

    result.insertAdjacentHTML("beforeend", message)
});


