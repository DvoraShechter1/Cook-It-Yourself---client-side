import { useState } from "react";
import { Login } from "./Login.jsx";

//const [arr, setArr] = useState()
//export const arr = new Array()
//let arr = new Array()
//add({username : "a", password : "a"})
let arr = [
    {uesrname : "a", password : "a"},
    {uesrname : "b", password : "b"}
]

export function getArr(){
    return arr
}
export function add(user){
    arr = Array.add(arr,user)
}

export const Main = () => {
    return <Login></Login>
}
