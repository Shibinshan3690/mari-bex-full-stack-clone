import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import instagramLogoImage from "../Pics/Instagram_logo.svg.png";
import appstore from "../Pics/Google_Play_Store_badge_EN.svg.png";
import microsoft from  "../Pics/microsoft.png"
import facebook from "../Pics/facebook-f-logo-white-background-21.jpg"
import "../Login/Login.css"
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as yup from 'yup';
import { login } from '../../Redux/Auth/Authaction';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



let schema=yup.object().shape({
  email:yup.string()
  .email("Email should be valid").required("Email is required"),
  password:yup.string().required("Password is required"),


})

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const authState=useSelector(state=>state.auth)
    const {user,isError,isLoading, isLoginSuccess}=authState

    const formik=useFormik({
      initialValues:{
         email:"",
         password:''
      
      },
      validationSchema:schema,
      onSubmit:(values)=>{
      dispatch(login(values))
     
 }  
  })

useEffect(()=>{
    if(isLoginSuccess){
        navigate("/")
        toast.success("succeesfull registration")
    }else{
         toast.error("correct the email and password")
    }
},[navigate,isError,isLoading])

  return (
   <>
            <ToastContainer/>
            <div className='login-container'>
            <div className='box-1'>
            <div className='box-1-logo'>
            <img src={instagramLogoImage} alt="" className='instagram-logo' />
            </div>
            <form  onSubmit={formik.handleSubmit}> 
            <div className='input-box'>  
            <input type="text" placeholder='Phone number,username or email address' className='input' required
            autoComplete='off'    value={formik.values.email} onChange={formik.handleChange("email")}  />
             </div>
             <div className='input-box'>
             <input type="password" placeholder='password'  className='input' required
             autoComplete='off'  value={formik.values.password} onChange={formik.handleChange("password")}  />
             </div>
             <div className='login-button-box'>
             <button className='login-button'>Login</button>
             </div>
               </form>
                 <div className='lines-box'>
                    <div className='line-1'></div>
                    <div className='or-box'>OR</div>
                     <div className='line-1'></div>
                 </div>
                  <div className='fb-box'>
                    <span>
                      <img src={facebook} alt="#" className='fb-logo' />
                    </span>
                    <p className='fb-link'> Log in with Facebook</p>
                  </div>
                   <div className="forgooton-password-box">
                      <p className='forgotton-password-link'> Forgotten Your password</p>
                   </div>
        </div>
        <div className='box-2' onClick={()=>navigate("/registration")}>
            <p>Dont have an account? <span className='sign-up-span'>Sign up</span></p>
        </div>
        <div className='get-app-box'>
          <p>Get the app.</p>
        </div>
        <div className='app-store-google-play-box'>
        <img src={appstore} alt=""  className='app-store-image'/>
        <img src={microsoft} alt=""  className='microsoft-image'/>
        
        </div>
        
     </div>
    
   
   
   </>
  )
}

export default Login
