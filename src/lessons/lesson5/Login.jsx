import { useState } from "react"
import { NewUser } from "./NewUser.jsx"
import { getArr } from "./Main"


export const Login = () => {
    const users=getArr()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [isSend, setSend] = useState()
    //setSend(false)
    //let isSend = false

    //const [find, setFind] =useState()
    //setFind(false)
    let find = false

    const send = () => {
        //isSend = true
        setSend(true)
        //setFind(false)
        find=false
        const user = {
            username,
            password
        }

        for(let u in users){//מעבר על מערך המשתמשים
            debugger
            if(u.username==user.username){//אם כבר יש כזה משתמש
                if(u.password==user.password){//אם הסיסמה נכונה
                    alert("ok!!!!!!")
                    console.log("aaa"+find)
                    //setFind(true)
                    find = true

                }
                else
                    alert("worng password")
                    find = true
                //setFind(true)
                break
            }
        }
        if(!find){
            alert("you are new user")
        }
        //return <h3>!!!!!!!!!!!</h3>
        else
            alert(`Wellcome ${user.username}!`)
    }

    return <>
        {!isSend && <h2>~~~~~Login~~~~~</h2>}
        {!isSend && <label htmlFor={'un'}>Username:</label>}
        {!isSend && <br></br>}
        {!isSend && <input id={'un'} placeholder="input username" onBlur={(e) => setUsername(e.target.value)}></input>}
        {!isSend && <br></br>}
        {!isSend && <br></br>}
        {!isSend && <label htmlFor={'pw'}>Password:</label>}
        {!isSend && <br></br>}
        {!isSend && <input id={'pw'} placeholder="input password" onBlur={(e) => setPassword(e.target.value)}></input>}
        {!isSend && <br></br>}
        {!isSend && <br></br>}
        {!isSend && <button onClick={send}>send</button>}
        {isSend && !find && <NewUser></NewUser>}
        {isSend && find && <h1>hellow</h1>}
    </>
}