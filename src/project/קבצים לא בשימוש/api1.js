import axios from "axios"


export const getUser = async (email,pass) =>{
    let user = null
    try{
        await axios.get(`https://localhost:7130/api/User/${email}/${pass}`)
        .then(res=>{
            user = res.data
        })
    }
    catch{
        return null
    }
    return user
}

export const addUser = async (u) => {
    let newUser = null
    try {
        await axios.post(`https://localhost:7130/api/User`, u)
        .then(res=>{
            newUser = res.data
        })
    }
    catch {
        return null
    }
    return newUser
}

// export const addUser = (u) => {
//     try {
//         console.log(u);
//         let result = axios.post(`https://localhost:7130/api/User`, u)
//         return result
//     }
//     catch {
//         return null
//     }
// }