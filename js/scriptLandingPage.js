//Script per riempire di contenuto dal db la landing page che porta ai progetti completi. 


// Script per la landing page
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se siamo nella landing page
    if (window.location.pathname.includes('landing_page_projects.html')) {
        const params = new URLSearchParams(window.location.search);
        
        // Recupera i parametri dall'URL
        const title = params.get('title');
        const description = params.get('description');
        const image = params.get('image');
        
        // Popola gli elementi della landing page
        if (title && description && image) {
            // Aggiorna il titolo
            document.querySelector('#proj').textContent = title;
            
            // Aggiorna l'immagine nel contenitore imgProj
            const imgContainer = document.querySelector('#imgProj');
            if (imgContainer) {
                imgContainer.style.backgroundImage = `url('${image}')`;
                imgContainer.style.backgroundAttachment = 'fixed';
                imgContainer.style.backgroundRepeat = 'no-repeat';
                imgContainer.style.backgroundSize = 'cover';
                imgContainer.style.backgroundPosition = 'center';
            }
            
            // Aggiorna la descrizione
            const descriptionContainer = document.querySelector('.bg-dark.bg-gradient');
            if (descriptionContainer) {
                descriptionContainer.textContent = description;
            }
        }
    }
});