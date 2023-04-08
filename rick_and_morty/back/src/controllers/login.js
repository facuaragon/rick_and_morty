const {User} = require("../DB_connection")

const login = async (req, res) => {
    try {
        const {email, password}=req.query;
        if(email&&password){
            const userByEmail=await User.findAll({
                where:{
                    email
                }
            })
            if (!userByEmail) return res.status(404).send("Usuario no encontrado")
            else {
                const userByEmailAndPassword=await User.findAll({
                    where:{
                        email,
                        password
                    }
                })
                if(!userByEmailAndPassword) return res.status(403).send("Contraseña Incorrecta")
                else{
                   return  {access: true};
                }
            } 
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports= login