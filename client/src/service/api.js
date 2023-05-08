import axios from "axios";
const URL = "http://localhost:8000";


export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/adduser` , data);
    }catch(err){
        console.log("Error while using appuser API :", err);
    }
}


export const getUsers = async() => {
    try{
        return await axios.get(`${URL}/allusers`);
    }catch(err){
        console.log("Error while calling getusers API :", err);
    }
}

export const getUser = async(id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(err){
        console.log("Error while callig getUser API :", err);
    }
}

export const editUser = async(user, id) => {
    try{
        return await axios.patch(`${URL}/${id}`, user);
    }catch(err){
        console.log("Error while calling editUser API :", err)
    }
}

export const deleteUser = async(id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(err){
        console.log("Error while calling deleteUser API :", err);
    }
};