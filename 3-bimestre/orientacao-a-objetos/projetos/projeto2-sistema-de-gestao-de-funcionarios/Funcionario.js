class Funcionario{
    #salario
    static quantidade = 0

    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario

        Funcionario.quantidade++
    }

    get salario(){
        return this.#salario
    }
    
    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }
    
    static quantidadeFuncionarios(){
        return Funcionario.quantidade
    }
    static quantidade(){
        return this.quantidade
    }
    
    static criarFuncionario(nome, cargo, salario){
        return new Funcionario(this.nome, this.cargo, this.salario)
    }

    set salario(novoSalario){
        if (novoSalario >= 0 ){
            this.#salario = novoSalario
        }
    }
}

module.exports = Funcionario