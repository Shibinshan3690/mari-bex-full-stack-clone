import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "./AuthService";



 export const register=createAsyncThunk('auth/signup',
 async(userData,thunkAPI)=>{
     try{
          return AuthService.register(userData)
     }catch (error){
          return thunkAPI.rejectWithValue(error)
     }
 })

 
 export const login=createAsyncThunk('auth/signin',
 async(userData,thunkAPI)=>{
     try{
          return AuthService.login(userData)
     }catch (error){
          return thunkAPI.rejectWithValue(error)
     }
 })