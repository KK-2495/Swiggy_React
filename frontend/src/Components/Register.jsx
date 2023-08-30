import React from 'react'
import "../Components/AllCss/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ name: "", email:"", password:"", confirmPassword:"" });
    console.log(userData,"userdata");
    const handleChange = (event) =>{
        setUserData({ ...userData,[event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/register", userData );
                    if(response.data.success){
                        setUserData({ name: '', email: "", password: "", confirmPassword: "" })
                        router('/login');
                        toast.success(response.data.message);
                      }
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            }else{
                toast.error("Password and confirm Password does not match");
            }
        }else{
            toast.error("All fields are mandatory.");
        }
    }

  return (
    <>
    <div class="main">
    <div onsubmit="register(event)" class="login">
        <form onSubmit={handleSubmit}>
        <div>
            <div>
                <h3>Signup</h3>
                <p>or <strong>login to your account</strong></p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
            </div>    
        </div>
        <div>
            <p>Phone number</p>
            <input id="userPhNum" type="text" maxlength="10" />
        </div>
        <div>
            <input id="userName" type="text" name='name' onChange={handleChange} placeholder="Name" />
        </div>
        <div>
            <input id="userEmail" type="email" name='email' onChange={handleChange} placeholder="Email" />
        </div>
        <div>
            <input id="userPassword" type="password" name='password' onChange={handleChange} placeholder="Enter Password" />
        </div>
        <div>
            <input id="userConfirmPassword" type="password" name='confirmPassword' onChange={handleChange} placeholder="Confirm your Password" />
        </div>
        <input type="submit" value="Register" />
        <div>
            By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </div>
    </form>
    </div>
</div>
</>
  )
}

export default Register;