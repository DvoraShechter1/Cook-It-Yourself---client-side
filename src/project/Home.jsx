import { NavLink } from "react-router-dom"
import { Outlet } from "react-router"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffCanvasExample } from "./login/Login2";



export const Home = () => {
    return <>

        <div className='homeNav'>
            <Button variant="outline-primary">
                <NavLink to={'Register'} className='hlink'>הרשמה</NavLink>
            </Button>
            <NavLink to={'Login'} className='hlink'>כניסה
                {/* <OffCanvasExample placement={'end'} name={'כניסה'} /> */}
            </NavLink>
            {/* <NavLink to={'Login'} className='hlink'>כניסה</NavLink> */}
        </div>
        <Outlet></Outlet>


    </>
}