
import style from "./Forms.module.css"
import { useState } from "react";
import {validation} from "./validation.js"


const Forms = ({login}) =>{
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '', 
    });

    const [errors,setErrors] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value });
        
        setErrors(validation({...userData, [property]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
        
    }

    

    return (
        <div className={style.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className={style.userBox}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
                {errors.username && <p className={style.warning}>{errors.username}</p>}
            </div>
            <div className={style.userBox}>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
                {errors.password && <p className={style.warning} >{errors.password}</p>}
            </div>
            <button className={style.ingresar}>Ingresar</button>
        </form>
    </div>
    )
}

export default Forms;