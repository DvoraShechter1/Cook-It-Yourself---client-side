import { Person } from "../lesson2/Person";
import { Form } from "./Form";
import { Rules } from "./Rules";

export function Main() {
    return (
        <>
            {/* <Rules></Rules> */}
            {/* <Form></Form> */}

            <Person name={'Sara'} age={90}></Person>
            <Person name={'Rivka'} age={3}></Person>
            <Person name={'Esther'} age={19} message={'מוקדש באהבה משרי'}></Person>
            <Person name={'Talya'} age={45}></Person>
            <Person age={45}></Person>
            <Person name={'Talya'}></Person>
        </>
    )
}