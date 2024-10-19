/*1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustível que está no seu carro;
4 - gasto médio de combustível do carro por km;
5 - distância em km da viagem;*/


function calcularCustoViagem(tipoCombustivel, distancia, litros, etanolPreco, gasolinaPreco){
    /*Cálculo do gasto médio (km/l) eu fiz de uma forma que  não precise do exibir o gastoMedio na tela do user. pq o calculo 
    já pode ser feito com distancia/litros*/
   const gastoMedio = distancia / litros;

   let custoViagem;  // aqui é if e else básico pra referênciar o que user selecionou lá no select
if (tipoCombustivel === 'etanol') {
   custoViagem = (distancia / gastoMedio) * etanolPreco;
} else {
   custoViagem = (distancia / gastoMedio) * gasolinaPreco;
}     return custoViagem
}



document.getElementById('calcular').addEventListener('click', function() /*aqui o getElement vai chamar o botão lá no html que tem id"calcular" 
e vai executar alguma função quando ele sofrer o 'click'*/ {
    const etanolPreco = parseFloat(document.getElementById('etanol-preco').value);/*nessa parte tem os parseFloat muda o tipo da variavél pra Float(mola do caramba achar isso)
     e o getElement chama o id 'etanol-preco'. o value permite manipular o valor que ele vai receber. mesma coisa pra os outros*/
    const gasolinaPreco = parseFloat(document.getElementById('gasolina-preco').value);

    const tipoCombustivel = document.getElementById('combustivel').value;

    const distancia = parseFloat(document.getElementById('distancia').value);

    const litros = parseFloat(document.getElementById('litros').value);

    const custoViagem = calcularCustoViagem(tipoCombustivel, distancia, litros, etanolPreco, gasolinaPreco);

    

   
   
    
  
// o getElement tá chamando o h2 do html e tá adicionando um texto + valor do gasto total
    document.getElementById('resultado').innerText = `Custo da viagem: R$ ${custoViagem.toFixed(2)}`; 
});