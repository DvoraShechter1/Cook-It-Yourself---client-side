import { useNavigate } from "react-router"
import { getUser } from "../api"
import { SetUser } from "../function"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function OffCanvasExample({ name, ...props }) {
    console.log('11111111111111111111111111');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nav = useNavigate()//כדי לשנות ניתוב
    const [user, setUser] = useState()
    const send = async (event) => { 
        event.preventDefault()
        // debugger
        console.log('333333333333333333333');
        console.log(event);
        // setShow(false)
        // submit מבטל את ברירת המחדל של האירוע
        const thisUser = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        console.log((thisUser));
        let user1 = await getUser(thisUser.email, thisUser.password)
        if (!user1) {
            nav('/Home/Register')
        }
        else {
            setUser(SetUser(user1))
            nav('/Home')
            // setShow(false)
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export function Login() {
    return (
        <>
            {/* <OffCanvasExample placement={'end'} name={'כניסה'} /> */}
            {/* {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))} */}
        </>
    );
}


// render(<Example />);

// export const Login = () =>{
//     const nav = useNavigate()//כדי לשנות ניתוב
//     const [user, setUser] = useState(GetUser())
//     // let user = GetUser()
//     // let user = useSelector(u=> {return u.currentUser});
//     // const dis = useDispatch()

//     const send = async (event) => {
//         // submit מבטל את ברירת המחדל של האירוע
//         event.preventDefault()
//         const user = {
//             email: event.target[0].value,
//             password: event.target[1].value
//         }
//         let user1 = await getUser(user.email,user.password)
//         if(!user1){
//             nav('/Home/Register')
//         }
//         else {
//             // dis(setCurrentUser(user1))
//             setUser(SetUser(user1))
//             nav('/Home')
//         }
//     }

//     return <>
//         <form onSubmit={(e) => send(e)}>
//             <label htmlFor={'mail'}>mail:</label>
//             <br></br>
//             <input id={'mail'} placeholder="input mail" required></input>
//             <br></br>
//             <br></br>
//             <label htmlFor={'pw'}>Password:</label>
//             <br></br>
//             <input id={'pw'} placeholder="input password" required></input>
//             <br></br>
//             <br></br>
//             <input type="submit" value={'send'}></input>
//         </form>
//     </>
// }