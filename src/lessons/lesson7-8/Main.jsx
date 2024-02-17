import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Home } from "./home"
import { Routing } from "./Routing"
import { NewUser } from "./newUser"
import { Register } from "./Register"

let countProd=0
let arrProd = [
    //{ code: ++countProd, content: "מה זאת התמדה? פשוט מאוד. זה יום ככה ויום גם כן ככה ולא יום ככה ויום ככה", bounds: "ליום-יום טוב יותר", price: 52 },
    { code: ++countProd, content: "אל תגיד שאתה רוצה לתת, אלא קדימה, תן!", source: "ג'ון וולפגנג", bounds: "ליום-יום טוב יותר", price: 68, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/hand-heart.png`  },
    { code: ++countProd, content: "תוכנית זה חלום עם לוח זמנים", source: "מקס וובר", bounds: "לעתיד מנוצל יותר", price: 90, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/calendar.png` },
    //{ code: ++countProd, content: "קודם אמור לעצמך מה אתה רוצה להיות, ואז עשה מה שאתה צריך לעשות", source: "אפיקטוטוס", bounds: "לעתיד מנוצל יותר", price: 98 },
    { code: ++countProd, content: "אי אפשר להשליך הרגל מהחלון צריך לשכנע אותו לרדת במדרגות שלב אחר שלב", source: "מארק טווין", bounds: "ליום-יום טוב יותר", price: 43, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/stairs.png` },
    { code: ++countProd, content: "מוטב להתחיל בערב מאשר לא להתחיל בכלל", source: "פתגם אנגלי", bounds: "ליום-יום מנוצל יותר", price: 79, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/cloud-x.png` },
    { code: ++countProd, content: "האדם שלא יפליג עד אשר יסולקו כל הסכנות, לעולם לא יצא אל הים", source: "תומס פולר", bounds: "לחיים שמאפשרים יותר", price: 67, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/boat.png` },
    { code: ++countProd, content: "לא ניתן לחצות את הים רק מלעמוד ולהסתכל על המים", source: "רבינדרנת טאגור", bounds: "לחיים שמאפשרים יותר", price: 79, img: `${process.env.PUBLIC_URL}\\image\\lesson7-8\\pictures/eyeglasses.png` }
]

export const Main=()=>{
    return<>
        <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
        {/* <Home></Home> */}
        {/* <NewUser></NewUser> */}
        <Register></Register>
    </>
    
}