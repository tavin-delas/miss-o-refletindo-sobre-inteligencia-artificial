const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
// CORREÇÃO: Os seletores precisam do ponto '.'
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const caixaImagem = document.querySelector(".caixa-imagem"); 

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    imagem: "./img/A-tecnologia01.png", // Imagem 1
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "Ao ver a nova tecnologia, você sentiu medo e desconfiança. "
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Ao ver a nova tecnologia, você sentiu empolgação e curiosidade. "
      }
    ]
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    imagem: "./img/A-tecnologia02.png", // Imagem 2
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao: "Você buscou o apoio da IA para otimizar sua pesquisa e compreensão. "
      },
      {
        texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao: "Você preferiu confiar em fontes tradicionais e seus próprios conhecimentos. "
      }
    ]
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    imagem: "./img/A-tecnologia03.png", // Imagem 3
    alternativas: [
      {
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "Você defendeu o potencial da IA para criar novos empregos e aprimorar talentos humanos. "
      },
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
        afirmacao: "Você expressou preocupação com a perda de empregos e a necessidade de proteger os trabalhadores. "
      }
    ]
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    imagem: "./img/A-tecnologia04.png", // Imagem 4
    alternativas: [
      {
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: "Você optou por uma ferramenta de design tradicional para expressar sua arte. "
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: "Você usou uma IA geradora de imagens, explorando novas formas de criatividade. "
      }
    ]
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    imagem: "./img/A-tecnologia05.png", // Imagem 5
    alternativas: [
      {
        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: "Você aceitou o texto gerado pela IA, considerando a entrada de comandos como a principal contribuição. "
      },
      {
        texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao: "Você revisou e personalizou o texto da IA, valorizando a correção e a visão humana. "
      }
    ]
  },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    // 🖼️ Lógica para INJETAR a tag <img> na caixa
    // Limpa a caixa de imagem anterior
    caixaImagem.innerHTML = ''; 
    
    // Cria e configura a tag <img>
    const imagemElemento = document.createElement("img");
    imagemElemento.src = perguntaAtual.imagem;
    imagemElemento.alt = `Imagem para a pergunta ${atual + 1}`;
    imagemElemento.classList.add("imagem-pergunta");
    
    // Adiciona a imagem ao contêiner
    caixaImagem.appendChild(imagemElemento);

    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
  // CORREÇÃO: usa a propriedade 'afirmacao' e concatena à historiaFinal
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao;
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  // Esconde ou limpa a imagem no resultado final
  caixaImagem.innerHTML = ''; 
}

mostraPergunta();