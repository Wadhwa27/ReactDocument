import {createSlice , type PayloadAction} from "@reduxjs/toolkit";
import { getActiveUser } from "../../util/LocalStorage";
import courseData  from  "../../course/courseData.json";
interface Topic {
  id: string
  title: string
  description: string
  code: string
  conclusion: string
  
}

interface TopicState {
    Topics  : Topic[],
    userProgress : Record <string , boolean>
    selectedTopicId : string  | null
}

const activeUser = getActiveUser();
const PROGRESS_KEY =  activeUser? `progress_${activeUser.email}` : 'progress_guest'


const getUserProgress = () : Record <string , boolean> =>{
const stored = localStorage.getItem('PROGRESS_KEY')
return stored ? JSON.parse(stored) : {}
}
const initialState : TopicState = {
  Topics : courseData,
  selectedTopicId:null,
  userProgress: getUserProgress()
}
const TopicSlice = createSlice({
  name : "Topics",
  initialState,
  reducers : {
    selectTopic (state, action : PayloadAction<string>){
      state.selectedTopicId = action.payload
    },
    toggleTopicProgress (state, action : PayloadAction<string>){
      const topicId = action.payload;
      state.userProgress[topicId] = !state.userProgress[topicId]
      localStorage.setItem(PROGRESS_KEY , JSON.stringify(state.userProgress))
    }
  }
})
export const {selectTopic ,toggleTopicProgress } = TopicSlice.actions
export default TopicSlice.reducer