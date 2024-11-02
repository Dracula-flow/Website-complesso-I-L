//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Gli elementi del database possono essere trattati come oggetti appartenenti alla stessa classe.

// Classe CardPiccola rimane invariata
// Classe CardPiccola rimane invariata
class CardPiccola {
    constructor(title, descShort, image) {
        this.title = title
        this.descShort = descShort
        this.image = image
    }
}

function loadCards() {
    const URL = "http://localhost:3000/cardContent";
    const deck = document.querySelector("#deck");
    const additionalProjectsContainer = document.querySelector("#additional-projects");

    fetch(URL)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            
            // Dividiamo le card in due gruppi: prime 3 e restanti
            response.forEach((entry, index) => {
                let card = new CardPiccola(entry.title, entry.descShort, entry.image);
                // Aggiungiamo l'id dal database all'oggetto card
                card.id = entry.id;
                
                // Le prime 3 card vanno nel deck principale
                if (index < 3) {
                    deck.appendChild(creaCard(card));
                } 
                // Le restanti card vanno nel container additional-projects
                else {
                    additionalProjectsContainer.appendChild(creaCard(card));
                }
            });

            // Dopo aver creato tutte le card, aggiungiamo i listener ai bottoni
            setupCardButtons();
        });
}

function creaCard(entry) {
    let cardCol = document.createElement("div");
    cardCol.setAttribute("class", "col-md-4 mb-3");

    let card = document.createElement("div");
    
    card.innerHTML = `
    <div class="col h-100" data-card-id="${entry.id}">
        <div class="card card-cover overflow-hidden rounded-4 shadow-lg" style="background-image: url('${entry.image}');">
            <div class="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                <h3 class="mb-4 display-6 lh-1 fw-bold">${entry.title}</h3>
                <p class="flex-grow-1 pb-3">${entry.descShort}</p>
                <ul class="d-flex list-unstyled mt-auto">
                    <li class="d-flex align-items-center">
                        <button class="btn btn-primary rounded-pill px-3 btn-altro" type="button">Altro...</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;

    cardCol.appendChild(card);
    return cardCol;
}

function setupCardButtons() {
    // Aggiungi event listener a tutti i bottoni "Altro..."
    document.querySelectorAll('.btn-altro').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Trova l'elemento padre che contiene l'ID della card
            const cardContainer = this.closest('[data-card-id]');
            const cardId = cardContainer.dataset.cardId;
            
            // Recupera i dati completi della card dal database
            fetch(`http://localhost:3000/cardContent/${cardId}`)
                .then(response => response.json())
                .then(cardData => {
                    // Codifica i dati da passare nell'URL
                    const params = new URLSearchParams({
                        title: cardData.title,
                        description: cardData.descLong, // Usa descLong per la landing page
                        image: cardData.image
                    });
                    
                    // Reindirizza alla landing page con i parametri
                    window.location.href = `landing_page_projects.html?${params.toString()}`;
                })
                .catch(error => console.error('Error:', error));
        });
    });
}

// Script per gestire il toggle dei progetti aggiuntivi
document.addEventListener('DOMContentLoaded', function() {
    loadCards();
    
    const toggleButton = document.getElementById('toggleProjects');
    const additionalProjects = document.getElementById('additional-projects');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    toggleButton.addEventListener('click', function() {
        if (additionalProjects.style.display === 'none') {
            additionalProjects.style.display = 'flex';
            setTimeout(() => {
                additionalProjects.classList.add('show');
                toggleIcon.classList.add('rotated');
            }, 10);
        } else {
            additionalProjects.classList.remove('show');
            toggleIcon.classList.remove('rotated');
            setTimeout(() => {
                additionalProjects.style.display = 'none';
            }, 200);
        }
    });
})