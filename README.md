# Website-complesso-I-L
Un progetto assegnato nell'ambito del corso di Tecniche di sviluppo Python 2024
Code by Martina, Lorenzo, Simone.

Primo step: HTML ed estetica principale tramite bootstrap.
Tasto home da incorporare nel logo della navbar.

Secondo step: db.json, definizione contenuti.

Terzo step: script JS

Ultime cose: Sezione contatti, libreria Leaflet per la mappa e il meteo, + accessori e CSS, banner cookie Accetta-Rifiuta-Controlla i termini.

Dizionario JS da concordare, per adesso tutto commentato. 

# HTML e bootstrap
Ogni pagina avrà una navbar e un footer.

Pagina home= Carousel con bootstrap per foto presentazione azienda + eventuale link a progetti, secondo livello heading con foto nostre(avatar o altro) e sezione "candidati" al fondo (foto 400x300)  con sezione sempre presa dal carousel terzo livello, form accanto per l'inserimento dati.. Footer al fondo puramente decorativo.

Pagina progetti = i requisiti sono 3 card mostrate di default + 3 card "nascoste" in una sezione "Scopri di più". Le card sono formattate con boostrap examples/features: custom cards, testo all'interno + altre informazioni. Importante definire la struttura. Una volta cliccato sul progetto, si viene riportati alla pagina html che verrà riempita dallo script js in base ai contenuti corrispondenti del db. La landing page dei prodotti sarà formattata secondo il bootstrap examples/product, grande banner sopra che fa da heading + 1/2 sottosezioni per descrizione servizio/prodotto.

Pagina Contatti = Mappa, form contatti semplice con principali info, magari meteo.

# JS 

Funzioni e chiamate FETCH a manetta: dati dei progetti dal db.json. Link Altri progetti è un bottone che richiama la funzione per creare le card, ma i dati saranno presi da altre voci del database.
