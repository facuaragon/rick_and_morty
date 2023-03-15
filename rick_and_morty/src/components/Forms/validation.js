
export const validation = (userData) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var numbers = /\d/;

    let errors = {};

    //username
    if(!userData.username) errors.username="Debe completar este Campo";
    else if(!regexEmail.test(userData.username)) errors.username= "El usuario debe ser un correo electrónico";
    else if(userData.username.length>35) errors.username= "El usuario no debe superar los 35 caracteres";

    //password
    if(!userData.password.match(numbers)) errors.password= "La constraseña debe tener al menos un numero";
    else if(userData.password.length<6 || userData.password.length>10) errors.password= "La contraseña debe tener entre 6 y 10 caracteres";
   
    return errors;
}

