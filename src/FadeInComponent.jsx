import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cube3 from './Cube3.jsx'
const FadeInComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Element pojawi się tylko raz
        rootMargin: '-100px 0px', // Rozpocznij animację przed wejściem elementu do viewportu
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <Cube3/>
        </motion.div>
    );
};

export default FadeInComponent;
