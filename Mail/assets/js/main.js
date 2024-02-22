//                           ### MAIL EXCERCISE

/* # tools
-prompt
-arrays
-loop (for)
-log
*/

// Otteniamo l'indirizzo e-mail dello user attraverso il prompt
//let userMail = prompt('Please enter yout e-mail address below:')
//console.log(`Your email address is: ` + userMail);

let allowedUsersList = [
'franco.tre@gmail.com',
'luca89@gmail.com',
'marco77@gmail.com',
'milena@gmail.com',
'rocco69@gmail.com',
'mario96@gmail.com',
'gianluigicozza@gmail.com',
'sara.cinesca@gmail.com' 
]

// visualizziamo tutti gli elementi dell'array inserendoli nel ciclo for
for (let i = 0; i < allowedUsersList.length; i++) {
    const element = allowedUsersList[i];
    console.log(allowedUsersList[i]);

}

// creiamo una condizione per verificare che l'indirizzo e-mail inserito dall'utente sia registrato nell'array
if (allowedUsersList.includes(userMail)) {
    console.log('Welcome to the Boolean portal!');
    alert('Welcome to the Boolean Workspace!')

    // se l'indirizzo e-mail non soddisfa la condizione di sopra, creiamo un messagio di allerta per lo user
} else {
    alert('⛔️ Warning! Your e-mail address is not registred.\n Please enter a valid e-mail address to continue.')
}


