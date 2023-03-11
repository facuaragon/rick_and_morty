
export const validation = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var numbers = /[0-9]/g
    const errors = {};

    if(!inputs.username) errors.username = "Debe completar este campo";
    if(!regexEmail.test(inputs.username)) errors.username = "El usuario debe ser un correo electrónico";
    if(inputs.username.length > 35) errors.username = "El usuario no puede tener más de 35 caracteres";
    if(!numbers.test(inputs.password)) errors.password = "La contraseña debe tener al menos un número";
    if(!(inputs.password.length>5 && inputs.password.length<11)) errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres";

    return errors;

}

