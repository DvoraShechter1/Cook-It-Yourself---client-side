import { useState } from "react"

// export function Trip(props){
//     const {name,age} =props;
//     return<>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//     </>
// }

export function Warning(props){
    const {sweets,water} = props
    const count = sweets//.length
    return count>3 || water<4
}
function Try(props){
    const {sweets,water} = props
    if(sweets<3)
        return false
    return true
}

export const Warning1=(props)=>{
    const {sweets,water} = props
    const count = sweets//.length

    return<>
    <h3>you brough {count - 3} more than allowed</h3>
    <h3>you only brough {4 - water} you need bring 4 liter</h3>
    </>
}

export const Trip=(props)=>{
    const {name,age,gender,water,sweets} =props;
    return<>
    {age>18 && <h2>{name} can join to the trip😊</h2> ||<h2>{name} can't join to the trip😥</h2>}
    {age>18 && gender=='male' && <h2>וקווי ה' יחליפו כח</h2>}
    {age>18 && Warning(sweets,water) && <Warning1 sweets={sweets} water={water}></Warning1>}

    </>
}
Trip.defaultProps = {
    name: 'Annonymous',
    gender: "male"
}

