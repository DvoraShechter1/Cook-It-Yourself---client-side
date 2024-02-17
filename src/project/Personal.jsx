import { NavLink, Outlet } from "react-router-dom"

export const Personal = () => {
    return <>
        <div className='personalNav'>
            <NavLink to={'MyRecipes'} className='plink'>המתכונים שלי</NavLink>
            <NavLink to={'AddRecipe'} className='plink'>הוספת מתכון</NavLink>
        </div>
        <Outlet></Outlet>


    </>
}