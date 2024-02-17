import { useEffect, useState } from "react"

export const Hello = () => {

    const [num, setNum] = useState(0)

    // useEffect - hook react
    // מקבלת פונקציית חץ ומערך
    // מפעילה אירועים במחזור החיים של הקומפוננטה
    // בעת טעינה
    // בעת שינוי של משתנה ספציפי
    // בעת דריסה
    useEffect(() => {
        // בעת טעינה
        document.title = "Hello"
        if (num !== 0)
            document.title = `The num is ${num}`
        // בעת דריסה
        return () => {
            document.title = "React App"
        }
    }, [num])

    // // כל משתנה שיופיע במערך יפעיל את הפונקציה בעת שינוי של הערך שלו
    // useEffect(() => {
    //     if (num !== 0)
    //         document.title = `The num is ${num}`
    // }, [num])

    return <>
        <h1>Hello</h1>
        <input onBlur={(e) => setNum(Number(e.target.value))}></input>
    </>
}