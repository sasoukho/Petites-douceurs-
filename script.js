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
    let avisList = JSON.parse(localStorage.getItem("avis")) || [];

    function afficherAvis() {
        avisContainer.innerHTML = "";
        if (avisList.length === 0) {
            avisContainer.innerHTML = "<p>Aucun avis pour le moment.</p>";
        } else {
            avisList.forEach(avis => {
                const avisElement = document.createElement("div");
                avisElement.classList.add("avis");
                avisElement.innerHTML = `
                    <p><strong>${avis.nom}</strong> (${avis.note}⭐)</p>
                    <p>${avis.commentaire}</p>
                `;
                avisContainer.appendChild(avisElement);
            });
        }
    }

    afficherAvis();

    // Soumission du formulaire
    avisForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const note = document.querySelector('input[name="note"]:checked')?.value || "0";
        const commentaire = document.getElementById("commentaire").value;

        if (!nom || note === "0" || !commentaire) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const nouvelAvis = { nom, note, commentaire };
        avisList.unshift(nouvelAvis);
        localStorage.setItem("avis", JSON.stringify(avisList));

        afficherAvis();
        avisForm.reset();
    });
    <script>
  document.querySelector("form").addEventListener("submit", function() {
    setTimeout(function(){
      window.location.href = "merci.html";
    }, 500); // Redirection après 0.5 seconde
  });
</script>
});
document.addEventListener("DOMContentLoaded", function () {
    const formAvis = document.getElementById("avis-form");
    const avisContainer = document.getElementById("avis-liste");

    // Charger les avis enregistrés
    function chargerAvis() {
        let avisStockes = JSON.parse(localStorage.getItem("avis")) || [];
        avisContainer.innerHTML = "";
        avisStockes.forEach(avis => {
            const div = document.createElement("div");
            div.classList.add("avis-item");
            div.innerHTML = `
                <p><strong>${avis.nom}</strong> - ${"⭐".repeat(avis.etoiles)}</p>
                <p>${avis.commentaire}</p>
                <hr>
            `;
            avisContainer.appendChild(div);
        });
    }

    formAvis.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const etoiles = document.querySelector("input[name='etoiles']:checked").value;
        const commentaire = document.getElementById("commentaire").value;

        if (nom && etoiles && commentaire) {
            let avisStockes = JSON.parse(localStorage.getItem("avis")) || [];
            avisStockes.push({ nom, etoiles, commentaire });
            localStorage.setItem("avis", JSON.stringify(avisStockes));

            formAvis.reset();
            chargerAvis();
        } else {
            alert("Merci de remplir tous les champs.");
        }
    });

    chargerAvis();
});
