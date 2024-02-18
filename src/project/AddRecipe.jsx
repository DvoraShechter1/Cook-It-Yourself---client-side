import { useEffect, useState, useRef } from "react"
import { addIngredient, addIngredientsToRecipe, addRecipe, getCategory, getIngredient, getLevel, getUser } from "./api"
import { useSelector } from "react-redux"

export const AddRecipe = () => {

    const [list1, setList1] = useState()
    const [list2, setList2] = useState()
    const [list3, setList3] = useState()

    const [resList, setResList] = useState([])

    useEffect(() => {
        getCategory()
            .then(x => { setList1(x) })
        getLevel()
            .then(x => { setList2(x) })
        getIngredient()
            .then(x => { setList3(x) })
    }, [])

    const ref = useRef()
    let currentUser = useSelector(u => { return u.currentUser });


    const send = async (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        console.log(currentUser)
        let recipe =
        {
            "name": event.target[0].value,
            "pic": event.target[2].value,
            "preparationTime": event.target[3].value,
            "userId": currentUser.id,
            "userName": currentUser.firstName + " " + currentUser.lastName,
            // "categoryId": event.target[5].key,
            "categoryName": event.target[5].value,
            // "levelId": event.target[6].key,
            "levelName": event.target[6].value,
            "note": event.target[1].value,
            "instructions": event.target[4].value
        }

        console.log(recipe)


        addRecipe(recipe).then(
            r => {
                console.log(r)
                const list = document.getElementsByClassName("amount")
                console.log(list);
                setResList([])
                for (let i = 0; i < list.length; i++) {
                    if (list[i].value != '0') {
                        debugger
                        const ir = {
                            // "id": 0,
                            "recipeId": r,
                            "ingredientId": list[i].id,
                            "ingredientName": document.getElementById(list[i].id).getAttribute('data-n'),
                            "amount": list[i].value
                        }
                        // setResList([...resList, ir])
                        resList.push(ir)
                        console.log(resList,'\n', ir)
                        // const ir = [{
                        //     // "id": 0,
                        //     "recipeId": r,
                        //     "ingredientId": list[i].id,
                        //     // "ingredientName": list[i].data-n,
                        //     "ingredientName": document.getElementById(list[i].id).getAttribute('data-n'),
                        //     "amount": list[i].value
                        // }]
                        // addIngredientsToRecipe(ir)//.then(x => console.log(x))
                    }
                }
                console.log(resList)
                addIngredientsToRecipe(resList)
            }
        )
    }

    const f_click = async () => {
        let val = ref.current.value
        console.log(val);
        if (val)
            setList3(await addIngredient({ Name: val }))
        ref.current.value = ''
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'name'}>שם</label>
            <br></br>
            <input id={'name'} placeholder="עוגת שוקולד" required></input>
            <br></br>
            <br></br>
            <label htmlFor={'note'}>נימה אישית</label>
            <br></br>
            <textarea id={'note'} placeholder="העוגה מתאימה ליום-יום ומשמשת כדלק זמין עבור כל אחד מבני הבית..."></textarea>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>הכנס שם תמונה</label>
            <br></br>
            <input id={'pw'} placeholder="תמונה 1"></input>
            <br></br>
            <br></br>
            <label htmlFor={'t'}>זמן הכנה - בדקות</label>
            <br></br>
            <input id={'t'} type="number"></input>
            <br></br>
            <br></br>
            <label htmlFor={'in'}>הוראות הכנה</label>
            <br></br>
            <textarea id={'in'} placeholder="לערבב בקערה...."></textarea>
            <br></br>
            <br></br>
            <select required>
                {/* <option selected disabled>קטגוריה</option> */}
                {list1 && list1.map((x, i) =>
                    <option key={x.id}>{x.name}</option>
                )}
            </select>
            <br></br>
            <br></br>
            <select required>
                {/* <option selected disabled>רמה</option> */}
                {list2 && list2.map((x, i) =>
                    <option key={x.id}>{x.name}</option>
                )}
            </select>
            <br></br>
            <br></br>

            <label>הכנס כמות עבור הרכיבים הרלוונטים</label>
            {list3 && list3.map(x =>
                <div key={x.id}>
                    <label htmlFor={x.id}>{x.name}</label>
                    <br></br>
                    <input className="amount" data-n={x.name} id={x.id} defaultValue={"0"} type="text"></input>
                </div>
            )}
            <br></br>
            <input ref={ref} placeholder="הוסף רכיב"></input>
            <br></br>
            <button id="btn" onClick={f_click}>הוסף</button>
            <br></br>
            <br></br>



            <input type="submit" value={'send'}></input>
        </form>
    </>
}