const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
  {
    enunciado: "Qual deve ser o papel do Estado na economia?",
    alternativas: [
        {
            texto : "Um Estado enxuto, com menos impostos e burocracia, e mais espaço para a iniciativa privada.",
            afirmacao: "o Brasil reduziu impostos e burocracia, e abrir uma empresa passou a levar poucas horas, não meses."
        },
        {
            texto: "Um Estado forte e presente, que investe diretamente em saúde, educação e infraestrutura, mesmo com carga tributária alta.",
            afirmacao: "o Brasil fortaleceu o papel do Estado, que passou a investir em saúde, educação e infraestrutura em todas as regiões do país."
        }
    ],
  },
  {
    enunciado: "Como o Brasil deve tratar a tecnologia e a inteligência artificial?",
    alternativas: [
        {
            texto: "Liberdade para inovar, com poucas regras para atrair startups e investimentos, e regulação só quando surgirem problemas.",
            afirmacao: "Ao mesmo tempo, a inteligência artificial avançou com poucas restrições, e startups brasileiras surgiram de todos os cantos do país."
        },
        {
            texto: "Regulação rigorosa desde o início, para proteger empregos, dados e direitos das pessoas, mesmo que isso desacelere a inovação.",
            afirmacao: "Ao mesmo tempo, a inteligência artificial passou a seguir regras claras desde o início, protegendo empregos, dados e direitos das pessoas, ainda que a inovação fosse mais cautelosa."
        }
    ],
  },
   {
    enunciado: "Como combater a corrupção e renovar a política?",
    alternativas: [
        {
            texto: "Com novos nomes e partidos, que chegam como outsiders e prometem romper com o sistema",
            afirmacao: "Na política, novos partidos como o Missão, ligado a nomes como Renan Santos, ganharam espaço ao se apresentar como uma ruptura com o sistema tradicional."
        },
        {
            texto: "Com o fortalecimento gradual das instituições (Judiciário, órgãos de controle e partidos tradicionais) e reformas feitas por dentro do sistema.",
            afirmacao: "Na política, o Judiciário, os órgãos de controle e os partidos tradicionais conduziram reformas graduais, e a confiança nas instituições foi sendo reconstruída."
        }
    ],
  },
   {
    enunciado: "Que tipo de país queremos para a próxima geração?",
    alternativas: [
        {
            texto: "Um país focado em empreendedorismo, em que cada jovem pode abrir seu negócio e ganhar autonomia.",
            afirmacao: "No fim das contas, a nova geração cresceu valorizando o empreendedorismo, com jovens que sentiam poder criar o próprio negócio e conquistar autonomia."
        },
        {
            texto: "Um país focado em proteção social, em que ninguém fica para trás e o apoio do governo vem antes de tudo.",
            afirmacao: "No fim das contas, a nova geração cresceu num país com forte proteção social, onde ninguém ficava para trás e o apoio coletivo vinha em primeiro lugar."
        }
    ],
  },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
