import Pessoa from "./classes/pessoa.js";
import LojaOnline, { Produto } from "./classes/loja.js";
import ContaBancaria from "./classes/contaBan.js";  
import { Banco } from "./classes/contaBan.js"; 
import Carro from "./classes/carro.js";
import Filmeoteca from "./classes/filmeoteca.js";

console.log(" ")
console.log("________________")
console.log("Atividade Pessoa")
let pessoa = new Pessoa("Cauã Lindão", 18);
pessoa.falar();
console.log(pessoa.info());

console.log(" ")
console.log("________________")
console.log("Atividade Carro")
let dono = new Pessoa("gamesEduu", 10000);
let carro = new Carro(dono, "Fuscão Preto do gamesEduu", "Preto", 1000, "GamesEduu", 10, "Água", 5000, 0, 0);
console.log(carro.info());
carro.acelerar();
carro.acelerar();
carro.abastecer();
carro.freiar();

console.log(" ")
console.log("________________")
console.log("Atividade Loja")
let loja = new LojaOnline();
let produto1 = new Produto("Blusa do SENAI", 5000);
let produto2 = new Produto("Calça do SENAI", 1000);
loja.adicionarProdutoNoCarrinho(produto1);
loja.adicionarProdutoNoCarrinho(produto2);
loja.mostrarTotal();
loja.removerProdutoDoCarrinho("Blusa do SENAI");
loja.mostrarTotal();

console.log(" ")
console.log("________________")
console.log("Atividade Conta Bancaria")
let banco = new Banco();
let conta = new ContaBancaria("Cristiano Ronaldo", 10000000000, 1, "cr7fandocaualindao");
banco.criarConta(conta);
conta.verificarSaldo();
banco.realizarSaque(1, 7, "cr7fandocaualindao");
conta.verificarSaldo();
banco.realizarSaque(1, 7, "cr7fandocaualindao");
conta.verificarSaldo();

console.log(" ")
console.log("________________")
console.log("Atividade Filmeoteca")
let filme1 = new Filmeoteca("SENAI", "Cauã Lindão", 1945);
  let filme2 = new Filmeoteca("SENAI 2", "Cauã Lindão", 2024);
  
  console.log(filme1.foiLancadoNosUltimos5Anos() ? "O filme foi sim lançado nos ultimos 5 anos, ta novin ainda" : "O filme não foi lançado nos ultimos 5 anos, ta velhasso doido");
  console.log(filme2.foiLancadoNosUltimos5Anos() ? "O filme foi sim lançado nos ultimos 5 anos ta novin ainda" : "O filme não foi lançado nos ultimos 5 anos, ta velhasso doido");
  