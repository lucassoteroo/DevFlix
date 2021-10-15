$(document).ready(function() {

    $('#enviar').dblclick(function() {
        const emailCadastrado = $('#cadastroEmail').val();
        const senhaCadastrada = $('#cadastroSenha').val();

        $('.container-cadastro').addClass('visually-hidden');
        $('.container-login').removeClass('visually-hidden');

        $('#entrar').click(function() {
            let email = $('#email').val();
            let senha = $('#senha').val();
            if (email == emailCadastrado && senha == senhaCadastrada) {
                window.location.href = './index.html';
                return false;
            } else {
                alert("Email ou senha inválidos");
                return false;
            }
        });
    })


});