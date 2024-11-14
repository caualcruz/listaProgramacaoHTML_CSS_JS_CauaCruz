class FormaGeometrica{
    constructor(nome){
        this.nome = nome
    }
    calculararea(){
        throw new Error("O método 'calcularArea' precisa ser implementado");
        
    }
}

class Quadrado extends FormaGeometrica{

    nome = ""
    ladoA = 0
    ladoB = 0

    constructor(nome, ladoA, ladoB){
        super(nome)
        this.ladoA = ladoA
        this.ladoB = ladoB
    }
}

class Programa{
    meuQuadrado = new Quadrado("Quadrado", 4, 4)
}
