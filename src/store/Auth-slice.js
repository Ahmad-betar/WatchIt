import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState : {
        loginState: true,
        loginShown: false,
        idToken: null,
        

    },
    reducers: {
        setLogin(state){
            state.loginState = true;

        },
        setLogout(state){
            state.loginState = false;
            state.idToken = null;
        },
        setIdToken(state, action){
            state.idToken = action.payload;
        },
        showLogin(state ){
            state.loginShown = true;
        },
        hideLogin(state){
            state.loginShown = false;  
        },


    }
    

})
export const authActions = authSlice.actions;
export default authSlice;
