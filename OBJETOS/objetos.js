export class Pessoa {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    getNome() {
        return this.#nome
    }
    setNome(nome) {
        this.#nome = nome
    }
    getIdade() {
        return this.#idade
    }
    setIdade(idade) {
        this.#idade = idade
    }
}

const mainDiv = document.getElementById('main')
const buildInputText = ( id = 'pessoaInput',type = 'text', placeholder = 'Fulano, 18', visibility = false) => {
    newInput = document.createElement('input')
    newInput.type = type
    newInput.setAtribute('id',id)
    newInput.placeholder = placeholder
    newInput.disabled = visibility | false
    return newInput
}
const btnGerarPessoa = ( id = 'gerarPessoa',type = 'submit', placeholder = 'Fulano, 18', visibility = false) => {
    newBtn = document.createElement('input')
    newBtn.type = type
    newBtn.setAtribute('id',id)
    newBtn.placeholder = placeholder
    newBtn.disabled = visibility | false
    return newInput
}

window.onload = ()=>{
     mainDiv.appendChild(buildInputText())
    }

