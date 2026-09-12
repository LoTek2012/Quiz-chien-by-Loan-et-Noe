function calculerRace() {
    const reponses = Array.from(document.querySelectorAll('input[type="radio"]:checked')).map(input => input.value || "Non");

    if (reponses.length < 7) {
        alert("Veuillez répondre à toutes les questions !");
        return;
    }

    const races = [
        {nom: "Golden Retriever", attributs: ["Oui", "Non", "Oui", "Oui", "ni l'un ni l'autre", "Oui", "Non"]},
        {nom: "Berger Australien", attributs: ["Oui", "Oui", "Oui", "Oui", "ni l'un ni l'autre", "Oui", "Inconnu"]},
        {nom: "Teckel", attributs: ["Oui", "Non", "Oui", "Non", "Froid", "Non", "Oui"]},
        {nom: "Husky", attributs: ["Oui", "Oui", "Non", "Non", "Chaud", "Non", "Oui"]},
        {nom: "Chihuahua", attributs: ["Non", "Non", "Non", "Non", "Froid", "Non", "Oui"]},
        {nom: "Malinois", attributs: ["Oui", "Oui", "Oui", "Oui", "ni l'un ni l'autre", "Oui", "Oui"]}
    ];

    const meilleureRace = races.reduce((best, race) => {
        const score = race.attributs.filter((attr, i) => attr === reponses[i]).length;
        return score > best.score ? { nom: race.nom, score } : best;
    }, { nom: "", score: -1 }).nom;

    document.getElementById("resultat").innerText = `Tu es un :\n${meilleureRace}`;
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

const imagesChien = {
    "Golden Retriever": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/330px-Golden_retriever_stehfoto.jpg",
    "Berger Australien": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mon_chien_est_parfait.png/250px-Mon_chien_est_parfait.png",
    "Teckel": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Std_Dachshund_600.jpg/330px-Std_Dachshund_600.jpg",
    "Husky": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Moscow_et_Owana_de_l%E2%80%99%C3%A9levage_Of_Kolyma_Wolves.jpg/250px-Moscow_et_Owana_de_l%E2%80%99%C3%A9levage_Of_Kolyma_Wolves.jpg",
    "Chihuahua": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/250px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg",
    "Malinois": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Malinois.snow.jpg/250px-Malinois.snow.jpg"
};

document.getElementById("imageChien").src = imagesChien[meilleureRace] || "https://example.com/images/default.jpg";


function fermerPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function refaireQuiz() {
    document.getElementById("quizForm").reset();
    fermerPopup();
}