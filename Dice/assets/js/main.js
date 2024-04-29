//                           ### DICES EXCERCISE

/* # tools
-Math.floor(Math.random)
-if, else
-log
*/

let dice_box;

dice_box = document.getElementById("dice_box");

dice_box.addEventListener("click", function throwDice() {
    
    let message = null
    // create two variables containing the two Math.random to generate the dice numbers

    //for the player (user)
    const playerDice = Math.floor(Math.random() * 6) + 1;
    console.log(playerDice);

    //for the CPU
    const cpuDice = Math.floor(Math.random() * 6) + 1;
    console.log(cpuDice);

    // display the winner:
    if (playerDice > cpuDice) {
        console.log('Player win');
        message = ('Congratulation! You won. 🏆')
    } else if (cpuDice > playerDice) {
        console.log('Computer win');
        message = ('Oh no! Sorry, you did not win this. 😩')
    } else {
        console.log('Game it is a tie');
        message = ('Well it looks to be a tie. 🥱')
    };


    //declare the DOM node to attach the result
    const result = document.getElementById("result")
    const player_score = document.getElementById("player_score")
    const cpu_score = document.getElementById("cpu_score")

    result.classList.add('result_style')
    player_score.classList.add('score_style')
    cpu_score.classList.add('score_style')

    //clean the previuous string if there
    result.innerHTML = ("")
    player_score.innerHTML = ("")
    cpu_score.innerHTML = ("")

    //insert the result inside the DOM
    result.innerHTML = message
    player_score.innerHTML = `YOU ${playerDice}`
    cpu_score.innerHTML = `CPU ${cpuDice}`
})
