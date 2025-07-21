const REGISTERED_USERS = "registered_users";
const ACTIVE_USER = "active_user";
export interface userData {
  email: string;
  password: string;
}

function  addNewUser (user :userData) {
 const userStr = localStorage.getItem(REGISTERED_USERS )|| "[]"
 const users = JSON.parse(userStr) as userData[];
  users.push(user);
  localStorage.setItem(REGISTERED_USERS , JSON.stringify(users))
}
function isNewUserExist (email : String) : boolean{
const userStr = localStorage.getItem(REGISTERED_USERS) || "[]";
const users = JSON.parse(userStr) as userData[];
const findUser = users.find(data => data.email == email)
return findUser != null
}

function getUser (email : String , password : String){
const userStr = localStorage.getItem(REGISTERED_USERS) || "[]";
const users = JSON.parse(userStr) as userData[];
const findUser = users.find(data => data.email == email && data.password == password)
return findUser

}
const updateActiveUser = (user : userData) =>{
localStorage.setItem(ACTIVE_USER , JSON.stringify(user))
}
const getActiveUser = () =>{
 const activeUser = localStorage.getItem(ACTIVE_USER ) || null;
if (activeUser == null){
  return null;
}
const ActiveUser = JSON.parse(activeUser) as userData
return ActiveUser
}
const deleteActiveUser = () =>{
  localStorage.removeItem(ACTIVE_USER)
}
export {addNewUser , isNewUserExist , getUser , getActiveUser ,updateActiveUser , deleteActiveUser};