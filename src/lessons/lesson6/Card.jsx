import "./style.css"

export const Card =(props)=>{
    const user = props.user//??? .user למה צריך לגשת ל
    
    console.log(user)
    const classes = `${user.eventType} card`
    return<>
        <div id="card" className={classes}>
            {console.log(document.getElementById('card'))}
            <h1>{user.gender == 'male' ? `${user.addressee} היקר` : `${user.addressee} היקרה`}</h1>
            <h3>{user.blessing}</h3>
            <img src={user.image}></img>
            <p>{user.moreBlessing}</p>

        </div>
    </>
}