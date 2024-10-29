//Lo script va associato alla pagina projects
//Riempie la pagina di card il cui contenuto viene pescato dal db con delle chiamate fetch.

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
