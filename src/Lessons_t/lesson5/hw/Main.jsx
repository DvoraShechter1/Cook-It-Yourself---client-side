import { Login } from "./Login"
import swal from "sweetalert";

export const Main = () => {

    const users = [
        { username: 'Esther', password: '6641' }
    ]

    const login = (name, pass) => {

        let user

        for (let i = 0; i < users.length; i++) {
            if (users[i].username == name) {
                user = users[i]
                if (users[i].password == pass)
                    swal(`Wellcome ${users[i].username}!`, "login successfuly", "success")
                else {
                    swal(`Oopps!!`, "wrong password", "error")
                }
            }
        }
        
        if (!user) {
            swal(`Oopps!!`, "user not found", "error")
        }

    }

    return <>
        {/* <Login></Login> */}
        {/* <LoginUser></LoginUser> */}
        {/* <LoginRef></LoginRef> */}
        {/* <Login users={users}></Login> */}
        <Login login={login}></Login>
    </>
}