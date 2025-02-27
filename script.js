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

    document.addEventListener("DOMContentLoaded", function () {
    const avisForm = document.querySelector("#avisForm");
    const avisContainer = document.querySelector("#listeAvis");

    if (!avisForm || !avisContainer) {
        console.warn("⚠️ Cette page ne contient pas de formulaire d'avis. Script ignoré.");
        return; // Sortie du script si pas sur la bonne page
    }

    console.log("✅ Formulaire d'avis détecté, script chargé correctement.");

    // ✅ Gestion de la soumission du formulaire
    avisForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.querySelector("#nom").value.trim();
        const noteInput = document.querySelector('input[name="note"]:checked');
        const commentaire = document.querySelector("#commentaire").value.trim();

        if (!nom || !noteInput || !commentaire) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const note = parseInt(noteInput.value);
        console.log(`✅ Nouvel avis soumis : ${nom}, Note: ${note}, Commentaire: ${commentaire}`);

        // 🔴 Ajout immédiat de l'avis
        const nouvelAvis = document.createElement("div");
        nouvelAvis.classList.add("avis-item");
        nouvelAvis.innerHTML = `
            <p><strong>${nom}</strong> - ${"⭐".repeat(note)}</p>
            <p>${commentaire}</p>
            <hr>
        `;
        avisContainer.prepend(nouvelAvis);

        // 🔴 Sauvegarde dans localStorage
        let avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisList.unshift({ nom, note, commentaire });
        localStorage.setItem("avis", JSON.stringify(avisList));

        // ✅ Réinitialisation du formulaire
        avisForm.reset();
    });

    // ✅ Chargement des avis stockés
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

        console.log("✅ Avis chargés avec succès !");
    }

    afficherAvis();
});
    document.addEventListener("DOMContentLoaded", function () {
    const avisForm = document.querySelector("#avisForm");
    const avisContainer = document.querySelector("#listeAvis");

    if (!avisForm || !avisContainer) {
        alert("Erreur : avisForm ou listeAvis introuvable !");
        return;
    }

    // ✅ Vérification des données saisies
    avisForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.querySelector("#nom").value.trim();
        const noteInput = document.querySelector('input[name="note"]:checked');
        const commentaire = document.querySelector("#commentaire").value.trim();

        if (!nom || !noteInput || !commentaire) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const note = parseInt(noteInput.value);
        alert(`✅ Avis soumis : ${nom}, Note: ${note}, Commentaire: ${commentaire}`);

        // 🔴 Tester si l'avis est bien ajouté à la liste
        avisContainer.innerHTML += `
            <div class="avis-item">
                <p><strong>${nom}</strong> - ${"⭐".repeat(note)}</p>
                <p>${commentaire}</p>
                <hr>
            </div>
        `;
        alert("Avis ajouté visuellement sur la page !");
    });
});
