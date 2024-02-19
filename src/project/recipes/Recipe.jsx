import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Details from "./Details";

export const Recipe = (r) => {
    // const [det, setDet] = useState(false)
    // function Show() {
    //     let divInfo = document.getElementById(`popupdiv${r.id}`)
    //     console.log(divInfo);
    //     let others = document.getElementsByClassName('popupGroup')
    //     for (let i = 0; i < others.length; i++) {
    //         debugger
    //         others[i].style.display = 'none'
    //     }
    //     if (divInfo.style.display == 'none') 
    //         divInfo.style.display = 'block'
    //     else 
    //         divInfo.style.display = 'none'
    // }
    // function Hide() {
    //     let divInfo = document.getElementById(`popupdiv${r.id}`);
    //     if (divInfo.style.display == 'block') {
    //         divInfo.style.display = 'none';
    //     } else {
    //         divInfo.style.display = 'block';
    //     }
    // }
    r = r.r
    console.log(r);
    return <>
        <Card style={{ width: '18rem' }}>
            {console.log(`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`)}
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`} />
            <Card.Body>
                <Card.Title>{r.name}</Card.Title>
                <Card.Text>
                    {r.userName}
                </Card.Text>
                <Details r={r}></Details>
                {/* <Button onClick={Show} variant="primary">פרטים נוספים</Button> */}
                {/* <input type="button" class="buttonForPopUp" value="פרטים נוספים" onClick={Show} /> */}
            </Card.Body>
        </Card>
        
        
        {/* <div id={`popupdiv${r.id}`} className="popupGroup" style={{ display: 'none' }}>
            <div class="backgroundPopUp" onClick={Hide}>
            </div>
            <div class="contentPopUp">
                <input type="button" class="buttonInPopUp" value="X" onClick={Hide} />
                <div class="content">
                    <h2>{r.name}</h2>
                    <p>{r.preparationTime}</p>
                    <p>{r.userName}</p>
                    <p>{r.categoryName}</p>
                    <p>{r.levelName}</p>
                    <p>{r.note}</p>
                    <p>{r.instructions}</p>
                </div>
            </div>
        </div> */}
    </>
}

// export default BasicExample;


