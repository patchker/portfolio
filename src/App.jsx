import {useEffect, useState} from 'react'
import Animation from "./Cube1"
import Cube3 from "./Cube3";
import Cube4 from "./Cube4";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar"
function App() {


    return (
        <div className={`bg-black font-protest`}>
            <div className={`w-full h-screen flex sm: pl-5 md:pl-20  items-center `}>
                <div className={`bg-black w-full xl:w-[50%] text-white text-xl`}>
                    <h1>HI THERE, IM</h1>
                    <h1 className={`font-masque text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl text-blue-600`}>Patchker</h1>
                    <h1>FRONTEND + BACKEND DEVELOPER</h1>
                    <h1 className={`mt-5`}>I possess a deep passion for creating engaging and interactive websites.</h1>
                    <h1>My expertise extends from frontend development to specializing in the construction of robust backend servers.</h1>
                    <div className={`flex flex-col items-center justify-center`}>
                    <div className={`mt-5`}>Here you can check my works.</div>
                    <button className={`px-8 py-3 bg-blue-600 rounded text-2xl`}>Portfolio</button>
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

export default App
