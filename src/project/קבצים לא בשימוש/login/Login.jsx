import { useNavigate } from "react-router"
import { getUser } from "../../api"
// import { GetUser, SetUser } from "./function"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../../redux/action"




export const Login = () =>{
    const nav = useNavigate()//כדי לשנות ניתוב
    // const [user, setUser] = useState()
    // let user = GetUser()
    let user = useSelector(u=> {return u.currentUser});
    const dis = useDispatch()

    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const u = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        let user1 = await getUser(u.email,u.password)
        if(!user1){
            nav('/Home/Register')
        }
        else {
            dis(setCurrentUser(user1))
            // SetUser(user1)
            // setUser(GetUser())
            console.log(user);
            nav('/Home')
        }
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'mail'}>mail:</label>
            <br></br>
            <input id={'mail'} placeholder="input mail" required></input>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>Password:</label>
            <br></br>
            <input id={'pw'} placeholder="input password" required></input>
            <br></br>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}