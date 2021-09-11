//alert('ciao');
console.log('Pagina funzionante!');
const msgBenvenuto = document.querySelector('#benvenuto');
let user;
let listaUtenti = [];
// al click del bottone deve succedere un ok al login o un ko
const btnLogIn = document.querySelector('#btn');
btnLogIn.addEventListener('click', function (event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    console.log(email);
    console.log(pwd); 
    utente = new User( email, pwd);
    //ora che ho agganciati gli elementi dell'html (i due input) voglio far verificare che se l'email e la pwd corrispondono a quelle che stabilisco io, allora il login è ok, altrimenti ko
    if (email === 'elenadias@ymail.com' && pwd === '123456') {
        console.log('Benvenuto, log in eseguito correttamente');
        checkUser();
        msgBenvenuto.innerHTML = `Benvenut@ ${utente.email}`;
        addToLocalStorage();
    } else {
        svuotaCampi();
        msgBenvenuto.innerHTML = `Ops, email e/o password errata/i!`;
        console.log('MMH... Email e/o password errate');
        addToLocalStorage();
    };
    
});

// Creo un oggetto Utente a livello globale
function User (email, pwd){
    this.email = email;
    this.pwd = pwd;
}
//Creo una funzione per controllare i campi dell'utente sottoforma di oggetto
function checkUser(){
    console.log(utente);
}
//funzione che pulisce i campi input una volta cliccato il bottone
function svuotaCampi(){
    document.querySelector('#email').value = '';
    document.querySelector('#pwd').value = '';
}
//funzione per il local Storage
function addToLocalStorage(){ 
    listaUtenti.push(utente.email); // fa il push nell'array (dichiarato vuoto) così poi può passarli al local storage
    localStorage.setItem('lista utenti', JSON.stringify(listaUtenti)); //memorizza le email degli utenti nel local storage
}

