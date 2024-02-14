import {useEffect, useState} from 'react'
import Animation from "./components/Cube1.jsx"
import Cube3 from "./components/Cube3.jsx";
import Cube4 from "./components/Cube4.jsx";
import Footer from "../../shared/Footer.jsx";
import {useNavigate} from "react-router-dom";
function Home() {
    const navigate = useNavigate();

    return (
        <div className={`bg-black font-protest`}>
            <div className={`w-full h-[450px] lg:h-screen flex sm: pl-5 md:pl-20  items-center `}>
                <div className={`bg-black w-full xl:w-[50%] text-white text-xl`}>
                    <h1>HI THERE, IM</h1>
                    <h1 className={`font-masque text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl text-blue-600`}>Patchker</h1>
                    <h1>FRONTEND + BACKEND DEVELOPER</h1>
                    <h1 className={`mt-5`}>I possess a deep passion for creating engaging and interactive websites.</h1>
                    <h1>My expertise extends from frontend development to specializing in the construction of robust backend servers.</h1>
                    <div className={`flex flex-col items-center justify-center`}>
                        <div className={`mt-5`}>Here you can check my works.</div>
                        <button onClick={()=>{navigate('/portfolio')}} className={`px-10 py-3 bg-blue-600 rounded-xl  mt-2 text-2xl hover:bg-blue-700`}>Portfolio</button>
                    </div>
                </div>
                <Animation className="test shadow-2xl"/>

            </div>
            <div className="flex flex-col md:flex-row">
                <Cube3/>
                <Cube4/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
