// Script para a página principal
const conteudos = {
    desengasgo: {
        titulo: "Desengasgo",
        imagem: "quadrinhos/ManobraDesengasgo.jpg",
        alt: "Quadrinho com o passo a passo do desengasgo em bebês.",
        resumo: "Se o bebê não consegue tossir, chorar ou respirar, aja imediatamente: chame o socorro e comece as manobras ao mesmo tempo.",
        passos: [
            "Identifique o engasgo. Se o bebê tosse e respira com ruído, deixe-o tossir. Se ele não faz nenhum som, não consegue tossir ou respirar, ou está com os lábios arroxeados, a obstrução é total.",
            "Ligue para o SAMU (192) ou para os Bombeiros (193), no viva-voz. Se houver outra pessoa, peça que ligue enquanto você faz a manobra. Se estiver sozinho, comece a manobra e ligue no viva-voz.",
            "Coloque o bebê de bruços sobre o seu antebraço, com a cabeça apoiada na sua mão e mais baixa que o corpo. Não tampe a boca do bebê. Se preferir, apoie o seu antebraço na coxa.",
            "Dê cinco golpes firmes nas costas, entre as escápulas, com a base da palma da mão. Cuide para não machucar o bebê.",
            "Vire o bebê de barriga para cima, mantendo a cabeça mais baixa que o corpo. Faça cinco compressões no centro do peito, na linha entre os mamilos, com a base da palma da mão.",
            "Repita as cinco batidas nas costas e as cinco compressões no peito, alternando, até o bebê chorar, tossir ou voltar a respirar. Depois, procure atendimento médico para avaliação.",
            "Se o bebê ficar desacordado, deite-o de barriga para cima em uma superfície firme e inicie a reanimação, seguindo a orientação do atendente do 192 ou do 193."
        ]
    },
    coto: {
        titulo: "Coto umbilical",
        imagem: "quadrinhos/CotoUmbilical.jpg",
        alt: "Quadrinho com os cuidados com o coto umbilical.",
        resumo: "O coto umbilical costuma cair entre o 7º e o 15º dia de vida. Mantê-lo limpo e seco ajuda a evitar infecção.",
        passos: [
            "Lave as mãos com água e sabão, ou use álcool em gel, antes de tocar no coto.",
            "Faça a limpeza antes de cada troca de fralda e depois do banho.",
            "Abra a fralda e umedeça as duas pontas de uma haste flexível com álcool 70%.",
            "Passe a haste na base do coto, entre o coto e a pele, em movimentos circulares, até a haste sair limpa.",
            "Depois, passe a haste com álcool 70% no restante do coto.",
            "Deixe secar e dobre a fralda abaixo do umbigo, para o coto ficar ventilado.",
            "Não use faixas, gazes, curativos fechados, moedas ou outros objetos sobre o coto, e não puxe o coto para acelerar a queda.",
            "Procure o pediatra se houver vermelhidão, inchaço, secreção amarelada, mau cheiro, dor ao toque ou se o coto demorar para cair."
        ]
    }
};

const botao = document.getElementById("alternar");
const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo-quadrinho");
const resumo = document.getElementById("resumo");
const passos = document.getElementById("passos");
const rotuloA = document.getElementById("rotulo-a");
const rotuloB = document.getElementById("rotulo-b");

function mostrar(chave) {
    const c = conteudos[chave];
    imagem.src = c.imagem;
    imagem.alt = c.alt;
    titulo.textContent = c.titulo;
    resumo.textContent = c.resumo;
    passos.replaceChildren(...c.passos.map(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        return li;
    }));
    const coto = chave === "coto";
    botao.setAttribute("aria-checked", coto);
    botao.setAttribute("aria-label", coto ? "Mostrar desengasgo" : "Mostrar coto umbilical");
    rotuloA.classList.toggle("ativo", !coto);
    rotuloB.classList.toggle("ativo", coto);
}

botao.addEventListener("click", () => {
    mostrar(botao.getAttribute("aria-checked") === "true" ? "desengasgo" : "coto");
});
rotuloA.addEventListener("click", () => mostrar("desengasgo"));
rotuloB.addEventListener("click", () => mostrar("coto"));

mostrar("desengasgo");
new window.VLibras.Widget("https://vlibras.gov.br/app");