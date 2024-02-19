import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardDetails from './CardDetails';

function Details(r) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
    //   const r ={
    //     "id": 8,
    //     "name": "עוגיות שוקולד",
    //     "pic": "אוכל 10",
    //     "preparationTime": "20",
    //     "userId": 1,
    //     "userName": "מנהל ראשי",
    //     "categoryId": 10,
    //     "categoryName": "חלבי",
    //     "levelId": 10,
    //     "levelName": "קשה",
    //     "note": "sdfcgvhbjufdeytrfgyhujnim ftgyhujiu tyfrftgyhu\n fgyxdrcftvg erftgedf\ndcfvg dfgh",
    //     "instructions": "1.אאא\n2.בבב\n.............."
    // }
    console.log(r)
    r=r.r

  return (
    <>
    <div style={{"text-align": "center"}}>
      <Button onClick={() => setSmShow(true)} className="me-2">
        לפרטים נוספים
      </Button>
      <Modal
        // size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {r.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CardDetails recipe={r}></CardDetails>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default Details;

// import '../css/details.css'
// export const Details = (r) => {

//     function Hide() {
//         let divInfo = document.getElementById('popupdiv');
//         if (divInfo.style.display == 'block') {
//             divInfo.style.display = 'none';
//         } else {
//             divInfo.style.display = 'block';
//         }
//     }
//     let recipe = r.r
//     console.log(recipe)

//     // {
//     //     "name": r.name,
//     //     "pic": r.pic,
//     //     "preparationTime": r.preparationTime,
//     //     "userName": r.firstName + " " + r.lastName,
//     //     "categoryName": r.categoryName,
//     //     "levelName": r.levelName,
//     //     "note": r.note,
//     //     "instructions": r.instructions
//     // }

//     return <>

//         <div id="popupdiv" style={{ display: 'none' }}>
//             <div class="backgroundPopUp" onClick={Hide}>
//             </div>
//             <div class="contentPopUp">
//                 <input type="button" class="buttonInPopUp" value="X" onClick={Hide} />
//                 <div class="content">
//                     <h2>{recipe.name}</h2>
//                     <p>{recipe.preparationTime}</p>
//                 </div>
//             </div>
//         </div>

//     </>
// }