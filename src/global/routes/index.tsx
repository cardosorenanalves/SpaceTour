import { Routes, Route, Navigate } from "react-router-dom";
import { Crew } from "../../pages/crew";
import { Destination } from "../../pages/destination";
import { Home } from "../../pages/home";
import { Technology } from "../../pages/Technology";



export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/crew' element={<Crew/>}/>
            <Route path='/technology' element={<Technology/>}/>

            <Route path='*' element={<Navigate to='/'/>}/>

        </Routes>

    );

}