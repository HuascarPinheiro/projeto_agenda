const form = document.getElementById('form-contatos');

const nomeContato = [];
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
    maskPhone();
});

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputPhoneContato = document.getElementById('telefone-contato');

    if(nomeContato.includes(inputNomeContato.value)){
        alert(`Contato ${inputNomeContato.value} já foi inserido`)
    } else {
        nomeContato.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputPhoneContato.value}</td>`;
        linha += '<tr>';
        linhas += linha;

    }


    inputNomeContato.value = '';
    inputPhoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function maskPhone(){
    $('#telefone-contato').mask('(00) 00000-0000');
}