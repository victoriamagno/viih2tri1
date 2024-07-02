const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como a IA pode te ajudar?"
        alternativa: [
            {
                texto: "a IA pode identificar padrões suspeitos de transações",
                afirmacao: "isso pode te ajudar no trabalho. "
            }
        ]
    },
    {
        enunciado: "qual a diferença entre inteligência artificial fraca e forte?",
        alternativa: [
            {
                texto: "a IA fraca é especializada em tarefas específicas,enquanto isso,a forte busca reproduzir a inteligência humana de forma geral.",
                afirmacao: "Então a fraca é usa mais no dia a dia ."
            },
        ]
    },
    {
        enunciado: "quais são as implicações da IA para o futuro do trabalho e do emprego?",
        alternativa: [
            {
                texto: "aumento do desemprego, à escalada das desigualdades sociais e à necessidade de realocação profissional.",
                afirmacao: "os empregos que hoje existem, mais pra frente poderam acabar."
            },
        ]
    },
    {
        enunciado: "quais são os principais desafios éticos da IA?",
        alternativa: [
            {
                texto: "a responsabilidade pelo conteúdo gerado.",
                afirmacao: "usada de forma errada,pode prejudicar as pessoas."
            },
        ]
    },
    {
        enunciado: "como a IA pode ser usada para melhorar a segurança cibernética? ",
        alternativa: [
            {
                texto: "Algoritmos de IA podem analisar grandes volumes de dados em tempo real.",
                afirmacao: "você consegue fazer os trabalhos mais rápido, sem ocupar muito seu tempo."
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
