// Tableau des images et légendes
const images = [
    "./asset/image/image1.png",
    "./asset/image/image2.webp",
    "./asset/image/image3.webp"
];

const captions = [
    "Comme souvent, cette histoire commence dans une auberge...<br>Celle-ci est miteuse, inquiètante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers",
    "Dans cette auberge miteuse, un danger plane...<br>Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires.",
    "La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien<br>Le combat allait être sans merci!"
];

// Sélection des éléments dans le DOM
const imageElement = document.querySelector(".col-3 img");
const captionElement = document.querySelector(".col-5 p");
const nextButton = document.querySelector(".btn");

// Index actuel
let currentIndex = 0;

// Fonction pour mettre à jour l'image et la légende
function updateContent() {
    imageElement.src = images[currentIndex];
    captionElement.innerHTML = captions[currentIndex]; // Utilise innerHTML pour interpréter les <br>
}

// Événement pour le bouton "Suivant"
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Avance à la suivante, revient à 0 si dépassement
    updateContent();
});

// Initialisation
updateContent();
