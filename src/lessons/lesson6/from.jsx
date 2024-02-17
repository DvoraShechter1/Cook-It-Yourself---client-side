import { useState } from "react"
import {Card} from "./Card"


export const From = () => {
    const [card, setCard] = useState()
    const Send = (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const card = {
            sender: event.target[0].value,//שולח
            addressee: event.target[1].value,//נמען
            gender: event.target[2].value,//מין נמען
            eventType: event.target[3].value,//סוג אירוע
            image: events[event.target[3].value],//תמונה
            blessing: event.target[4].value,//ברכה
            moreBlessing: event.target[5].value//איחול נוסף
        }
        console.log(card);
        setCard(card)
        //swal(`Wellcome ${user.username}!`, "login successfuly", "success")
    }

    const events = {
        "general": `${process.env.PUBLIC_URL}\\image\\מתנה.png`,
        "birthday": `${process.env.PUBLIC_URL}\\image\\בלונים.png`,
        "bar mitzva": `${process.env.PUBLIC_URL}\\image\\תפילין.png`,
        "wedding": `${process.env.PUBLIC_URL}\\image\\חתונה.png`,
        "new born": `${process.env.PUBLIC_URL}\\image\\תינוקות.png`
        //"new born": {img: `${process.env.PUBLIC_URL}\\image\\בלונים.png`,class: ''}
    }

    //const src={`${process.env.PUBLIC_URL}\\image`}
    return <>
        {!card && <form onSubmit={(e) => Send(e)}>
            <input required placeholder="input your name"></input>
            <br></br>
            <br></br>
            <input required placeholder="input addressee's name"></input>
            <br></br>
            <br></br>
            <label>select addressee's gender</label>
            <br></br>
            <select>
                {/* <option required selected disabled>select addressee's gender</option> */}
                <option>male</option>
                <option>female</option>
            </select>
            <br></br>
            <br></br>
            <label>select type event</label>
            <br></br>
            <select>
            {Object.keys(events).map((x, i) => <option key={i}>{x}</option>)}
            </select>
            <br></br>
            <br></br>
            <input required placeholder="input yuor blessing"></input>
            <br></br>
            <br></br>
            <input placeholder="input more blessing"></input>
            <br></br>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>}
        {/* {card && <h1>{card.gender=='male' ? `${card.addressee} היקר` : `${card.addressee} היקרה`}</h1>} */}
        {card && <Card user={card}></Card>}
    </>
}