import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0 
    agencia 
    _cliente

    //#saldo = 0; // para deixa privado adiciona-se # e atribui 0 para saldo incical de conta, saldo podera ser visto com a operacao depositar
    _saldo = 0; // como nao foi aceito ainda o _ representa o termo de privado, atualmente nem um metodo de JS 'e privado
    //operacoes emcapsulamento dentro de um metodo
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente

    }
    constructor(agencia , cliente){
        this.agencia = agencia
        this._cliente = cliente
        ContaCorrente.numeroDeContas +=1
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor //devolver o valor solicidado 
        }
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }
        this._saldo += valor
        return valor;
            //console.log(this.#saldo)
    }
    transferir(valor, conta){ //obj como parametro
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
    
}