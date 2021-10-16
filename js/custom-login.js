$(document).ready(function() {

    function validacao(elemento) {
        if (elemento.val() == '') {
            elemento.addClass('invalido');
            return false;
        } else {
            elemento.removeClass('invalido');
        }
    }

    $('#cadastroEmail').on('blur', function() {
        validacao($(this));
    })
    $('#cadastroSenha').on('blur', function() {
        validacao($(this));
    })

    $('#enviar').dblclick(function(e) {
        e.preventDefault();
        const emailCadastrado = $('#cadastroEmail');
        const senhaCadastrada = $('#cadastroSenha');
        const NomeUsuario = $('#nome').val();

        if (emailCadastrado.hasClass('invalido') || senhaCadastrada.hasClass('invalido') || emailCadastrado.val() == '' || senhaCadastrada.val() == '') {
            alert("Verifique os campos obrigatórios");
            return false;
        } else {
            $('.container-cadastro').addClass('visually-hidden');
            $('.container-login').removeClass('visually-hidden');
            $('form').prepend('<h3>Olá ' + NomeUsuario + '</h3')

            console.log(emailCadastrado);
            console.log(senhaCadastrada);

            $('#entrar').dblclick(function() {
                let email = $('#email').val();
                let senha = $('#senha').val();
                if (email == '' || senha == '' || email != emailCadastrado.val() || senha != senhaCadastrada.val()) {
                    $('#email').addClass('invalido');
                    $('#senha').addClass('invalido');
                    return false;
                } else if (email == emailCadastrado.val() && senha == senhaCadastrada.val()) {
                    window.location.href = './index.html';
                    return true;
                }
            });
        }
    })



});