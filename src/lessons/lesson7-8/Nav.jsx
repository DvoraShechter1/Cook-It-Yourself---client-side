import { NavLink } from "react-router-dom"

export const Nav=()=>{
    console.log("nav")
    return<>
    <div className="in" id="rool">
        <NavLink to={"/Home"} className={"links"}>דף הבית</NavLink>
        <NavLink to={'/product'} className={'links'}>מוצרים</NavLink>
        <NavLink to={'/bag'} className={'links'}>הסל שלי</NavLink>
    </div>
    </>
}