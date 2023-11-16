var lista = ['Js', 'Java', 'Jaca']
// índices    0      1       2

function exibirValorDaLista() {
    const listaDeValores = ['Js', 'Java', 'JacaScript'];
    const indiceAleatorio = Math.floor(Math.random() * listaDeValores.length);
    const valorAleatorio = listaDeValores[indiceAleatorio];
  
    // Exibir o valor aleatório na tela
    const elementoHTML = document.getElementById('valorAleatorio');
    elementoHTML.textContent = valorAleatorio; 
}