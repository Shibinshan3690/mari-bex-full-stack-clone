import React, { useEffect } from 'react'
import "../Registration/Registration.css"
import instagramLogoImage  from'../Pics/Instagram_logo.svg.png'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as yup from 'yup';
import {useFormik} from 'formik'
import { register } from '../../Redux/Auth/Authaction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  //validation 

  let schema=yup.object().shape({
     email:yup.string()
     .email("Email should be valid").required("Email is required"),
     password:yup.string().required("Password is required"),
     name:yup.string().required("Name is required")

  })

const Registration = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const authState=useSelector(state=>state.auth)
    const { isRegisterSuccess,message}=authState

           
 const formik=useFormik({
     initialValues:{
        email:"",
        password:'',
        name:''
     },
     validationSchema:schema,
     onSubmit:(values)=>{
     dispatch(register(values))
     
     }
 })
 useEffect(()=>{
        if( isRegisterSuccess){
            toast.success("registration sucessful")
            navigate("/login")
    
        }
 },[navigate, isRegisterSuccess])


    
  return (
      <>
      <div className='login-container'>

      <div className='box-1'>
      <ToastContainer />
      <div className='box-1-logo'>
              <img src={instagramLogoImage} alt="" className='instagram-logo' />
            </div>
         
               <div className='text'>
                  <h6>Sign up to see photos and videos from your friends.</h6>
               </div>
            <div className='login-button-box'>
                <button className='login-button'>Log in with facebook</button>
               </div>
               <div className='lines-box'>
                    <div className='line-1'></div>
                    <div className='or-box'>OR</div>
                     <div className='line-1'></div>
                 </div>
                 <form onSubmit={formik.handleSubmit}>
                 <div className='input-box'>
                 <input type="text" placeholder='Mobile number or email address' className='input' required autoComplete='off' 
                 value={formik.values.email} onChange={formik.handleChange("email")}  />
             </div>
             {/* <div className='input-box'>
                 <input type="text" placeholder='Full Name' className='input'  required autoComplete='off' 
                 value={formik.values.name} onChange={formik.handleChange("name")}  /> 
             </div> */}
             <div className='input-box'>
                 <input type="text" placeholder='Username' className='input'  required autoComplete='off' 
                 value={formik.values.name} onChange={formik.handleChange("name")}  />
             </div>
             <div className='input-box'>
                 <input type="password" placeholder='password' className='input' 
                  required autoComplete='off' 
                  value={formik.values.password} onChange={formik.handleChange("password")}  />
             </div>
             <div className='paragraph-reg'>
                   <p className='text-p'>
                   People who use our service may have uploaded your contact information to Instagram. Learn more
                   By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                   </p>
                   <div className='login-button-box'>
                <button className='login-button' type='submit' >Sign Up</button>
               </div>
             </div>
             </form>
        </div>
        </div>

      </>
  )
}

export default Registration
