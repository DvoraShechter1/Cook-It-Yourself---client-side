import { useRef } from "react"
import swal from "sweetalert";

export const Login = (props) => {

    // const { users } = props
    const { login } = props

    //HTML יצירת מצביע לפקדים בדף ה 
    const nameRef = useRef()
    const passRef = useRef()

    // const send = () => {

    //     let user

    //     for (let i = 0; i < users.length; i++) {
    //         if (users[i].username == nameRef.current.value) {
    //             user = users[i]
    //             if (users[i].password == passRef.current.value)
    //                 swal(`Wellcome ${users[i].username}!`, "login successfuly", "success")
    //             else {
    //                 swal(`Oopps!!`, "wrong password", "error")
    //             }
    //         }
    //     }

    //     if (!user) {
    //         swal(`Oopps!!`, "user not found", "error")
    //     }

    // }

    // const send = () => {
    //     login(nameRef.current.value, passRef.current.value)
    // }

    return <>
        <label htmlFor={'un'}>Username:</label>
        <br></br>
        {/* nameRef - מצביע לפקד של הזנת השם */}
        <input id={'un'} placeholder="input username" ref={nameRef}></input>
        <br></br>
        <br></br>
        <label htmlFor={'pw'}>Password:</label>
        <br></br>
        <input id={'pw'} placeholder="input password" ref={passRef}></input>
        <br></br>
        <br></br>
        {/* <button onClick={send}>send</button> */}
        <button onClick={() => login(nameRef.current.value, passRef.current.value)}>send</button>
    </>
}