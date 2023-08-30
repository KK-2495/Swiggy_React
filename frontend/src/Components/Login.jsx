import React, { useContext, useState } from 'react'
import "../Components/AllCss/Login.css";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';


const Login = () => {
    const router = useNavigate();
    
    const [userData, setUserData] = useState({ email: "", password: "" });

    const { dispatch,state } = useContext(AuthContext);
    console.log(state,"state from context into login component")


    const handleChange = (event) =>{
        setUserData({...userData,[event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(userData.email && userData.password){
            try {
                const response = await axios.post("http://localhost:8000/api/v1/login",userData);
                if(response.data.success){
                    dispatch({
                        type: "Login",
                        payload: response.data.user
                      })
                      localStorage.setItem("userToken", JSON.stringify(response.data.token));
                    toast.success(response.data.message);
                    router("/");
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }else{
            toast.error("Email and password required..!");
        }
    }
  return (
    <>
         <div class="main">
            <div class="login">
                <div>
                    <div>
                        <h3>Login</h3>
                        <p>or <strong>Create an account</strong></p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                            alt="" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name='email' placeholder='Enter Your email' onChange={handleChange} /> <br />
                        <input type="password" name='password' placeholder='Enter Your password' onChange={handleChange} /> <br />
                    </div>
                    <input type="submit" value="Log In" />
                </form>
                <div>
                    By clicking on Login, I accept the Terms & Conditions & Privacy Policy
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;