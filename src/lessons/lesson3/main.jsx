import { S, Student } from "./Student"
import {Trip} from "./Trip1"

let s1=new Student("Talya",19,"female")
let s2=new Student("yehoda",3,"male")
const arr ={s1,s2,s3: new Student("david",10,"male")}

// const list = [
//     { firstname: "Efrat", age: 52, gender: 'female',water: 2, sweets:["", "", ""] },
//     { firstname: "Miriam", age: 19, gender: 'female',water: 3, sweets:["", "", ""] },
//     { firstname: "Avigail", age: 18 , gender: 'female',water: 5, sweets:["", "", "",""]},
//     { firstname: "Ruth", age: 19, gender: 'female',water: 4, sweets:["", "", ""] },
//     { firstname: "david", age: 20, gender: 'male',water: 2, sweets:["", "", ""] },
//     { firstname: "moshe", age: 12, gender: 'male',water: 4, sweets:["", "", "",""] },
//     { firstname: "Nechama", age: 7, gender: 'female',water: 4, sweets:["", "", "",""] }
// ]
const list = [
    { firstname: "Efrat", age: 52, gender: 'female',water: 4, sweets:1 },
    { firstname: "Miriam", age: 19, gender: 'female',water: 3, sweets:3 },
    { firstname: "Avigail", age: 18 , gender: 'female',water: 5, sweets:2},
    { firstname: "Ruth", age: 19, gender: 'female',water: 4, sweets:2},
    { firstname: "david", age: 20, gender: 'male',water: 2, sweets:0},
    { firstname: "moshe", age: 12, gender: 'male',water: 4, sweets:3 },
    { firstname: "Nechama", age: 7, gender: 'female',water: 4, sweets:1 }
]

export const Main = () =>{
    return <>
        {/* <Trip name={"a"} age={20} gender={'male'} water={10} sweets={5}></Trip> */}
    {list.map((x,i)=><Trip key={i} name={x.firstname} age={x.age} gender={x.gender} water={x.water} sweets={x.sweets}></Trip>)}

    
    
    </>
}