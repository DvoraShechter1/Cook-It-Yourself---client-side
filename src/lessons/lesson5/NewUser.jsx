//import { send } from "process"
import { useRef, useState } from "react"
import { add, getArr } from "./Main"
//import { setArr } from "./Main"




export const NewUser = () => {
    const users=getArr()

    const [ok, setOk] = useState()
    //setOk(false)---why it's make an error?????

    const send = (e) => {
        e.preventDefault()
        debugger
        if (e.target[1].value!= e.target[2].value)
            alert("worng pasword")
        else
            setOk(true)
        const user = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        if(ok){
            for(let u in users){//מעבר על מערך המשתמשים
                if(u.name==user.value){//אם כבר יש כזה משתמש
                    alert("there is a user with that name")
                    setOk(false)
                }
            }
        }
        if(ok){
            add(user)
        }

    }
    return <>
    {!ok && <form onSubmit={(e) => send(e)}>
        <label htmlFor={'un'}>Username:</label>
        <br></br>
        <input id={'un'} placeholder="input username"></input>
        <br></br>
        <br></br>
        <label htmlFor={'pw'}>Password:</label>
        <br></br>
        <input id={'pw'} placeholder="input password"></input>
        <br></br>
        <br></br>
        <label htmlFor={'pwa'}>Check password:</label>
        <br></br>
        <input id={'pwa'} placeholder="input password again"></input>
        <br></br>
        <br></br>
        <input type="submit" value={'send'}></input>
    </form>}
    {ok && <h1>welcom</h1>}
</>
}