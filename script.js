
const botao = document.getElementById("openLetter");
const envelope = document.getElementById("envelope");

botao.addEventListener("click", function () {

    envelope.classList.toggle("aberta");

    if (envelope.classList.contains("aberta")) {
        botao.textContent = "Fechar cartinha 💗";
    } else {
        botao.textContent = "Abra sua cartinha 💌";
    }

});

function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.classList.add("coracao-flutuante");
    coracao.innerHTML = "♥";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (3 + Math.random() * 4) + "s";
    coracao.style.fontSize = (12 + Math.random() * 20) + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 7000);
}

setInterval(criarCoracao, 700);

const surpresaBtn = document.getElementById("surpresaBtn");
const mensagemSecreta = document.getElementById("mensagemSecreta");

surpresaBtn.addEventListener("click", function () {
    mensagemSecreta.classList.toggle("visivel");

    if (mensagemSecreta.classList.contains("visivel")) {
        surpresaBtn.textContent = "Você descobriu! 💗";
    } else {
        surpresaBtn.textContent = "Descobrir surpresa 💝";
    }
});
