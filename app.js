let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {
        rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas == 1? 'tentativa' : 'tentativas';
        let mensagemAcerto = (`Parabéns, você acertou com ${tentativas} ${palavraTentativa}!`)
        exibirTextoNaTela('h1', mensagemAcerto);
        exibirTextoNaTela('p', 'Consegue acertar novamente? Jogue de novo!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{ 
            if(chute > numeroSecreto){
                exibirTextoNaTela('h1', `O número ${chute} é maior que o número secreto`);
            }else{
                exibirTextoNaTela('h1', `O número ${chute} é menor que o número secreto`);
            }
            tentativas++;
            limparCampo()
        }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length 
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
          }else{
            listaDeNumerosSorteados.push(numeroEscolhido)
            return numeroEscolhido;
          }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}