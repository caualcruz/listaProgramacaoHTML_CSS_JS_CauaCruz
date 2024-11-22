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

const buildInputText = (id = 'pessoaInput', type = 'text', placeholder = 'Fulano, 18', visibility = false) => {
    const newInput = document.createElement('input')
    newInput.type = type
    newInput.setAttribute('id', id)
    newInput.placeholder = placeholder
    newInput.disabled = visibility | false
    return newInput
}

const btnGerarPessoa = (id = 'gerarPessoa', type = 'submit', placeholder = 'Gerar Pessoa', visibility = false) => {
    const newBtn = document.createElement('input')
    newBtn.type = type
    newBtn.setAttribute('id', id)
    newBtn.value = placeholder
    newBtn.disabled = visibility | false
    return newBtn
}

const pessoaGerada = (pessoa) => {
    const info = document.createElement('div')
    info.setAttribute('id', 'infoPessoa')
    info.innerHTML = `
        <p><strong>Nome:</strong> ${pessoa.getNome()}</p>
        <p><strong>Idade:</strong> ${pessoa.getIdade()}</p>
    `
    mainDiv.appendChild(info)
}


window.onload = () => {
    const inputText = buildInputText()
    const btnPessoa = btnGerarPessoa()

    mainDiv.appendChild(inputText)
    mainDiv.appendChild(btnPessoa)

    btnPessoa.onclick = () => {
        const pessoaInfo = inputText.value.split(',')[0]
        const nome = pessoaInfo
        const idade = parseInt(pessoaInfo)[1]

        const novaPessoa = new Pessoa(nome, idade)

        pessoaGerada(novaPessoa)
    }
}


class StaticData{
    constructor(input, btn, data = []){
        this.input = input
        this.btn = btn
        this.data = data | []
    }
    setInput = (input) => (this.input = input)
    getInput = ()=>{return this.input}
    setBtn = (button) => (this.button = button)
    getBtn = ()=>{return this.button}
    setData = (data) => (this.data = data)
    getData = ()=>{return this.data}

}