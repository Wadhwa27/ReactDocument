import {createSlice} from "@reduxjs/toolkit";
import { getActiveUser } from "../../util/LocalStorage";

console.log("inusreSliff" , getActiveUser())
const userSlice = createSlice({
    name : "user",
    initialState : {
        activeUser : getActiveUser()
    },
    reducers : {
        setActiveUser (state, action){
            state.activeUser = action.payload
        },
        logout (state){
            state.activeUser= null 
        }

    }
})
export default userSlice.reducer;
export const {setActiveUser , logout} = userSlice.actions 