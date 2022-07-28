import { Routes, Route, Navigate } from "react-router-dom";
import { Destination } from "../../pages/destination";
import { Home } from "../../pages/home";



export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            < Route path='/destination' element={<Destination/>}/>

            <Route path='*' element={<Navigate to='/'/>}/>

        </Routes>

    );

}