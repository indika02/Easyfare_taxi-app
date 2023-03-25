import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:'Auth',
    initialState:{isLogged:false,userDetails:''},
    reducers:{
        login(state,action){
            state.isLogged=true;
            state.userDetails=action.payload;
        },
        logout(state){
            state.isLogged=false;
            state.userDetails={useMode:'',Email:'',Password:''};
        }
    }
})

export const AuthActions = AuthSlice.actions;

export default AuthSlice;