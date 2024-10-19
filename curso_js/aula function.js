var area = document.getElementById('area'); // Declaração de variável que seleciona o elemento com o id "area" no HTML


function entrar() {  // Declaração da função "entrar", que será chamada quando o botão no HTML for clicado

    var pergunta = prompt("digite nome"); // Exibe uma caixa de diálogo (prompt) para o usuário digitar o nome



    if (pergunta === '' || pergunta === null) {  // Verifica se a variável "pergunta" está vazia ou se o usuário clicou em "Cancelar"
          alert("nome invalido"); // Se a condição for verdadeira, exibe um alerta indicando que o nome é inválido

        area.innerHTML = "clique no botão para acessar..."; // Atualiza o conteúdo da área para a mensagem padrão

    } else { // Caso contrário, se a condição for falsa, executa o bloco de código abaixo

        area.innerHTML = "Bem vindo " + pergunta + " "; // Atualiza o conteúdo da área com a mensagem de boas-vindas e o nome digitado pelo usuário

        let botaosair = document.createElement("button"); // Cria um novo elemento de botão

        botaosair.innerHTML = "sair da conta"; // Define o texto do botão como "sair da conta"

        botaosair.onclick = sair; // Define a função "sair" para ser executada quando o botão for clicado

        area.appendChild(botaosair); // Adiciona o botão criado como um filho do elemento "area"
    }
}

function sair() { // Declaração da função "sair"
    alert('até mais!'); // Exibe um alerta com a mensagem "até mais!"
    area.innerHTML = "você saiu!"; // Atualiza o conteúdo da área com a mensagem "você saiu!"
}

function mediaAluno(nota1, nota2) { // Declaração da função "mediaAluno" que recebe duas notas como parâmetros
    var media = (nota1 + nota2) / 2; // Calcula a média das duas notas e armazena na variável "media"
    
    if (media >= 7) { // Verifica se a média é maior ou igual a 7
        console.log("aluno aprovado com a média: " + media); // Exibe no console a mensagem de aprovação e a média do aluno
    } else if (media < 7) { // Caso a média seja menor que 7
        console.log("aluno reprovado com a média: " + media); // Exibe no console a mensagem de reprovação e a média do aluno
    }
}

function aluno(nome, curso) { // Declaração da função "aluno" que recebe o nome do aluno e o curso como parâmetros
    var mensagem = "seja bem vindo " + nome + " ao curso de " + curso; // Concatena o nome e o curso em uma mensagem de boas-vindas
    console.log(mensagem); // Exibe a mensagem de boas-vindas no console
}
