function ValidaCampos() {
    
    var expreRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ][A-zÁ-ü]{2,})+$");
    var expreRegTel = new RegExp("^[+][0-9]{2}[ ]{1}[(][0-9]{2}[)][ ]{1}[0-9]{4,5}[-][0-9]{4}$");
    var expreRegEmail = new RegExp("^[A-z0-9]+[@](gmail|outlook|estudante)(\\.com|\\.sesisenai\\.br)");
    
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('fone').value;
    let email = document.getElementById('email').value;



    if (!expreRegNome.test(nome)) {
        alert("Favor preencha com um nome válido!");
        document.getElementById('nome').focus();
        return false;
    } else if (!expreRegTel.test(telefone)) {
        alert("Favor preencha com um telefone válido!");
        document.getElementById('fone').focus();
        return false;
    } else if (!expreRegEmail.test(email)) {
        alert("Favor preencha com um email válido!");
        document.getElementById('email').focus();
        return false;
    }

    
    console.log(nome + telefone + email);   
    return false;
}