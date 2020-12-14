import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
uuidv4();
let dummyUsers = []

export const getUsers = (req, res)=>{
    //res.send();
    res.send(dummyUsers);
}

export const createNewUsers = (req, res)=>{
    console.log('From server, post reached!');
    const user = req.body;
    //const {id} = req.params;
    dummyUsers.push({...user, id: uuidv4()});
    //console.log(typeof(req))
    
    res.send(dummyUsers);
}

export const editUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const foundUser = dummyUsers.find((user)=>user.id ===id);
    console.log(foundUser)
    if (firstName) {foundUser.firstName = firstName;}
    if (lastName) {foundUser.lastName = lastName;}
    if (age) {foundUser.age = age;}
    console.log('entries updated!')
    res.send(dummyUsers)
    //dummyUsers.map((user)=>res.send(`updated entries are ${user}`));
}

export const deleteUser = (req, res)=>{
    const {id} = req.params;
    dummyUsers = dummyUsers.filter((user)=>user.id != id);
    res.send(`ID ${id} Deleted from array`);

}

export const fetchUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = dummyUsers.find((user)=>user.id ===id);
    console.log(foundUser); 
    res.send(foundUser);   
}
