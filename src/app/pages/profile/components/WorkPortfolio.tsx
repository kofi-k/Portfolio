import {motion} from "framer-motion";
import {FramerReveal} from "../../../animation/FramerReveal.tsx";
import React from "react";

export const WorkPortfolio = () => {
    return (
        <div className={'d-flex flex-column flex-center vh-100 backlight-bottom '}>
            <FramerReveal className={'w-auto mt-15'}>
                <h2 className={'display-3 fw-bold '}>Work portfolio</h2>
            </FramerReveal>
            <motion.div
                className={'d-flex flex-row flex-wrap gap-5 mt-10'}
                animate={{
                    x: [0, 10, -10, 10, -10, 0],
                    rotate: [0, 5, -5, 5, -5, 0],
                }}
                transition={{
                    duration: 2, // Duration of the animation
                    repeat: Infinity, // Repeat the animation infinitely
                    ease: 'easeInOut', // Easing function for smooth animation
                }}
            >
                showing soon...
            </motion.div>
            <div className={''}/>
        </div>
    );
};