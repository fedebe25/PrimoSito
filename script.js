function cambiaContenuto() {
    // Cambia il testo del titolo usando l'ID
    const titolo = document.getElementById("titolo-principale");
    titolo.innerHTML = "Hai attivato il JavaScript!";
    titolo.style.color = "#00d4ff";
    
    // Messaggio di conferma
    alert("Funzione JavaScript eseguita con successo!");
}