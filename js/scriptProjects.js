//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

//Gli elementi del database possono essere trattati come oggetti appartenenti alla stessa classe.

class CardPiccola {
    constructor(title,descShort,image) {
        this.title = title
        this.descShort = descShort
        this.image=image
    }
}

function loadCards() {

    //chiamata fetch dei dati
    const URL = "http://localhost:3000/cardContent";

    fetch(URL)
    .then(data =>{
        return data.json();
    }).then(response =>{
        console.log(response);

        //con il forEach, costruisco gli oggetti di classe Film con i dati presenti nel database. Inoltre, inserisco tramite DOM
        //gli oggetti in una card formattata tramite Bootstrap.
        response.forEach(entry => {
            let card = new CardPiccola(entry.title, entry.descShort, entry.image)
            deck.appendChild(creaCard(card));
        });
    })
    
}

let deck = document.querySelector("#deck");

document.addEventListener("DOMContentLoaded", loadCards);

function creaCard(entry){
    //Ogni card è un div. Tutte le card sono chiuse in un altro div.
        let cardCol = document.createElement("div");
        cardCol.setAttribute("class", "col-md-4 mb-3");
    
        let card = document.createElement("div");
        // card.setAttribute("class", "card");
        // card.setAttribute("style", "width: 26rem");
    
        card.innerHTML = `<div id="" class="row row-cols-1 row-cols-lg-3 pb-5 border-bottom align-items-stretch g-4 py-5">
        <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('${entry.image}');">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="mb-4 display-6 lh-1 fw-bold">${entry.title}</h3>
                    <div class="flex-grow-1 pb-3">${entry.descShort}</div>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                        </li>
                        
                        <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                            <button class="btn btn-primary rounded-pill px-3" type="button">Altro...</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`


        // card.innerHTML = `<img class="card-img-top" src=${entry.image} />
        //                    <div class="card-body">
        //                          <h3 class="card-title">${entry.title}</h3>
        //                          <p class="card-text">${entry.descShort}</p>
        //                  </div>`;
    
        // let buttonScopri = document.createElement("button");
        // buttonScopri.setAttribute("class", "btn btn-primary");
        // buttonScopri.textContent = `Scopri di più`;
    
        // card.appendChild(buttonScopri);
         cardCol.appendChild(card);
    
        return cardCol;
    }


// Script per BOTTONE altri progetti (già aggiunto in HTML), fa comparire altri 3 progetti in basso alla pagina.
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleProjects');
    const additionalProjects = document.getElementById('additional-projects');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    // Clona le card dei TOP progetti
    const topProjects = document.querySelector('.row.row-cols-1.row-cols-lg-3.pb-5').innerHTML;
    additionalProjects.innerHTML = topProjects;
    
    toggleButton.addEventListener('click', function() {
        // Toggle della visualizzazione dei progetti aggiuntivi
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
