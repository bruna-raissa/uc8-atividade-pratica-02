var numero=123
var unidade=numero % 10
var centena=Math.trunc(numero/100)
var dezena=Math.trunc(numero%100/10)
var numeroInvertido=unidade*100+dezena*10+centena
console.log(numeroInvertido)