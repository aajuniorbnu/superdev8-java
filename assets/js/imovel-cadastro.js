let codigo = 0;


const botaoSalvar = document.getElementById('botao-salvar');
botaoSalvar.addEventListener("click", salvar);
const campoProprietario = document.getElementById('proprietario');
const campoLocalidade = document.getElementById('localidade');
const campoValor = document.getElementById('valor');
const campoQuantidadeM2 = document.getElementById('quantidade-m2');
const campoConstrucao = document.getElementById('construcao');


 function salvar(){

    const proprietario = campoProprietario.value.trim();
    const localidade = campoLocalidade.value.trim();
    const valor = parseFloat(campoValor.value);
    const quantidadeM2 = parseFloat(campoQuantidadeM2.value);
    const construcao = campoConstrucao.value; 

    if (proprietario.length < 3) {
        alert("O nome do proprietário deve conter pelo menos 3 caracteres.");
        return;
    }

    if (localidade.length < 3) {
        alert("A localidade deve conter pelo menos 3 caracteres.");
        return;
    }

    if (Number.isNaN(valor) || valor <= 0) {
        alert("Digite um valor válido.");
        return;
    }

    if (Number.isNaN(quantidadeM2) || quantidadeM2 <= 0) {
        alert("Digite uma quantidade de m² válida.");
        return;
    }

    if (construcao === "") {
        alert("Selecione o tipo de construção.");
        return;
    }

    codigo = codigo + 1;

    adicionarNaTabela(codigo, proprietario, localidade, valor, quantidadeM2, construcao);
}


function adicionarNaTabela(codigo, proprietario, localidade, valor, quantidadeM2, construcao){

    const corpoTabela = document.getElementById("corpo-tabela");

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${codigo}</td>
        <td>${proprietario}</td>
        <td>${localidade}</td>
        <td>${valor}</td>
        <td>${quantidadeM2}</td>
        <td>${construcao}</td>
    `;

    corpoTabela.appendChild(linha);
}