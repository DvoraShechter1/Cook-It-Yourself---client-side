import { useSelector } from "react-redux";


export const IsAdm = (u) => {
debugger
    let adm = useSelector(u => {return u.state.admin });
    // console.log(adm.state.admin);
    if (u)
        // return u.email == 'adm@gmail.com' && u.password == 'adm@gmail.com'
        return u.email == adm.email && u.password == adm.password
    return false
}