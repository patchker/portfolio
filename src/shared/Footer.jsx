import React from 'react';

function Footer() {
    return (
        <div className={`pt-20 bg-gradient-to-b from-black to-blue-600 w-full`}>
            <div className="flex flex-col w-full min-h-28 bg-black border-t-2 border-blue-600 shadow-xl text-white items-center justify-center">

                <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                    <div className="hidden sm:flex sm:flex-1"></div>

                    <div className="flex justify-center font-protest text-center my-2 sm:my-0">
                        by <span className="font-masque px-1">Patchker </span> <span>2024</span>
                    </div>

                    <div className="flex-1 text-center sm:text-right font-protest pr-0 sm:pr-4 my-2 sm:my-0">
                        Contact: siolapatryk7@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );


}


export default Footer;
