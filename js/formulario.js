
function validarFormulario() {
    var nombre = document.getElementById('Nombre').value;
    var apellido = document.getElementById('Apellido').value;
    var dni = document.getElementById('dni').value;
    var email = document.getElementById('email').value;

    if (nombre == '' || apellido == '' || dni == '' || email == '') {
        alert('Por favor complete todos los campos obligatorios.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingrese una dirección de correo electrónico válida.');
        return false;
    }

    return true;
}