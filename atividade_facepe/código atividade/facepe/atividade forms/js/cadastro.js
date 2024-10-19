const form = document.querySelector('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Limpa os erros anteriores
    clearErrors();

    // Valida cada campo
    let isValid = true;

    if (!checkInputFirstname()) isValid = false;
    if (!checkInputLastname()) isValid = false;
    if (!checkInputEmail()) isValid = false;
    if (!checkInputNumber()) isValid = false;
    if (!checkInputPassword()) isValid = false;
    if (!checkConfirmPassword()) isValid = false;

    // Se todos os campos forem válidos, o formulário pode ser enviado
    if (isValid) {
        alert('Formulário enviado com sucesso!');
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

function checkInputFirstname() {
    const value = firstname.value.trim();
    if (value === "" || value.length < 2) {
        erroInput(firstname, "Digite seu primeiro nome (mínimo 2 caracteres).");
        return false;
    }
    return true;
}

function checkInputLastname() {
    const value = lastname.value.trim();
    if (value === "" || value.length < 2) {
        erroInput(lastname, "Digite seu último nome (mínimo 2 caracteres).");
        return false;
    }
    return true;
}

function checkInputEmail() {
    const value = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "" || !emailPattern.test(value)) {
        erroInput(email, "Digite um email válido.");
        return false;
    }
    return true;
}

function checkInputNumber() {
    const value = number.value.trim();
    const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (value === "" || !phonePattern.test(value)) {
        erroInput(number, "Digite um número de celular válido no formato (xx) xxxx-xxxx.");
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

function checkConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        erroInput(confirmPassword, "As senhas não coincidem.");
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
        errorMessage.style.color = 'red'; // Ajuste a cor conforme preferir
        errorMessage.style.fontSize = '0.8rem'; // Ajusta o tamanho da fonte, se necessário
        errorMessage.style.marginTop = '0.5rem'; // Adiciona margem para espaçamento
        formItem.appendChild(errorMessage);
    }

    errorMessage.innerText = message;
}
