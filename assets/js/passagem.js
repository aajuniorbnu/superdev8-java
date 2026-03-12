let reservas = 0;

const campoOrigem = document.getElementById("origem");
const campoDestino = document.getElementById("destino");
const campoData = document.getElementById("data-viagem");
const campoPassageiro = document.getElementById("passageiros");
const campoPrecoBase = document.getElementById("preco-base");

const tabelaReservas = document.getElementById("tabela-reservas");
const totaGeral = document.getElementById("total-geral");
const resultado = document.getElementById("resultado");

const botaoReservar = document.getElementById("reservar");
botaoReservar.addEventListener("click" , salvarReserva);

function salvarReserva(){
const origem = campoOrigem.value.trim();
const destino = campoDestino.value.trim();
const data =  campoData.value;
const passageiro = parseInt(campoPassageiro.value);
const precoBase = parseFloat(campoPrecoBase.value);
 
const classe = obterClasse();
const bagagem = obterBagagem();

if(origem ===""){
    alert("Iforne a origem de partida");
    return;
}
if(destino === ""){
    alert("Informe o destino da viagem");
    return;
}
if(data === ""){
    alert("Informe a data da viagem");
    return;
}
if(Number.isNaN(passageiro || passageiro <= 0)){
    alert("Informe a quantidade de passageiros");
return;
}
if(Number.isNaN(precoBase) || precoBase <=0){
    alert("Informe o preço base");
    return;
}
if(!classe){
    alert("Selecione a classe");
    return;
}
if(!bagagem){
    alert("Quantas bagagens irá transportar ? :");
    return;
}
function obterClasse() {
    const radios = document.getElementsByName("classe");
    for (let i = 0; i < radios.length; i = i +1) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

function obterBagagem() {
    const radios = document.getElementsByName("bagagem");
    for (let i = 0; i < radios.length; i = i +1) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

}
