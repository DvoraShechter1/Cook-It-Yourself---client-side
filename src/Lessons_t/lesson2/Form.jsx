import swal from "sweetalert"

export const Form = () => {

    const send = () => {
        swal('Hello!', 'login successful', 'success')
        // swal('Hello!', 'login failed', 'error')
    }

    return <>
        <label htmlFor={'un'}>username:</label>
        <br></br>
        <input id={'un'} type={'text'} placeholder={'input username'}></input>
        <br></br>
        <br></br>

        <label htmlFor={'pw'}>password:</label>
        <br></br>
        <input id={'pw'} type={'password'} placeholder={'input password'}></input>
        <br></br>
        <br></br>
        
        <button onClick={send}>send</button>
    </>
}