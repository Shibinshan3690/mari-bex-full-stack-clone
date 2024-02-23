import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./Authaction"
import { getUserfromLocalStorage} from "../../Utils/Util"




const initialState={
      isLoading:false,
      isError: false,
      isRegisterSuccess:false,
      message:'',
      isLoginSuccess:false,
      user:getUserfromLocalStorage
     
  }
  
  export const authSlice = createSlice({
      name:"auth",
      initialState:initialState,
      reducers:{},
      extraReducers:(builder)=>{
          builder
          .addCase(register.pending,(state)=>{
              state.isLoading=true
          })
          .addCase(register.fulfilled,(state,action)=>{
              state.isLoading = false;
              state.isError=false;
              state.isRegisterSuccess=true;
              state.message = action.payload.msg
          })
          .addCase(register.rejected,(state,action)=>{
              state.isLoading=false;
              state.isError=true;
              state.isRegisterSuccess=false;
              state.message=''
          })
        //Login

        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError=false;
            state.isRegisterSuccess=false;
            state.isLoginSuccess=true;
            state.user=action.payload
            state.message = action.payload.msg
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isRegisterSuccess=false;
            state.isLoginSuccess=false;
            state.message=''
        })


      }

})

export default authSlice.reducer