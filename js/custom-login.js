$('#entrar').click(function() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if (email == "lucas_sotero@gmail.com" && senha == "123456789") {
        window.location.href = './index.html';
        return false;
    } else {
        alert("Email ou senha inválidos");
        return false;
    }
});