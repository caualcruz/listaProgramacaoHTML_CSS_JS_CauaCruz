const generatePerson = ()=>{
    const alfabeto = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]

    let firstName = "";

    for (let i = 0; i < 5; i++) {       
        if (i == 0)
            firstName = alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase()
         else
         firstName += alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase()
    }

    let lastName = "";

    for (let i = 0; i < 5; i++) {       
        if (i == 0)
            lastName = alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase()
         else
         lastName += alfabeto[Math.floor(Math.random() * alfabeto.length)].toUpperCase()
    }
    return {nome: firstName, sobrenome: lastName}
}

const vetor = ["Teste de A","Teste de B"]

const [valorA, valorB] = ["Teste de A","Teste de B"]

const pessoa = generatePerson()

const {nome, sobrenome} = generatePerson()

const Pessoa = {
    nome:nome,
    sobrenome:sobrenome 
}

//Spread operator

//Sintaxe

const lazeres = ['Video-Game', 'Cantar', 'Treinar']
const novosLazeres = ['Ler', 'Desenhar']

const mergedLazeres = [...lazeres, novosLazeres]
console.log(mergedLazeres)

const credenciais = {
    login:'admin',
    senha:123123
}

const user = {...Pessoa, ...credenciais}

function maiorValor(...params){
    let maior = 0
    for (const element of params) {
        if (element >= maior) {
            maior = element
        }
    }
    return maior
}

console.log(maiorValor(1,2,3,4,5,6,7,8,9,10))