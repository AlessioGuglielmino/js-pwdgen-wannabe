const username = prompt("inserisci il tuo nome");
const surname = prompt("inserisci il tuo cognome");
const color = prompt("inserisci il tuo colore preferito");

const dataUser = username + surname + color + "21";

document.getElementById("message-to-user").innerHTML = dataUser;
