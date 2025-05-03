// Sélectionner les éléments
const accueilSection = document.querySelector('.intro');
const actualitesSection = document.getElementById('actualites-section');
const contactSection = document.getElementById('contact');
const actualitesLink = document.getElementById('actualites');
const accueilLink = document.getElementById('accueil');

// Gestion des événements de clic
accueilLink.addEventListener('click', () => {
    accueilSection.style.display = 'block'; // Affiche la section Accueil
    actualitesSection.style.display = 'none'; // Masque la section Actualités
    contactSection.style.display = 'none'; // Masque la section Contact
});

actualitesLink.addEventListener('click', () => {
    accueilSection.style.display = 'none'; // Masque la section Accueil
    actualitesSection.style.display = 'block'; // Affiche la section Actualités
    contactSection.style.display = 'none'; // Masque la section Contact
});
