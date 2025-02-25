document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Erreur : Élément du menu non trouvé !");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            console.log("Classe active ajoutée :", navLinks.classList.contains("active"));
        });
    } else {
        console.error("Erreur : Élément du menu introuvable.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none"); // Cache toutes les images
        slideIndex = (slideIndex + 1) % slides.length; // Passe à l'image suivante
        slides[slideIndex].style.display = "block"; // Affiche l'image actuelle
        setTimeout(showSlides, 4000); // Change toutes les 4 secondes
    }

    showSlides(); // Démarre le diaporama
});

function showTab(tabId, event) {
    // Masquer toutes les sections de contenu
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Supprimer la classe active de tous les boutons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active-tab');
    });

    // Afficher la section sélectionnée
    document.getElementById(tabId).style.display = 'block';

    // Ajouter la classe active au bouton cliqué
    if (event) {
        event.currentTarget.classList.add('active-tab');
    }
}
function showTab(tabName) {
    // Cacher toutes les sections
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = "none";
    });

    // Retirer la classe active de tous les boutons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active-tab');
    });

    // Afficher la section sélectionnée
    document.getElementById(tabName).style.display = "block";

    // Ajouter la classe active au bouton cliqué
    event.currentTarget.classList.add('active-tab');
}
// Afficher uniquement la section "Pâtisseries Classiques" au chargement
document.addEventListener("DOMContentLoaded", function () {
    showTab('classique'); // Afficher l'onglet classique par défaut
});

document.addEventListener("DOMContentLoaded", function () {
    const avisForm = document.getElementById("avisForm");
    const avisContainer = document.getElementById("avisContainer");

    // Charger les avis enregistrés
    document.addEventListener("DOMContentLoaded", function () {
    const avisForm = document.getElementById("avisForm");
    const avisContainer = document.getElementById("listeAvis");

    // Charger les avis stockés
    function chargerAvis() {
        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisContainer.innerHTML = "";

        if (avisList.length === 0) {
            avisContainer.innerHTML = "<p>Aucun avis pour le moment.</p>";
            return;
        }

        avisList.forEach(avis => {
            const avisElement = document.createElement("div");
            avisElement.classList.add("avis-item");
            avisElement.innerHTML = `
                <p><strong>${avis.nom}</strong> - ${"⭐".repeat(avis.note)}</p>
                <p>${avis.commentaire}</p>
                <hr>
            `;
            avisContainer.appendChild(avisElement);
        });
    }

    chargerAvis(); // Afficher les avis au chargement

    // Gestion de l'envoi du formulaire
    avisForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const noteInput = document.querySelector('input[name="note"]:checked');
        const commentaire = document.getElementById("commentaire").value.trim();

        if (!nom || !noteInput || !commentaire) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const note = parseInt(noteInput.value);

        const nouvelAvis = { nom, note, commentaire };

        // Récupérer les avis existants et ajouter le nouveau
        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisList.unshift(nouvelAvis); // Ajoute au début du tableau
        localStorage.setItem("avis", JSON.stringify(avisList));

        chargerAvis(); // Met à jour l'affichage
        avisForm.reset(); // Réinitialiser le formulaire
    });
});
