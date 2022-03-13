import React from "react";
import { motion } from 'framer-motion'

const MotionWrap = (Component: React.FC) => function HOC() {
    return (
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                <Component/>
            </motion.div>
    );
};

export default MotionWrap;