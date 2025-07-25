import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/Slice/topicsSlice";
import userReducer from "../features/Slice/userSlice";
export const store = configureStore({
    reducer: {
        topics : topicReducer,
        user : userReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
