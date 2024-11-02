// Funzione per mostrare il popup dei cookie solo se non sono stati ancora accettati
function checkCookieConsent() {
    const cookiePopup = document.getElementById('cookiePopup');
    
    // Verifica se i cookie sono già stati accettati nel localStorage
    if (!localStorage.getItem('cookiesAccepted')) {
        // Se i cookie non sono stati accettati, mostra il popup
        if (cookiePopup) {
            cookiePopup.style.display = 'block';
        }
    } else {
        // Se i cookie sono già stati accettati, nascondi il popup
        if (cookiePopup) {
            cookiePopup.style.display = 'none';
        }
    }
}

// Esegui il controllo all'caricamento iniziale della pagina
window.addEventListener('load', checkCookieConsent);

// Funzione per accettare i cookie e nascondere il popup
function acceptCookies() {
    // Salva l'accettazione dei cookie nel localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    
    // Nascondi il popup
    const cookiePopup = document.getElementById('cookiePopup');
    if (cookiePopup) {
        cookiePopup.style.display = 'none';
    }
}