class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Qual foi doido, meu nome é ${this.nome} e eu tenho incríveis ${this.idade} anos de XP.`);
  }

  info() {
    return `${this.nome}, ${this.idade} anos de idade`;
  }
}

export default Pessoa;
