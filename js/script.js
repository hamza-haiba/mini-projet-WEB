function calculateIMC() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const resultDiv = document.getElementById('result');

    if (weight > 0 && height > 0) {
        const imc = (weight / (height * height)).toFixed(2);
        
        let message = "";
        if (imc < 18.5) message = "Poids insuffisant";
        else if (imc < 25) message = "Poids normal";
        else if (imc < 30) message = "Surpoids";
        else message = "Obésité";

        resultDiv.innerHTML = `Ton IMC est : ${imc} <br> <span style="font-size: 1.1rem; color: #333;">Catégorie : ${message}</span>`;
    } else {
        resultDiv.innerHTML = "Veuillez entrer des valeurs valides !";
        resultDiv.style.color = "red";
    }
}
function validerFormulaire() {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMsg = document.getElementById('statusMsg');

    if (nom === "" || email === "" || message === "") {
        statusMsg.style.color = "#e74c3c";
        statusMsg.innerHTML = "❌ Veuillez remplir tous les champs !";
    } else if (!email.includes("@")) {
        statusMsg.style.color = "#e74c3c";
        statusMsg.innerHTML = "❌ L'adresse email n'est pas valide !";
    } else {
        statusMsg.style.color = "#2ecc71";
        statusMsg.innerHTML = "✅ Merci " + nom + ", votre message a été envoyé !";
        document.getElementById('contactForm').reset();
    }
}