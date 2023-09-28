//Definindo a classe calculadora
class Calculadora {
    constructor() {
        //Inicializando o visor com o valor 0
        this.valor = '0'
    }

    //Método para a(dicionar um número no visor
    adicionarNumero(numero) {
        if (this.valor === '0') {
            //Se o valor atual for 0 vai substituir
            this.valor = numero
        } else {
            //Senão, adiciona o número no final do valor atual
            this.valor += numero
        }
        //Atualiza o visor
        this.atualizarVisor()
    }

     
    //Método para a(dicionar um número no visor
    adicionarOperacao(operacao) {
        if (
         this.valor.slice(-1) === '+' ||
         this.valor.slice(-1) === '-' ||
         this.valor.slice(-1) === '*' ||
         this.valor.slice(-1) === '/' 
        ) {
        //Se o último caractere do valor atual for uma operação, subtitui essa operação pela nova operação   
         this.valor = this.valor.slice(0, -1) + operacao
        } else {
        //Senão, adiciona a operação
         this.valor += operacao
        }
        //Atualiza o visor
        this.atualizarVisor()
     }

     limpar() {
        this.valor = '0'
        this.atualizarVisor()
     }

     resultado() {
        try{
            this.valor = eval(this.valor).toString()
        } catch(e) {
            this.valor = 'Erro'
        }
        this.atualizarVisor()
     }

     atualizarVisor() {
        document.getElementById('visor').value = this.valor
     }
     
}

let calculadora =  new Calculadora()