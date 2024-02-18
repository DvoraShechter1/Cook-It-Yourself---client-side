import { useState } from "react";
import { Details } from "./Details";

// export const Recipe = (r) => {
//     const [det,setDet] = useState(false)

//     console.log(r);
//     r = r.r
//     console.log(r);
//     return <>
//         <div key={r.id}>
//             <h1>{r.name}</h1>
//             <h2>{r.userName}</h2>
//             <img src={`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`}></img>
//             <button onClick={setDet}>!!!!!11</button>
//         </div>
//         {det && <Details></Details>}
//     </>
// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Recipe = (r) => {
    const [det, setDet] = useState(false)
    function Show() {
        let divInfo = document.getElementById(`popupdiv${r.id}`);
        let others = document.getElementsByClassName('popupGroup')
        for (let i = 0; i < others.length; i++) {
            debugger
            others[i].style.display = 'none';

        }
        if (divInfo.style.display == 'none') {
            divInfo.style.display = 'block';
        } else {
            divInfo.style.display = 'none';
        }
    }
    function Hide() {
        let divInfo = document.getElementById(`popupdiv${r.id}`);
        if (divInfo.style.display == 'block') {
            divInfo.style.display = 'none';
        } else {
            divInfo.style.display = 'block';
        }
    }
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
                <Button onClick={Show} variant="primary">פרטים נוספים</Button>
                {/* <input type="button" class="buttonForPopUp" value="פרטים נוספים" onClick={Show} /> */}
            </Card.Body>
        </Card>
        {/* <Details r={r}></Details> */}
        <div id={`popupdiv${r.id}`} className="popupGroup" style={{ display: 'none' }}>
            <div class="backgroundPopUp" onClick={Hide}>
            </div>
            <div class="contentPopUp">
                <input type="button" class="buttonInPopUp" value="X" onClick={Hide} />
                <div class="content">
                    <h2>{r.name}</h2>
                    <p>{r.preparationTime}</p>

                </div>

            </div>

        </div>
    </>
}

// export default BasicExample;


