// Funzione per estrarre un numero casuale
function extractNumber() {
    const randomNumber = Math.floor(Math.random() * 90) + 1;
    document.getElementById('last-number').textContent = randomNumber;
}

// Funzione per terminare il gioco
function endGame() {
    // Mostra un messaggio di avviso
    alert("Il gioco è terminato!");
    
    // Disabilita il pulsante "Estrai"
    document.getElementById('extract-button').disabled = true;

    // Disabilita il pulsante "Termina gioco"
    document.getElementById('end-game-button').disabled = true;
}

// Aggiungi un listener per il click sul pulsante "Estrai"
document.getElementById('extract-button').addEventListener('click', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del link
    extractNumber(); // Chiama la funzione di estrazione
});

// Aggiungi un listener per il click sul pulsante "Termina gioco"
document.getElementById('end-game-button').addEventListener('click', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del link
    endGame(); // Chiama la funzione di termine del gioco
});