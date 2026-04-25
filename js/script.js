// --- حاسبة الـ IMC ---
function calculerIMC() {
    // شد القيم بـ IDs اللي كاينين فـ HTML الجديد
    const weight = document.getElementById('poids').value;
    const heightCm = document.getElementById('taille').value;
    const resultDiv = document.getElementById('affichage-resultat');

    if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100;
        const imc = (weight / (heightM * heightM)).toFixed(2);
        
        let message = "";
        let color = "";

        if (imc < 18.5) { message = "Poids insuffisant"; color = "#3498db"; }
        else if (imc < 25) { message = "Poids normal"; color = "#2ecc71"; }
        else if (imc < 30) { message = "Surpoids"; color = "#f1c40f"; }
        else { message = "Obésité"; color = "#e74c3c"; }

        // زواق النتيجة
        resultDiv.style.padding = "15px";
        resultDiv.style.borderRadius = "8px";
        resultDiv.style.marginTop = "20px";
        resultDiv.style.backgroundColor = color + "11"; // لون خفيف
        resultDiv.style.border = `1px solid ${color}`;
        resultDiv.style.color = color;
        
        resultDiv.innerHTML = `Ton IMC est : <strong>${imc}</strong> <br> <small>Catégorie : ${message}</small>`;
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "❌ Veuillez entrer des valeurs valides !";
    }
}

// --- الفورم ديال Contact ---
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