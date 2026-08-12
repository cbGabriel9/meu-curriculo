/* =========================================================
   CURRÍCULO ONLINE - JAVASCRIPT
   Gabriel Ceron Bianchi - Programação 4

   Funcionalidades:
   1. Botão que exibe uma mensagem de boas-vindas com alert()
   2. Botão que mostra ou esconde uma seção
   3. Formulário que escreve uma saudação no topo da página
   4. Contador de visitas usando localStorage
   5. Gráfico de habilidades desenhado no canvas
   ========================================================= */


/* ---------------------------------------------------------
   1. MENSAGEM DE BOAS-VINDAS COM alert()
   --------------------------------------------------------- */
document.getElementById("btnBoasVindas").addEventListener("click", function () {
    alert("Olá! Obrigado por visitar meu currículo.");
});


/* ---------------------------------------------------------
   2. MOSTRAR OU ESCONDER A SEÇÃO DE DETALHES
   A classe "escondido" tem display:none no CSS.
   Aqui eu adiciono ou removo essa classe a cada clique.
   --------------------------------------------------------- */
var botaoDetalhes = document.getElementById("btnDetalhes");
var secaoDetalhes = document.getElementById("detalhes");

botaoDetalhes.addEventListener("click", function () {

    // toggle() tira a classe se ela existir, e coloca se não existir
    secaoDetalhes.classList.toggle("escondido");

    // Troca o texto do botão de acordo com o estado da seção
    if (secaoDetalhes.classList.contains("escondido")) {
        botaoDetalhes.innerText = "Mostrar mais sobre mim";
    } else {
        botaoDetalhes.innerText = "Esconder";
    }
});


/* ---------------------------------------------------------
   3. FORMULÁRIO: PEGA O NOME DIGITADO E MOSTRA NO TOPO
   --------------------------------------------------------- */
var formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (evento) {

    // Evita que a página recarregue ao enviar o formulário
    evento.preventDefault();

    // Pega o que foi digitado nos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    // Escreve a saudação personalizada no cabeçalho
    document.getElementById("saudacao").innerText = "Olá, " + nome + "! Seja bem-vindo(a).";

    // Escreve a mensagem de confirmação abaixo do formulário
    document.getElementById("retorno").innerText =
        "Obrigado, " + nome + "! Vou responder no e-mail " + email + ".";

    // Limpa os campos
    formulario.reset();
});


/* ---------------------------------------------------------
   4. CONTADOR DE VISITAS COM localStorage
   O localStorage guarda o valor no navegador mesmo depois
   de fechar a página.
   --------------------------------------------------------- */
var visitas = localStorage.getItem("visitas");

// Se for a primeira visita, o valor ainda não existe
if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);
document.getElementById("contador").innerText = visitas;


/* ---------------------------------------------------------
   5. GRÁFICO DE HABILIDADES NO CANVAS
   Desenha um gráfico de barras simples com as porcentagens.
   --------------------------------------------------------- */
var canvas = document.getElementById("grafico");
var ctx = canvas.getContext("2d");

// Nome de cada habilidade e o nível dela (de 0 a 100)
var habilidades = ["Python", "React", "SQL", "Docker", "PHP"];
var niveis = [90, 80, 80, 70, 65];

var larguraBarra = 40;   // largura de cada barra
var espaco = 25;         // espaço entre as barras
var baseY = 180;         // altura onde as barras começam

// Desenha a linha da base do gráfico
ctx.strokeStyle = "#2b3a55";
ctx.beginPath();
ctx.moveTo(20, baseY);
ctx.lineTo(340, baseY);
ctx.stroke();

// Percorre cada habilidade e desenha uma barra
for (var i = 0; i < habilidades.length; i++) {

    var x = 35 + i * (larguraBarra + espaco);
    var altura = niveis[i] * 1.5;   // multiplico para a barra ficar maior

    // Barra colorida
    ctx.fillStyle = "#22d3ee";
    ctx.fillRect(x, baseY - altura, larguraBarra, altura);

    // Porcentagem acima da barra
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(niveis[i] + "%", x + larguraBarra / 2, baseY - altura - 8);

    // Nome da habilidade abaixo da barra
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(habilidades[i], x + larguraBarra / 2, baseY + 18);
}
