const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelector("nav ul a");

hamburger.addEventListener("click", function () {
    ul.classList.toggle("show");
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});

function ajouter() {
    const newItem = document.createElement("tr");
    const nameTd = document.createElement("td");
    const mailTd = document.createElement("td");
    const responseTd = document.createElement("td");

    nameTd.textContent = document.form.name.value;
    mailTd.textContent = document.form.mail.value;
    responseTd.textContent = document.form.reponse.value;

    nameTd.setAttribute("data-label", "Nom");
    mailTd.setAttribute("data-label", "Adresse mail");
    responseTd.setAttribute("data-label", "Réponse");

    newItem.append(nameTd, mailTd, responseTd);

    const table = document.querySelector("table tbody");
    table.appendChild(newItem);
}
