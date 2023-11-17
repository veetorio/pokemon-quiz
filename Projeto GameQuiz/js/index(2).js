let shuffle = (MaxPergunta) => Math.ceil(Math.random() * MaxPergunta);//embaralhador shuffle
let respostas_perguntas = {
    'Em que série Ash Ketchum conhece Goh ?' : 'jornadas pokemon',
    'Quantos Pókemons existem na indigo league ? (contando com o Mewtwo)':'151',
    'Qual ep Ash Ketchum conhece Misty?Qual ep Ash Ketchum conhece Misty ?':'ep 1 (indigo league)',
    'Em que ep Ash Ketchum conhece Brock?':'ep 5 indigo league',
    'Em que ep ash vira Mestre pokemon':'ep 38 (jornadas supremas)',
}

let contagemVida = 3;

const btn = document.querySelector('button');
let contador = document.querySelector('span');
var paragrafo = document.querySelector('p');
let resposta = document.querySelector('#resposta')
const listarPerguntas = Object.keys(respostas_perguntas);

let indice = shuffle(listarPerguntas.length)
console.log(indice)

contador.textContent = contagemVida;

function alterQuestion(){
    paragrafo.textContent = listarPerguntas[indice];
    contador.textContent = contagemVida;
}

btn.addEventListener('click',() => {
    paragrafo.textContent = listarPerguntas[indice]
    if(contagemVida != 0){
        if(resposta.value === listarPerguntas[indice]){
            console.log('ola')
        }else{
            
        }
    }else{
        console.log('perdeu as vidas')
        contagemVida --;
        alterQuestion();
    }
})