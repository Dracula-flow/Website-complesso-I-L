//Script per riempire di contenuto dal db la landing page che porta ai progetti completi. 

//Script per riempire di contenuto dal db la landing page che porta ai progetti completi. 


// Script per la landing page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('landing_page_projects.html')) {
        const params = new URLSearchParams(window.location.search);
        
        // Recupera i parametri dall'URL
        const title = params.get('title');
        const description = params.get('description');
        const image = params.get('image');
        
        // Gestione del titolo
        if (title) {
            const titleElement = document.querySelector('#proj');
            if (titleElement) {
                titleElement.textContent = title;
            }
        }
        
        // Gestione dell'immagine di sfondo
        if (image) {
            // Seleziona la sezione corretta per l'effetto parallasse
            const parallaxSection = document.querySelector('#bgPara');
            if (parallaxSection) {
                // Imposta l'immagine di sfondo
                parallaxSection.style.backgroundImage = `url('${image}')`;
            }
        }
        
        // Gestione della descrizione
        if (description) {
            const descriptionContainer = document.querySelector('#descLong');
            if (descriptionContainer) {
                descriptionContainer.textContent = description;
            }
        }
    }
});

// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Crea l'Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Aggiungi la classe active solo quando l'elemento entra nella viewport
            entry.target.classList.toggle('active', entry.isIntersecting);
        });
    }, {
        threshold: 0.1, // Attiva quando il 10% dell'elemento è visibile
        rootMargin: '50px' // Attiva l'animazione leggermente prima che l'elemento sia visibile
    });

    // Osserva tutti gli elementi con la classe 'slide-up'
    document.querySelectorAll('.slide-up').forEach(element => {
        observer.observe(element);
    });
});