


function sortear() {

    let de = parseInt(document.getElementById('de').value); // parseInt FORÇA o retorno de um INTEIRO
    let ate = parseInt(document.getElementById('ate').value);
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número".');
        return;
      }

      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número".');
        return;
      }


    if (verifcarQtdDiferenca(de, ate, quantidade)) {
        return;
    }

    let sorteados = [];
    let numeroSorteado;

    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = numeroAleatorio(de, ate);
        while (sorteados.includes(numeroSorteado)) {
            numeroSorteado = numeroAleatorio(de, ate);
        }
        sorteados.push(numeroSorteado);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function verificar(min, max) {
    if (min >= max){
    alert ('Reveja se inseriu os dados corretamente!');
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    return;
    }
}