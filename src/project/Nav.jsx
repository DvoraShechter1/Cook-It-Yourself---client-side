import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { IsAdm } from "./adm/function";
import './css/nav.css'

export const Nav = () => {
    //u.state.currentUser  לא משתנה כשמרפרשים אבל רק אז מופיע
    //u.currentUser  משתנה בריפרוש אבל כשנכנסים נוסף מיד 
    let user = useSelector(u => {return u.currentUser });
    // let user = GetUser();

    return <>
        <nav id="nav" className="nav-container">
            {user && <h3 id='userName'>{user.firstName}</h3>}
            <ul className="nav-items">
                <li>{IsAdm(user) && <NavLink className={'link'} to={'/Level'}>רמות</NavLink>}</li>
                <li>{IsAdm(user) && <NavLink className={'link'} to={'/Category'}>קטגוריות</NavLink>}</li>
                <li>{user && <NavLink className={'link'} to={'/Personal'}>אזור אישי</NavLink>}</li>
                <li><NavLink className={'link'} to={'/Recipes'}>המתכונים שלנו</NavLink></li>
                <li><NavLink className={'link'} to={"/Home"}>דף הבית</NavLink></li>
            </ul>
        </nav>
    </>
}

