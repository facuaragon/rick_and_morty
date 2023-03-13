
export const validation = (userData, errors, setErrors) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var numbers = /[0-9]/g

    //username
    if(!userData.username) setErrors ({...errors, username:"Debe completar este Campo"});
    else if(userData.username.length>35) setErrors({...errors, username: "El usuario no puede superar los 35 caracteres"});
    else if(!regexEmail.test(userData.username)) setErrors({...errors, username: "El usuario debe ser un correo electrónico"})
    else setErrors({...errors, username:''});
    //password
    if(numbers.test(userData.password)) setErrors({...errors, password: "La constraseña debe tener al menos un numero"});
    else if(userData.password.length>5 && userData.password.length<11) setErrors ({...errors, password: "La contraseña debe tener entre 6 y 10 caracteres"});
    else setErrors({...errors, password: ""});

}

