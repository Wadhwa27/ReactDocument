const REGISTERED_USERS = "registered_users";
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
const userStr = localStorage.getItem(REGISTERED_USERS) || null;
if (userStr == null){
  return false;
}
const users = JSON.parse(userStr) as userData[];
const findUser = users.find(data => data.email == email)
return findUser != null
}

function getUser (email : String , password : String){
const userStr = localStorage.getItem(REGISTERED_USERS) || null;
if (userStr == null){
  return false;
}
const users = JSON.parse(userStr) as userData[];
const findUser = users.find(data => data.email == email)
return findUser != null

}

export {addNewUser , isNewUserExist};