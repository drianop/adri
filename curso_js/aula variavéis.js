var nome = prompt('qual seu nome?'); // Exibe uma caixa de diálogo (prompt) pedindo ao usuário para digitar o nome, e armazena o valor na variável "nome"
var sobrenome = prompt('qual seu sobrenome?'); // Exibe outra caixa de diálogo pedindo ao usuário para digitar o sobrenome, e armazena o valor na variável "sobrenome"

console.log('olá ' + nome + ' ' + sobrenome); // Exibe no console do navegador uma mensagem de saudação com o nome e sobrenome fornecidos

document.write('<h1> Bem vindo ao projeto ' + nome + ' ' + sobrenome + '</h1>'); // Escreve no documento HTML uma mensagem de boas-vindas dentro de um elemento <h1>, usando o nome e sobrenome do usuário

document.write("<img src='https://cdn.nba.com/headshots/nba/latest/1040x760/947.png' alt='iverson' />"); // Adiciona uma imagem ao documento HTML, definindo o atributo "src" para o URL da imagem e "alt" como 'iverson'
