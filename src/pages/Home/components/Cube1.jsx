import React, {useState, Suspense, useEffect, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF, Environment, Loader} from '@react-three/drei';
import {useSpring, a} from '@react-spring/three';
import BackgroundPlane from './BackgroundPlane.jsx'

function Model({modelPath, onLoaded}) {
    const {scene} = useGLTF(modelPath);
    const ref = useRef();
    const [isAnimationComplete, setAnimationComplete] = useState(false);
    const [finalRotation, setFinalRotation] = useState([0, 0, 0]);

    useEffect(() => {
        if (scene) {
            onLoaded();
        }
    }, [scene, onLoaded]);


    const {scale, position, rotation} = useSpring({
        from: {scale: [0.5, 0.5, 0.5], position: [0, 0, 0], rotation: [0, 0, 0]},
        to: async (next) => {
            // Sekwencja animacji
            await next({
                position: [0, 0, 0],
                rotation: [0, Math.PI * 2, 0],
                config: {duration: 3000, mass: 1, tension: 210, friction: 20}
            });
            await next({
                position: [0, 0, 0],
                config: {duration: 1000, mass: 1, tension: 210, friction: 20}
            });
            // Końcowa rotacja
            await next({
                position: [0, 0, 0],
                rotation: [0.1, Math.PI * 2 - 0.2, 0],
                config: {mass: 1, tension: 190, friction: 25},
                onRest: () => {
                    setAnimationComplete(true);
                    setFinalRotation([0.1, Math.PI * 2 - 0.2, 0]);

                }
            });
        },
        config: {duration: 4000},
    });

    useFrame((state) => {
        if (isAnimationComplete && ref.current) {
            const x = (state.mouse.x * Math.PI) / 20;
            const y = (state.mouse.y * Math.PI) / 20;
            ref.current.rotation.y = finalRotation[1] + x;
            ref.current.rotation.x = finalRotation[0] - y;


        }
    });

    return (
        <a.primitive
            ref={ref}
            object={scene}
            scale={scale}
            rotation={rotation}
            position={position}

        />
    );
}

function Lights() {
    const pointLightRef = useRef();

    useFrame((state) => {
        const x = state.mouse.x;
        const y = state.mouse.y;
        if (pointLightRef.current) {
            pointLightRef.current.position.x = x;
            pointLightRef.current.position.y = y;
            pointLightRef.current.position.z = 0;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5}/>
            <pointLight ref={pointLightRef} position={[1, 1, 1]} intensity={3} castShadow/>
        </>
    );
}


function Scene({modelPath}) {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoaded = () => {
        setIsLoading(false);
    };
    return (
        <>
            {isLoading && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10
                }}>
                    <img src="./loading2.gif" width="150px" alt="Ładowanie..."/>
                </div>
            )}

            <Suspense fallback={null}>
                <Canvas antialias={true} style={{width: '100%', height: '100%', backgroundColor: '#000000'}}>
                    <Lights/>
                    <Model modelPath={modelPath} onLoaded={handleLoaded}/>
                    <BackgroundPlane/>

                    <pointLight position={[0.5, 2, 0]} intensity={20} castShadow/>

                    <Environment background={false} files="mapa8.hdr" path="/"/>
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}/>
                </Canvas>
            </Suspense>
        </>
    );
}


export default function Animation() {


    return (
        <>
            <div className={`w-full hidden lg:block element relative h-full overflow-hidden bg-black`}>
                <div className={` h-full transition-opacity duration-500 `}>
                    <Scene modelPath="v74.glb"/>
                </div>


            </div>

        </>
    );
}