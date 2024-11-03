//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Gli elementi del database possono essere trattati come oggetti appartenenti alla stessa classe.

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
                
                // Le prime 3 card vanno nel deck principale
                if (index < 3) {
                    deck.appendChild(creaCard(card));
                } 
                // Le restanti card vanno nel container additional-projects
                else {
                    additionalProjectsContainer.appendChild(creaCard(card));
                }
            });
        });
}

function creaCard(entry) {
    let cardCol = document.createElement("div");
    cardCol.setAttribute("class", "col-md-4 mb-3");

    let card = document.createElement("div");
    
    card.innerHTML = `
    <div class="col h-100">
        <div class="card card-cover overflow-hidden rounded-4 shadow-lg" style="background-image: url('${entry.image}');">
            <div class="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                <h3 class="mb-4 display-6 lh-1 fw-bold">${entry.title}</h3>
                <p class="flex-grow-1 pb-3">${entry.descShort}</p>
                <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="40" height="40" class="rounded-circle border border-white">
                    </li>
                    <li class="d-flex align-items-center">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                        <button class="btn btn-primary rounded-pill px-3" type="button">Altro...</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;

    cardCol.appendChild(card);
    return cardCol;
}


// Script per BOTTONE altri progetti (già aggiunto in HTML), fa comparire altri 3 progetti in basso alla pagina.
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
            }, 500);
        }
    });
});
