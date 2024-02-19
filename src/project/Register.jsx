import { useNavigate } from "react-router"
import { addUser, getUser } from "./api"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "./redux/action"
import { useState } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';

import './css/style.css'

export const Register = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {setShow(false); nav('/Home')};
    const handleShow = () => setShow(true);

    const nav = useNavigate()//כדי לשנות ניתוב
    const dis = useDispatch()

    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        if (event.target[4].value != event.target[3].value)
            alert('worng password')
        else {
            const user = {
                firstName: event.target[0].value,
                lastName: event.target[1].value,
                email: event.target[2].value,
                password: event.target[3].value
            }
            let user1 = await getUser(user.email, user.password)
            console.log(user1)
            if (user1) {
                alert('כבר קיים משתמש עם אימייל וסיסמא זהים')
            }
            else {
                user1 = await addUser(user)
                dis(setCurrentUser(user1))

                console.log(user1);
                nav('/Home')
            }
        }
    }
    return <>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>הרשמה</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div className="from">
                <form onSubmit={(e) => send(e)}>
                    <label htmlFor={'ln'}>last name:</label>
                    <br></br>
                    <input id={'ln'} placeholder="input last name"></input>
                    <br></br>
                    <br></br>
                    <label htmlFor={'fn'}>first name:</label>
                    <br></br>
                    <input id={'fn'} placeholder="input first name"></input>
                    <br></br>
                    <br></br>
                    <label htmlFor={'mail'}>mail:</label>
                    <br></br>
                    <input id={'mail'} placeholder="input mail" required></input>
                    <br></br>
                    <br></br>
                    <label htmlFor={'pw'}>Password:</label>
                    <br></br>
                    <input id={'pw'} placeholder="input password" required type="password"></input>
                    <br></br>
                    <br></br>
                    <label htmlFor={'pwa'}>Password again:</label>
                    <br></br>
                    <input id={'pwa'} placeholder="input password again" required type="password"></input>
                    <br></br>
                    <br></br>
                    <input type="submit" value={'send'}></input>
                </form>
            </div>
        </Offcanvas.Body>
    </Offcanvas >
    </>
}