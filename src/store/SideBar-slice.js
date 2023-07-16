import { createSlice } from "@reduxjs/toolkit";




const SideBarSlice = createSlice({
    name: "SideBar",
    initialState: {
        sideBarState: false,

    },
    reducers: {
        showSideBar(state){
            state.sideBarState = true;

        },
        hideSideBar(state){
            state.sideBarState = false;
            
        },

    }

})

export const sideBarActions = SideBarSlice.actions;
export default SideBarSlice;


