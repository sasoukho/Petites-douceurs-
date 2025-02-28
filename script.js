document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript chargé.");

    /** ✅ MENU BURGER **/
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            console.log("Menu burger ouvert :", navLinks.classList.contains("active"));
        });
    } else {
        console.error("Erreur : Élément du menu introuvable.");
    }

    /** ✅ SLIDER **/
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (slides.length > 0) {
            slides.forEach(slide => slide.style.display = "none");
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].style.display = "block";
            setTimeout(showSlides, 4000);
        }
    }

    showSlides();

    /** ✅ GESTION DES ONGLETS **/
    function showTab(tabId, event = null) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = "none";
        });

        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active-tab');
        });

        const tab = document.getElementById(tabId);
        if (tab) {
            tab.style.display = "block";
        }

        if (event) {
            event.currentTarget.classList.add('active-tab');
        }
    }

    // Afficher la section par défaut
    showTab('classique');

    /** ✅ FORMULAIRE AVIS **/
    const avisForm = document.getElementById("avisForm");
    const avisContainer = document.getElementById("avisContainer");

    if (avisForm && avisContainer) {
        console.log("Formulaire d'avis détecté.");

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

        avisForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nom = document.getElementById("nom").value.trim();
            const noteElement = document.querySelector('input[name="note"]:checked');
            const note = noteElement ? noteElement.value : null;
            const commentaire = document.getElementById("commentaire").value.trim();

            if (!nom || !note || !commentaire) {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            const nouvelAvis = { nom, note, commentaire };
            avisList.unshift(nouvelAvis);
            localStorage.setItem("avis", JSON.stringify(avisList));

            afficherAvis();
            avisForm.reset();
            console.log("Nouvel avis ajouté :", nouvelAvis);
        });
    } else {
        console.warn("Formulaire d'avis non détecté sur cette page.");
    }
});
