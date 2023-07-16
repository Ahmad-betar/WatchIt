import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBar-slice";
import authSlice from "./Auth-slice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        sidebar: SideBarSlice.reducer,
        
    }

})

export default store;