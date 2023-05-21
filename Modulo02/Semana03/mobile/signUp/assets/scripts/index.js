let formSignUp = document.getElementById('formSignUp')
formSignUp.addEventListener('submit', logIn);

let inputSenha = document.getElementById('inputSenha');
let inputConfirmaSenha = document.getElementById('inputConfirmaSenha');

function logIn(event) {
    event.preventDefault();

    let empresa = document.getElementById('inputEmpresa').value;
    let cnpj = document.getElementById('inputCnpj').value;
    let responsavel = document.getElementById('inputResponsavel').value;
    let email = document.getElementById('inputEmail').value;
    let telefone = document.getElementById('inputTelefone').value;
    let senha = document.getElementById('inputSenha').value;
    let confirmaSenha = document.getElementById('inputConfirmaSenha').value;

    if (confirmaSenha !== senha) {
        inputSenha.style.borderColor = "var(--cor-borda-input-error)";
        inputConfirmaSenha.style.borderColor = "var(--cor-borda-input-error)";
        event.preventDefault();
        return;
    }
    
    inputSenha.style.borderColor = "var(--cor-borda-input)";
    inputConfirmaSenha.style.borderColor = "var(--cor-borda-input)";

    console.log(`Empresa: ${empresa}`);
    console.log(`CNPJ: ${cnpj}`);
    console.log(`Responsável: ${responsavel}`);
    console.log(`E-mail: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Senha: ${senha}`);
}