// components/Home.jsx
import React from 'react';
import {useNavigate} from "react-router-dom";
import '../css/Cube2.css'
function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="flex w-full bg-black h-28  justify-center items-center b">
            <div className="flex"><img onClick={()=>{navigate('/')}} className="iemgie cursor-pointer hover:scale-[103%] hover:duration-300 w-[400px]" src="./logo4.png"/></div>

        </div>

    )

}

export default Navbar;
