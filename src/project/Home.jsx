import { NavLink } from "react-router-dom"
import { Outlet } from "react-router"
import Button from 'react-bootstrap/Button';

import './css/home.css'

export const Home = () => {
    return <>

        <div className='homeNav'>
            <Button variant="outline-primary">
                <NavLink to={'Register'} className='hlink'>הרשמה</NavLink>
            </Button>
            <Button variant="outline-primary">
                <NavLink to={'Login'} className='hlink'>כניסה</NavLink>
            </Button>
        </div>
        <Outlet></Outlet>


    </>
}