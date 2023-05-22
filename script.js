mostrarSenha = function() {
     let password = document.getElementById('password');
     let texto = document.querySelector('#mostrarSenha');
    
    if(password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
        texto.setAttribute('value', 'Ocutar a senha');
    } 
    else {
         password.setAttribute('type', 'password');
         texto.setAttribute('value', 'Mostrar senha')
     }
}