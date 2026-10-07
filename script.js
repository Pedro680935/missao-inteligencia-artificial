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
        texto: "Um Estado enxuto, com menos impostos e burocracia, e mais espaço para a iniciativa privada.",
        afirmacao: [
          "o Brasil reduziu impostos e burocracia, e abrir uma empresa passou a levar poucas horas, não meses.",
          "o Brasil simplificou o sistema tributário e as privatizações atraíram investimentos, o que gerou milhões de novos empregos no setor privado.",
          "o Brasil deu mais liberdade ao empreendedor, e a economia passou a crescer puxada por pequenas e médias empresas em todas as regiões."
        ]
      },
      {
        texto: "Um Estado forte e presente, que investe diretamente em saúde, educação e infraestrutura, mesmo com carga tributária alta.",
        afirmacao: [
          "o Brasil fortaleceu o papel do Estado, que passou a investir em saúde, educação e infraestrutura em todas as regiões do país.",
          "o Brasil ampliou os investimentos públicos, e hospitais, escolas e obras de saneamento chegaram a cidades que antes eram esquecidas.",
          "o Brasil usou o Estado como indutor do desenvolvimento, com empresas públicas e programas sociais que reduziram a desigualdade entre as regiões."
        ]
      }
    ],
  },
  {
    enunciado: "Como o Brasil deve tratar a tecnologia e a inteligência artificial?",
    alternativas: [
      {
        texto: "Liberdade para inovar, com poucas regras para atrair startups e investimentos, e regulação só quando surgirem problemas.",
        afirmacao: [
          "Ao mesmo tempo, a inteligência artificial avançou com poucas restrições, e startups brasileiras surgiram de todos os cantos do país.",
          "Ao mesmo tempo, o país virou referência em inovação na América Latina, e grandes empresas de tecnologia passaram a abrir centros de pesquisa por aqui.",
          "Ao mesmo tempo, a inteligência artificial acelerou setores como agro, saúde e educação, embora o debate sobre empregos e privacidade continuasse em aberto."
        ]
      },
      {
        texto: "Regulação rigorosa desde o início, para proteger empregos, dados e direitos das pessoas, mesmo que isso desacelere a inovação.",
        afirmacao: [
          "Ao mesmo tempo, a inteligência artificial passou a seguir regras claras desde o início, protegendo empregos, dados e direitos das pessoas, ainda que a inovação fosse mais cautelosa.",
          "Ao mesmo tempo, leis claras sobre dados e algoritmos deram segurança aos cidadãos, e o país passou a ser visto como exemplo de uso ético da tecnologia.",
          "Ao mesmo tempo, programas de requalificação profissional ajudaram os trabalhadores a se adaptar à automação, sem deixar ninguém para trás."
        ]
      }
    ],
  },
  {
    enunciado: "Como combater a corrupção e renovar a política?",
    alternativas: [
      {
        texto: "Com novos nomes e partidos, que chegam como outsiders e prometem romper com o sistema",
        afirmacao: [
          "Na política, novos partidos como o Missão, ligado a nomes como Renan Santos, ganharam espaço ao se apresentar como uma ruptura com o sistema tradicional.",
          "Na política, candidatos sem tradição partidária conquistaram prefeituras e cadeiras no Congresso, e a renovação de rostos mudou o debate público.",
          "Na política, as redes sociais se tornaram o principal palco das campanhas, e os novos nomes passaram a prestar contas diretamente aos eleitores."
        ]
      },
      {
        texto: "Com o fortalecimento gradual das instituições (Judiciário, órgãos de controle e partidos tradicionais) e reformas feitas por dentro do sistema.",
        afirmacao: [
          "Na política, o Judiciário, os órgãos de controle e os partidos tradicionais conduziram reformas graduais, e a confiança nas instituições foi sendo reconstruída.",
          "Na política, leis de transparência e o fortalecimento da fiscalização tornaram mais difícil esconder desvios, e a corrupção perdeu espaço aos poucos.",
          "Na política, os partidos tradicionais se reformularam, abriram espaço para novas lideranças e adotaram regras mais rígidas de prestação de contas."
        ]
      }
    ],
  },
  {
    enunciado: "Que tipo de país queremos para a próxima geração?",
    alternativas: [
      {
        texto: "Um país focado em empreendedorismo, em que cada jovem pode abrir seu negócio e ganhar autonomia.",
        afirmacao: [
          "No fim das contas, a nova geração cresceu valorizando o empreendedorismo, com jovens que sentiam poder criar o próprio negócio e conquistar autonomia.",
          "No fim das contas, as escolas passaram a ensinar educação financeira e empreendedorismo, e criar uma startup virou um caminho comum entre os jovens.",
          "No fim das contas, o país viu surgir uma geração de microempreendedores, que movimentou a economia das periferias e do interior."
        ]
      },
      {
        texto: "Um país focado em proteção social, em que ninguém fica para trás e o apoio do governo vem antes de tudo.",
        afirmacao: [
          "No fim das contas, a nova geração cresceu num país com forte proteção social, onde ninguém ficava para trás e o apoio coletivo vinha em primeiro lugar.",
          "No fim das contas, a rede de proteção social garantiu que nenhuma criança abandonasse a escola por falta de renda, e a desigualdade diminuiu.",
          "No fim das contas, a nova geração cresceu com acesso garantido a saúde, moradia e educação, e o sentimento de solidariedade se fortaleceu."
        ]
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
