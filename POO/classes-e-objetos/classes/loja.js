class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class Carrinho {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(produto) {
      this.itens.push(produto);
      console.log(`${produto.nome} caiu no seu carrinho`);
    }
  
    removerItem(nomeProduto) {
      this.itens = this.itens.filter(item => item.nome !== nomeProduto);
      console.log(`${nomeProduto} pegou fogo, ja era`);
    }
  
    calcularTotal() {
      let total = 0;
      for (let item of this.itens) {
        total += item.preco;
      }
      return total;
    }
  }
  
  class LojaOnline {
    constructor() {
      this.carrinho = new Carrinho();
    }
  
    adicionarProdutoNoCarrinho(produto) {
      this.carrinho.adicionarItem(produto);
    }
  
    removerProdutoDoCarrinho(nomeProduto) {
      this.carrinho.removerItem(nomeProduto);
    }
  
    mostrarTotal() {
      console.log(`Total: R$ ${this.carrinho.calcularTotal().toFixed(2)}`);
    }
  }

  export default LojaOnline
  export {Produto}