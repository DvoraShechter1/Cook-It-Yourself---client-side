import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { IsAdm } from "./adm/function";
import './css/nav.css'
import { GetUser } from "./function";

// export const Nav = () =>{
//     let user = useSelector(u=> {return u.currentUser});
//     const dis = useDispatch()
//     console.log(user);

//     return<>
//         <div id="nav">
//             {user && <div>{user.firstName}</div>}
//             <NavLink className={'link'} to={"/Home"}>דף הבית</NavLink>
//             <NavLink className={'link'} to={'/Recipes'}>המתכונים שלנו</NavLink>
//             {user &&<NavLink className={'link'} to={'/Personal'}>אזור אישי</NavLink>}
//             {isAdm(user) &&<NavLink className={'link'} to={'/Category'}>קטגוריות</NavLink>}
//             {isAdm(user) &&<NavLink className={'link'} to={'/Level'}>רמות</NavLink>}
//         </div>
//     </>
// }

export const Nav = () => {
    // let user = useSelector(u => { return u.currentUser });
    let user = GetUser();
    // const dis = useDispatch()
    console.log(user);

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
            {/* <br></br> */}
        </nav>
    </>
}

