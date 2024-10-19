const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Limpa os erros anteriores
    clearErrors();

    // Valida os campos
    let isValid = true;

    if (!checkInputEmail()) isValid = false;
    if (!checkInputPassword()) isValid = false;

    // Se todos os campos forem válidos, o formulário pode ser enviado
    if (isValid) {
        alert('Login realizado com sucesso!');
        // Aqui você pode enviar o formulário, por exemplo, usando this.submit();
    }
});

function clearErrors() {
    const inputBoxes = document.querySelectorAll('.input-box');
    inputBoxes.forEach(box => {
        const errorMessage = box.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.innerText = '';
        }
    });
}

function checkInputEmail() {
    const value = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validação de e-mail
    if (value === "" || !emailPattern.test(value)) {
        erroInput(email, "Digite um e-mail válido.");
        return false;
    }
    return true;
}

function checkInputPassword() {
    const value = password.value.trim();
    if (value === "" || value.length < 6) {
        erroInput(password, "A senha deve ter pelo menos 6 caracteres.");
        return false;
    }
    return true;
}

function erroInput(input, message) {
    const formItem = input.parentElement;
    let errorMessage = formItem.querySelector('.error-message');

    // Cria um span para a mensagem de erro, se não existir
    if (!errorMessage) {
        errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red'; // Cor da mensagem de erro
        errorMessage.style.fontSize = '0.8rem'; // Tamanho da fonte
        errorMessage.style.marginTop = '0.5rem'; // Espaçamento acima da mensagem
        formItem.appendChild(errorMessage);
    }

    errorMessage.innerText = message;
}
