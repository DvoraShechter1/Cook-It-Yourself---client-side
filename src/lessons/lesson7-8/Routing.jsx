import { Route, Routes } from "react-router"
import { Home } from "./home"

export const Routing=()=>{
    <Routes>
        <Route path='Home' element={<Home></Home>}></Route>
        {/* <Route path="product" element={<Product></Product>}></Route> */}
    </Routes>
}