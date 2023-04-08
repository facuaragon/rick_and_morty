const {User} = require("../DB_connection")

const postUser = async (req, res) => {
    try {
        const{email,password}=req.body
        if(email && password){
            const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            var numbers = /\d/;
            // email
            if(!regexEmail.test(email)) throw new Error("El usuario debe ser un correo electrónico") 
            if(email.length>35) throw new Error("El usuario no debe superar los 35 caracteres") 
            //password
            if(!password.match(numbers)) throw new Error("La constraseña debe tener al menos un numero")
            if(password.length<6 ||password.length>10) throw new Error("La contraseña debe tener entre 6 y 10 caracteres")          

            const user = await User.findOrCreate({
                where:{
                    email,
                    password
                }
            })
            res.status(200).json(user)
        }   
        else{
            return res.status(400).send("Faltan datos")
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;


