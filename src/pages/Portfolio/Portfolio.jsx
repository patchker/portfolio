import React, {useEffect, useState} from 'react';
import {supabase} from '../../config/supabaseClient.js';
import '../../css/Portfolio.css'
import Navbar from "../../shared/Navbar.jsx";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import Footer from "../../shared/Footer.jsx";
import {HiCursorClick} from "react-icons/hi";
import {SiVitess} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {SiReact} from "react-icons/si";
import {SiDjango} from "react-icons/si";
import {SiFastapi} from "react-icons/si";
import {SiPhp} from "react-icons/si";
import {FaQuestion} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";

function App() {
    const [data, setData] = useState([]);
    const [selectedTile, setSelectedTile] = useState(null);
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase
                .from('portfolio')
                .select('*');

            if (error) {
                console.error('Błąd przy pobieraniu danych:', error);
                setIsLoading(false)
                return;
            }
            console.log(data)
            setData(data);
            setIsLoading(false)
        };

        fetchData();
    }, []);


    const backOrFrontLabel = {
        0: 'Backend',
        1: 'Frontend',
        2: 'Backend + Frontend',
        3: 'Frontend + DB',
    };
    const toggleTile = (tileId) => {
        setSelectedTile(selectedTile === tileId ? null : tileId);
    };

    const handleTileClick = (id) => {
        if (window.innerWidth >= 1024) {

            const isSelected = selectedTile === id;
            if (isSelected) {
                setIsDetailVisible(false);
                setTimeout(() => setSelectedTile(null), 200);
            } else {
                setSelectedTile(id);
                setIsDetailVisible(true);
            }
        }
    };

    function technologiesFormat(rawTechnologiesString) {
        const technologyIcons = {
            'Vite': <SiVitess/>,
            'React': <SiReact/>,
            'Tailwind': <SiTailwindcss/>,
            'Django': <SiDjango/>,
            'FastAPI': <SiFastapi/>,
            'PHP': <SiPhp/>,
            'Node.js': <FaNodeJs/>,
            'default': <FaQuestion/>,
        };

        const rawTechnologiesArray = rawTechnologiesString.split(',');

        const formattedTechnologies = rawTechnologiesArray.map(technology => (
            <li className="flex" key={technology}>
                <span className={`mt-1`}>{technologyIcons[technology] || technologyIcons['default']}</span>
                <span className={`ml-2`}>{technology.charAt(0).toUpperCase() + technology.slice(1)}</span>
            </li>
        ));

        return <ul className="list-decimal">{formattedTechnologies}</ul>;
    }


    return (
        <div>
            <Navbar/>
            <div className="p-4 flex justify-center items-start  w-full bg-black min-h-screen font-protest">
                {!isLoading ? (
                    <div className="w-full flex flex-col mt-5">
                        <div className="w-full text-white flex items-center justify-center">
                            <div className="w-[80%] max-w-[700px] text-center responsive-title">
                                <h1>Here, you'll find a collection of my works that reflect not just my technical skills
                                    but also my ability to solve problems and think conceptually. From advanced web
                                    applications to innovative mobile solutions – every project is a testament to my
                                    professional journey and personal growth. Dive into my world of technology, design,
                                    and innovation.</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 items-center mt-5 w-full max-w-4xl mx-auto">
                            {data.map((row) => (
                                <div
                                    key={row.id}
                                    className={`relative  cursor-pointer shadow-blue-600 shadow-2xl  w-[100%]  sm:w-full ${
                                        selectedTile === row.id ? "expand" : "mycollapse"
                                    }`}
                                >
                                    <div
                                        className="relative border-4 neon-effect hover:scale-[102%] border-blue-500 bg-custom-gray rounded-lg p-4 shadow-lg overflow-hidden transition-transform duration-300 ease-in-out z-20 lg:flex lg:flex-row lg:items-start lg:space-x-4"
                                        onClick={() => handleTileClick(row.id)}
                                    >
                                        <div className="flex-1 ">
                                            <h2 className="font-bold text-5xl text-blue-600 font-masque">{row.name}</h2>

                                            <div className="lg:hidden space-y-4 mt-5">
                                                <p className="text-gray-500 text-3xl">{backOrFrontLabel[row.backOrFront] || 'Nieznany'}</p>
                                                <div className="text-gray-500">
                                                    <p className="text-3xl">Technologies</p>
                                                    <p>{row.technologies ? technologiesFormat(row.technologies) : 'Unknown'}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mt-5 lg:mt-2 mb-5"
                                               dangerouslySetInnerHTML={{__html: row.description}}></p>


                                            <div className={`flex flex-row justify-center items-center`}>
                                                <div
                                                    className="flex lg:hidden flex-col w-full md:w-[60%] justify-center items-center h-full mt-2 mb-5  border-4 rounded border-blue-600">
                                                    <button
                                                        className="flex-1 bg-black w-full font-bold text-white"
                                                        onClick={(event) => {
                                                            event.stopPropagation();

                                                            window.open('https://github.com/patchker/' + row.git_link, '_blank');
                                                        }}
                                                    ><FaGithub className={`m-auto text-3xl mb-2`}/> Github
                                                    </button>
                                                    <div
                                                        className="flex-1 w-full flex flex-col justify-center bg-red-400">
                                                        {row.site_link ? (
                                                            <button
                                                                className="w-full h-full font-bold bg-blue-600"
                                                                onClick={(event) => {
                                                                    event.stopPropagation();
                                                                    window.open(row.site_link, '_blank');
                                                                }}
                                                            >
                                                                <FaExternalLinkAlt className="m-auto text-3xl mb-2"/>
                                                                Go to the website
                                                            </button>
                                                        ) : (

                                                            <div
                                                                className="w-full h-full  min-h-[60px] bg-gray-600 text-gray-800 flex justify-center items-center text-center"
                                                                onClick={(event) => {
                                                                    event.stopPropagation()
                                                                }}
                                                            >
                                                                <span className={`flex h-full`}>This is the page</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-0">
                                            <p className="text-gray-500 text-3xl absolute top-2 right-5">{backOrFrontLabel[row.backOrFront] || 'Nieznany'}</p>
                                            <div className="text-gray-500 absolute top-20 right-5 w-52">
                                                <p className="text-3xl">Technologies</p>
                                                <p>{row.technologies ? technologiesFormat(row.technologies) : 'Unknown'}</p>
                                            </div>
                                        </div>

                                        <p className=" hidden lg:flex text-gray-300 items-center justify-end space-x-2 lg:absolute lg:bottom-2 lg:right-0 lg:mt-2 lg:px-3 lg:py-1 lg:rounded">
                                            <HiCursorClick className="text-2xl"/>
                                            <span>Click on a tile for details</span>
                                        </p>
                                    </div>


                                    {selectedTile === row.id && (
                                        <div
                                            className={`absolute top-0 left-full w-[100px] h-full border-4 rounded-tr-xl rounded-br-xl border-l border-blue-500 z-0 ${selectedTile === row.id ? (isDetailVisible ? 'details-animation' : 'hide-details-animation') : ''}`}
                                            onClick={() => toggleTile(row.id)}
                                        >

                                            <div className="flex flex-col justify-center items-center h-full">
                                                <button
                                                    className="flex-1 bg-black h-full font-bold w-full text-white  "
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        window.open('https://github.com/patchker/' + row.git_link, '_blank');

                                                    }}
                                                ><FaGithub className={`m-auto text-3xl mb-2`}/> Github
                                                </button>
                                                <div className="flex-1 flex flex-col justify-center">
                                                    {row.site_link ? (
                                                        <button
                                                            className="w-full h-full font-bold bg-blue-600"
                                                            onClick={(event) => {
                                                                event.stopPropagation();
                                                                window.open(row.site_link, '_blank');
                                                            }}
                                                        >
                                                            <FaExternalLinkAlt className="m-auto text-3xl mb-2"/>
                                                            Go to the website
                                                        </button>
                                                    ) : (

                                                        <div
                                                            className="w-full h-full bg-gray-600 text-gray-800 flex justify-center items-center text-center"
                                                            onClick={(event) => {
                                                                event.stopPropagation()
                                                            }}
                                                        >
                                                            <span className={`flex`}>This is the page</span>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>

                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : <div className={`flex justify-center items-center mt-32`}>

                    <img src="./loading2.gif" width="150px"/>
                </div>}
            </div>
            <div className="flex flex-col justify-center items-center bg-black text-white pt-10 font-protest">
                <div>And much much more. Visit my github profile to see all the apps.</div>
                <div className="flex flex-row justify-center items-center">
                    <button
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 h-15 mt-2 w-60  font-bold  text-black rounded px-4 py-2"
                        onClick={() => {
                            window.open('https://github.com/patchker/', '_blank');
                        }}
                    >
                        <FaGithub className="text-3xl mr-2"/> <span className={`font-masque mr-1`}>Patchker</span> on
                        Github
                    </button>
                </div>
            </div>

            <Footer/>
        </div>
    );
}


export default App;
