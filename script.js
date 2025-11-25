//cria um objeto para buscar hora do dispositivo
var hora=new Date().toLocaleTimeString('pt-BR')

//criará a função do botão Entrada
function calcular(){
var txtVei=document.getElementById('txtv')

var Vei=(txtVei.value)

var res=document.getElementById('res')

res.innerText=(`O veículo da placa ${Vei} entrou às ${hora} `)

}

//criará a função do botão Saída
function calcsaida(){
    var txtVei=document.getElementById('txtv')

var Vei=(txtVei.value)

var res1=document.getElementById('res1')
var pago=document.getElementById('pagamento')
res1.innerHTML=(`O veículo da placa ${Vei} saiu às ${hora}<br>
    Pagamento realizado no ${pago} `)
    


}

