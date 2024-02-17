//פונקציה אנונימית
// () => {
//     return 5
// }

// () => {
//     console.log('Hello');
// }

//אין דרך להפעיל פונקציה אנונימית במקום אחר
//ולכן נציב אותה במשתנה
const func = () => {
    return 'func'
}

//הרצה של המשתנה תפעיל את הפונקציה
func()

//פרמטרים - נכתוב בתוך הסוגריים
const multiply = (x, y) => {
    return x * y
}

//אם יש רק פרמטר אחד - אפשר להשמיט את הסוגריים
const pow2 = x => {
    return x * x
}

//קומפוננטה במבנה של פונקציה אנונימית
export const Rules = () => {

    const name = 'Sara'
    const age = 8

    const f = () => {
        return 5;
    }

    //jsx כלל כתיבה ב 
    // קומפוננטה מתחילה באות גדולה
    //1. קומפוננטה מחזירה רק אלמנט אחד
    // React.Fragment ניתן לעטוף ב 
    //2. בתוך אלמנטים js ניתן לשלב קוד
    // וגם אלמנטים בתוך קוד
    //3. עטוף בסוגריים מסולסלות js קוד 
    //4. רק מחרוזות או לעטוף בסוגריים מסולסלות attributes
    //5. Camelcase - html אין שימוש במילים שמורות של 
    //attributes, events, style
    return (
        // 1.
        <>
            {/* 2 - 3 */}
            <p>{name}</p>
            {/* מקוצר if */}
            {age > 10 ? <p>Big</p> : <p>Small</p>}
            {/* בוליאני - בדיקת תנאי if */}
            {age > 20 && <h1>Huge!!!</h1> || <h3>aaa</h3>}
            {age < 5 && (<h1>Tiny!!!</h1> || <h3>aaa</h3>)}

            {/* 4 */}
            <p key={1} for='div1'>aaa</p>
            
            {/* 5 */}
            {/* class */}
            <div className='aaa'>
                Hello
            </div>
            {/* onclick */}
            <button onClick={f}>send</button>
            {/* font-size, background-color */}
            {/* style = {background-color:'red', font-size:50px} */}
            <div style={{backgroundColor:'red', fontSize:'50px'}}>Great!</div>
        </>
    )
    // if (age > 10)
    //     return <> <p>Big</p></>
    // else
    //     return <><p>Small</p></>
}