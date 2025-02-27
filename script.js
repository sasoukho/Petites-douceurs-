document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Gestion du menu burger
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
            console.log("Classe 'open' ajoutée :", navLinks.classList.contains("open"));
        });
    } else {
        console.error("Erreur : Élément du menu introuvable.");
    }

    // 🔹 Gestion des onglets (ShowTab)
    function showTab(tabId, event) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });

        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active-tab');
        });

        document.getElementById(tabId).style.display = 'block';

        if (event) {
            event.currentTarget.classList.add('active-tab');
        }
    }

    // Afficher par défaut l'onglet "Pâtisseries Classiques"
    showTab('classique', null);

    // 🔹 Gestion des avis
    const avisForm = document.getElementById("avisForm");
    const avisContainer = document.getElementById("listeAvis");

    function chargerAvis() {
        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisContainer.innerHTML = avisList.length === 0 ? "<p>Aucun avis pour le moment.</p>" : "";

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

    chargerAvis();

    if (avisForm) {
        avisForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nom = document.getElementById("nom").value.trim();
            const noteInput = document.querySelector('input[name="note"]:checked');
            const commentaire = document.getElementById("commentaire").value.trim();

            if (!nom || !noteInput || !commentaire) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            const nouvelAvis = {
                nom,
                note: parseInt(noteInput.value),
                commentaire
            };

            let avisList = JSON.parse(localStorage.getItem("avis")) || [];
            avisList.unshift(nouvelAvis);
            localStorage.setItem("avis", JSON.stringify(avisList));

            chargerAvis();
            avisForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Vérification du formulaire d'avis...");

    const avisForm = document.getElementById("avisForm");
    const avisContainer = document.getElementById("listeAvis");

    if (!avisForm || !avisContainer) {
        console.error("Erreur : avisForm ou listeAvis introuvable.");
        return;
    }

    avisForm.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Formulaire soumis !");
        const nom = document.getElementById("nom").value.trim();
        const noteInput = document.querySelector('input[name="note"]:checked');
        const commentaire = document.getElementById("commentaire").value.trim();

        if (!nom || !noteInput || !commentaire) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        console.log(`Nouveau avis : ${nom}, Note : ${noteInput.value}, Commentaire : ${commentaire}`);

        const nouvelAvis = {
            nom,
            note: parseInt(noteInput.value),
            commentaire
        };

        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisList.unshift(nouvelAvis);
        localStorage.setItem("avis", JSON.stringify(avisList));

        afficherAvis();
        avisForm.reset();
    });

    function afficherAvis() {
        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisContainer.innerHTML = avisList.length === 0 ? "<p>Aucun avis pour le moment.</p>" : "";

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

    afficherAvis();
});
