//                           ### MAIL EXCERCISE

/* # tools
-prompt
-arrays
-loop (for)
-log
*/

// Get the e-mail address through the prompt
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


//add the event lister for the submit button
document.getElementById("btn").addEventListener('click', function () {

    //declare the variable that call the input from the DOM
    const email = document.getElementById("mailField").value;

    //create two different variabile to give a different style regarding the response 
    const positive = document.getElementById("positive");
    const negative = document.getElementById("negative");
    const body = document.getElementById("doc_body");
    const header = document.getElementById("doc_header");

    // creiamo una condizione per verificare che l'indirizzo e-mail inserito dall'utente sia registrato nell'array
    if (allowedUsersList.includes(email)) {
        console.log(`User ${email} logged in`);

        negative.innerHTML = ""
        positive.innerHTML = ""
        positive.innerHTML = "Welcome to the Boolean portal!";

        header.innerHTML = "<img src=\"assets/img/logo.png\" alt=\"\">"
        
        body.classList.remove("denied")
        body.classList.add("granted")
        
        // se l'indirizzo e-mail non soddisfa la condizione di sopra, creiamo un messagio di allerta per lo user

    } 
    else{
        console.log(`User ${email}: unknown`);

        negative.innerHTML = ""
        positive.innerHTML = ""
        negative.innerHTML = "⛔️ Warning! Your e-mail address is not registred. Please enter a valid e-mail address to continue."

        header.innerHTML = "<img src=\"assets/img/nope.png\" alt=\"\">"

        body.classList.remove("granted")
        body.classList.add("denied")
    }

}

)