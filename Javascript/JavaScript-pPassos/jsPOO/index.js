import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Bianca", 45784512525)
const contaCorrente1 = new ContaCorrente(1001, cliente1)
const cliente2 = new Cliente("Lucas", 23057712525 )
const contaCorrente2 = new ContaCorrente(1002, cliente2)

console.log(ContaCorrente.numeroDeContas)

console.log(contaCorrente1)
console.log(contaCorrente2)


//objeto

//const cliente1 = new Cliente()
//const contaCorrente1 = new ContaCorrente()
//


//cliente1.nome = "Bianca"
//cliente1.cpf = 45784512525



//contaCorrente1.agencia = 1001
//contaCorrente1.cliente = cliente1
//contaCorrente1.depositar(500)



//cliente2.nome = "Lucas"
//cliente2.cpf = 23057712525



 
//contaCorrente2.agencia = 1002
//contaCorrente2.cliente = cliente2

 

//console.log(valorDepositado)
//const valorSacado = contaCorrente1.sacar(500)
//console.log(valorSacado)
// console.log(contaCorrente1)
// contaCorrente1.transferir(300, contaCorrente2)
// console.log(contaCorrente2)
// console.log(contaCorrente1._saldo)