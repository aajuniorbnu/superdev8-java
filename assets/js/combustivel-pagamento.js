let abastecimento = [];
let litros = 0;

const campoLitros = document.getElementById("litros");
const campoValor = document.getElementById("valor");

const tabelaAbastecimento = document.getElementById("tabela-abastecimentos");

const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", salvarAbastecimento);

function salvarAbastecimento() {

    const litros = parseFloat(campoLitros.value);
    const valorLitro = parseFloat(campoValor.value);
    const combustivel = obterCombustivel();
    const pagamento = obterPagamento();

    if (!combustivel) {
        alert("Escolha tipo de combustível");
        return;
    }
    if (Number.isNaN(litros) || litros <= 0) {
        alert("Informe a quantidade de litros");
        return;
    }
    if (Number.isNaN(valorLitro) || valorLitro <= 0) {
        alert("Informe o valor do litro");
        return;

    }
    if (!pagamento) {
        alert("Selecione forma de pagamento");
        return;
    }
   const subtotal = litros * valorLitro;

    let desconto = 0;

    if(pagamento === "dinheiro"){
        desconto = subtotal * 0.10;
    }

    if(pagamento === "pix"){
        desconto = subtotal * 0.08;
    }

    if(pagamento === "cartao"){
        desconto = subtotal * 0.05;
    }

    const total = subtotal - desconto;

    codigo.innerHTML = `Total a pagar: R$ ${total.toFixed(2)}`;


    const abastecimento = {
        combustivel,
        litros,
        valorLitro,
        pagamento,
        subtotal
    };

    adicionarAbastecimentoTabela(abastecimento);
    limparCampos();



function obterCombustivel(){

    const radios = document.getElementsByName("combustivel");

    for(let i = 0; i < radios.length; i++){

        if(radios[i].checked){
            return radios[i].value;
        }

    }

    return null;
}
function obterPagamento(){

    const radios = document.getElementsByName("pagamento");

    for(let i = 0; i < radios.length; i++){

        if(radios[i].checked){
            return radios[i].value;
        }

    }

    return null;
}
function limparCampos(){

    campoLitros.value = "";
    campoValor.value = "";

    const radiosCombustivel = document.getElementsByName("combustivel");
    for(let i = 0; i < radiosCombustivel.length; i++){
        radiosCombustivel[i].checked = false;
    }

    const radiosPagamento = document.getElementsByName("pagamento");
    for(let i = 0; i < radiosPagamento.length; i++){
        radiosPagamento[i].checked = false;
    }

}
function adicionarAbastecimentoTabela(abastecimento){

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${abastecimento.combustivel}</td>
        <td>${abastecimento.litros}</td>
        <td>${abastecimento.valorLitro}</td>
        <td>${abastecimento.pagamento}</td>
        <td>${abastecimento.subtotal}</td>
    `;

    tabelaAbastecimento.appendChild(linha);

}

}





