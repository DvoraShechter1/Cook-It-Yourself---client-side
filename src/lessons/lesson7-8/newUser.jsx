import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { addUser } from "./redux/action";
import './css/new_user.css'

export const NewUser=()=>{

    const dispatch = useDispatch()

    const send = (event) => {
        event.preventDefault()
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);

        // הפעלת פעולה של הוספת משתמש
        dispatch(addUser(user))

        swal(`Welcome ${user.username}!`, "register successfuly", "success")
    }

    return <>
        <div id="back">
            <img id="logo" src={`${process.env.PUBLIC_URL}\\image\\lesson7-8\\logo.png`} width="100%"></img>
            <form onSubmit={(e) => send(e)}>
            <div id="form">
                <input type="text" placeholder="שם משתמש" id="txtName"></input>
                <input type="password" placeholder="סיסמה" id="txtSystem"></input>
            <   input type="password" placeholder="אימות סיסמה" id="systemAgain"></input>
            </div>
            <div id="btn">
                <input type="submit" value={'send'} id="btnEnrollment"></input>
            </div>
            </form>
        </div>
    </>
}