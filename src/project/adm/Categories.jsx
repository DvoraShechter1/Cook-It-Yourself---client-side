import { useState, useRef, useEffect } from "react"
import { addCategory, getCategory } from "../api"
import Button from 'react-bootstrap/Button';


export const Categories =  () => {

    const [list, setList] = useState()
    const ref = useRef()
    //const list = getCategory()


    const f_click = async () => {
        let val = ref.current.value
        console.log(val);
        if (val)
            setList(await addCategory({ Name: val }))
        //addCategory({Name: x})
        ref.current.value = ''
    }

    useEffect(() => {
        getCategory()
            .then(x => {setList(x)})
    }, [])
    // useEffect(async ()=>{
    //     setList(await getCategory())
    // })

    return <>
        {list && list.map((x, i) =>
            <h2 key={i}>{x.name}</h2>
        )}

        {/* <select>
        {list.map((x, i) => <option key={i}>{x}</option>)}
        </select> */}

        <input ref={ref} placeholder="הכנס קטגוריה חדשה"></input>
        <br></br>
        {/* <button onClick={f_click}>הוספה</button> */}
        <Button onClick={f_click} variant="outline-primary">הוספה</Button>
    </>
}