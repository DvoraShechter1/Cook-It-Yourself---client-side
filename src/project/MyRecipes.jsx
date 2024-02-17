import { useEffect, useState } from "react"
import { Recipe } from "./recipes/Recipe"
import { useSelector } from "react-redux"
import { getRecipe } from "./api"

import './css/recipes.css'
export const MyRecipes = () => {
    const [listRecipe, setListRecipe] = useState()
    useEffect(() => {
        getRecipe()
            .then(x => { setListRecipe(x) })
    }, [])

    let user = useSelector(u => { return u.currentUser });

    const isMatch = (r) => {
        if ((r.userName == user.firstName + " " + user.lastName))
            return <Recipe className='card' key={r.id} r={r}></Recipe>
    }

    return <>
        <section>
            {listRecipe && listRecipe.map(r => isMatch(r))}
        </section>
    </>
}