class Filmeoteca {
    constructor(titulo, diretor, anoLancamento) {
      this.titulo = titulo;
      this.diretor = diretor;
      this.anoLancamento = anoLancamento;
    }
  
    foiLancadoNosUltimos5Anos() {
      let anoAtual = new Date().getFullYear();
      return (anoAtual - this.anoLancamento) <= 5;
    }
  }
  
  export default Filmeoteca