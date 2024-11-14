class ContaBancaria {
    constructor(titular, saldo, numeroConta, senha) {
      this.titular = titular;
      this.saldo = saldo;
      this.numeroConta = numeroConta;
      this.senha = senha;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado`);
    }
  
    sacar(valor, senhaInformada) {
      if (senhaInformada !== this.senha) {
        console.log("Senha errada, burrão");
        return;
      }
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado`);
      } else {
        console.log("Saldo insuficiente, igual você seu pobre");
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  class Banco {
    constructor() {
      this.contas = [];
    }
  
    criarConta(conta) {
      this.contas.push(conta);
      console.log(`Conta criada para o elemento ${conta.titular}`);
    }
  
    realizarSaque(numeroConta, valor, senha) {
      let conta = this.contas.find(conta => conta.numeroConta === numeroConta);
      if (conta) {
        conta.sacar(valor, senha);
      } else {
        console.log("Conta não encontrada, troxa");
      }
    }
  }

  export default ContaBancaria;

// Se você quiser exportar o Banco de forma nomeada, faça isso:
export { Banco };