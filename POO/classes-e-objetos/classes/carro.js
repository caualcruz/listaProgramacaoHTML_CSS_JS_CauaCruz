class Carro {
    constructor(dono, modelo, cor, ano, marca, consumo, tipoCombustivel, capacidadeCombustivel, kmRodados, velocidade) {
      this.dono = dono;
      this.modelo = modelo;
      this.cor = cor;
      this.ano = ano;
      this.marca = marca;
      this.consumo = consumo;
      this.tipoCombustivel = tipoCombustivel;
      this.capacidadeCombustivel = capacidadeCombustivel;
      this.kmRodados = kmRodados;
      this.velocidade = velocidade;
    }
  
    info() {
      return `Dono: ${this.dono.info()}\nModelo: ${this.modelo}\nCor: ${this.cor}\nAno: ${this.ano}\nMarca: ${this.marca}\nConsumo: ${this.consumo} km/l\nTipo de Combustível: ${this.tipoCombustivel}\nCapacidade do Tanque: ${this.capacidadeCombustivel} litros\nKm Rodados: ${this.kmRodados}\nVelocidade: ${this.velocidade} km/h`;
    }
  
    acelerar() {
      if (this.capacidadeCombustivel > 0) {
        this.velocidade += 10;
        this.capacidadeCombustivel -= 0.5; 
        console.log(`Metendo Velo... Rapidez: ${this.velocidade} km/h`);
      } else {
        console.log("Não tem água no tanque, pobre! Vai abastecer doido");
      }
    }
  
    freiar() {
      if (this.velocidade > 0) {
        this.velocidade -= 10;
        console.log(`Parando o possante... Rapidez: ${this.velocidade} km/h`);
        this.freiar(); 
      }
    }
  
    abastecer() {
      this.capacidadeCombustivel = 50;
      console.log("Acabou a água no tanque, vai abastecer seu pobre");
    }
  }

  export default Carro