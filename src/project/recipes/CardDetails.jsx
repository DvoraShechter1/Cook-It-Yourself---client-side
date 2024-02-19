import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getIngredientsToRecipe } from '../api';
import { useEffect, useState } from 'react';

function CardDetails(recipe) {
    // console.log(recipe);
    const r = recipe.recipe
    // const r ={
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
    const [list, setList] = useState()
    useEffect(()=>{
        getIngredientsToRecipe(r.id).then(x=>{setList(x)})
    })
    // console.log(r)
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/image/project/${r.pic}.png`} />
            <Card.Body style={{"text-align": "center"}}>
                {/* <Card.Title>{r.name}</Card.Title> */}
                <Card.Text>{r.note}</Card.Text>
                <Card.Text>{r.userName}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"  style={{"text-align": "right"}}>
                <ListGroup.Item>{`רמת קושי: ${r.levelName}`}</ListGroup.Item>
                <ListGroup.Item>{`קטגוריה: ${r.categoryName}`}</ListGroup.Item>
                <ListGroup.Item>{`זמן הכנה(בדקות): ${r.preparationTime}`}</ListGroup.Item>
            </ListGroup>
            
            <Card.Body style={{"text-align": "right"}}>
                <Card.Text>:הרכיבים הדרושים</Card.Text>
                <ul style={{"list-style": "none"}}>
                    {list && list.map(i=>
                        <li key={i.id}>{`${i.amount} ${i.ingredientName}`}</li>
                    )}
                </ul>
            </Card.Body>
            <ListGroup>
            <Card.Body style={{"text-align": "right"}}>
                <Card.Subtitle>הוראות הכנה</Card.Subtitle>
                <Card.Text>{r.instructions}</Card.Text>
            </Card.Body>
            
            </ListGroup>
        </Card>
    );
}

export default CardDetails;