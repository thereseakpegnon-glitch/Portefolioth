const form = document.querySelector(".contact-form");

if (form) {
    const nom = document.querySelector("#nom");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (nom.value.trim() === "") {
            alert("Veuillez saisir votre nom.");
            return;
        }

        if (email.value.trim() === "") {
            alert("Veuillez saisir votre adresse e-mail.");
            return;
        }

        const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValide.test(email.value.trim())) {
            alert("Veuillez saisir une adresse e-mail valide.");
            return;
        }

        if (message.value.trim() === "") {
            alert("Veuillez saisir votre message.");
            return;
        }

        alert("Votre message a bien été validé.");
    });
}


// Bouton retour en haut

const scrollTop = document.querySelector("#scrollTop");

if (scrollTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            scrollTop.style.display = "block";
        } else {
            scrollTop.style.display = "none";
        }

    });

    scrollTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}