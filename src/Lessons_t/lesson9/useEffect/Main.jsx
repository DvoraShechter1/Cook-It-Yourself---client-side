import { useState } from "react"
import { Hello } from "./Hello"

export const Main = () => {

    const [flag, setFlag] = useState(false)

    return <>
        <button onClick={() => setFlag(flag => !flag)}>show hello</button>
        {flag && <Hello></Hello>}
    </>
}