const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
// Correção dos seletores de classe que estavam sem o ponto (.)
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
// Novo seletor para a caixa da imagem
const caixaImagem = document.querySelector(".caixa-imagem");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    imagem: "http://googleusercontent.com/image_collection/image_retrieval/4217226799240132275_0", // Imagem 1
    alternativas: [
        {
            texto: "Isso é assustador!",
            afirmacao: "Ao encontrar o chat hiper-realista, você pensou: 'Isso é assustador! A tecnologia avança rápido demais e me sinto inseguro(a).'"
        },
        {
            texto: "Isso é maravilhoso!",
            afirmacao: "Ao encontrar o chat hiper-realista, você pensou: 'Isso é maravilhoso! Mal posso esperar para usar essa tecnologia a meu favor e aprender mais sobre ela.'"
        }
    ]
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    imagem: "http://googleusercontent.com/image_collection/image_retrieval/10122355838024122393_0", // Imagem 2
    alternativas: [
        {
      texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
      afirmacao: "Para o trabalho, você decidiu usar uma ferramenta de busca com IA para otimizar seu aprendizado e encontrar as melhores fontes, garantindo um melhor entendimento."
        },
        {
      texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao: "Para o trabalho, você preferiu fazê-lo de forma tradicional, buscando informações manualmente e usando seus conhecimentos, valorizando a construção própria do raciocínio."
        }
    ]
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    imagem: "http://googleusercontent.com/image_collection/image_retrieval/15562046268355950942_0", // Imagem 3
    alternativas: [
      {
      texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      afirmacao: "No debate, você defendeu que a IA é uma ferramenta que, apesar dos desafios, criará novas oportunidades e que devemos focar em nos adaptar e melhorar nossas habilidades."
      },
      {
      texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
      afirmacao: "No debate, você levantou a preocupação com o impacto social da IA, defendendo que é crucial proteger os trabalhadores e pensar em políticas de transição de carreira para os afetados."
      }
    ]
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    imagem: "http://googleusercontent.com/image_collection/image_retrieval/12718024781133436783_0", // Imagem 4
    alternativas: [
      {
      texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      afirmacao: "Para a imagem, você decidiu usar o Paint, expressando sua visão com ferramentas mais tradicionais, valorizando o processo manual."
      },
      {
      texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao:"Você usou um gerador de imagem de IA, experimentando a criatividade assistida por máquinas para expressar sua ideia de forma inovadora."
      }
      ]
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    imagem: "http://googleusercontent.com/image_collection/image_retrieval/1075139673873149874_0", // Imagem 5
    alternativas: [
      {
      texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      afirmacao: "No trabalho de biologia, você manteve a decisão do colega de usar o texto do chat na íntegra, argumentando que a escrita de comandos também é uma forma válida de contribuição."
      },
      {
      texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao:"No trabalho de biologia, você insistiu na revisão e humanização do trabalho, lembrando que a IA é uma ferramenta de apoio, mas o toque pessoal e a correção humana são indispensáveis."
      }
    ]
  },
];


let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta(){
    if (atual >= perguntas.length){
     mostraResultado();
     return;
    }
      perguntaAtual = perguntas[atual];
      caixaPerguntas.textContent = perguntaAtual.enunciado;
      
      // Lógica para adicionar a imagem
      caixaImagem.textContent = ""; // Limpa a caixa de imagem anterior
      const imagemElemento = document.createElement("img");
      imagemElemento.src = perguntaAtual.imagem;
      imagemElemento.alt = "Imagem ilustrativa da pergunta.";
      // Adiciona uma classe para estilização (necessário no style.css)
      imagemElemento.classList.add("imagem-pergunta"); 
      caixaImagem.appendChild(imagemElemento);

      caixaAlternativas.textContent = "";
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
  // Corrigido: concatena a afirmação à história final
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " "; // Adiciona a afirmação da resposta e um espaço
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  // Oculta a imagem e as alternativas ao exibir o resultado final
  caixaImagem.textContent = "";
  caixaPerguntas.textContent = "Em 2049, suas escolhas levaram a este futuro:";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();