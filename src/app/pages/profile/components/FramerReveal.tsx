import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

type Props = {
    children: React.ReactNode;
    width: "auto" | "100";
    className?: string;
}

export const FramerReveal = ({
                                 children,
                                 width = "auto",
                                 className = "",
                             }: Props) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible').then(
                () => mainControls.set('hidden')
            )
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={`${className} w-${width} overflow-hidden position-relative`}>
            <motion.div
                variants={
                    {
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }
                }
                initial={'hidden'}
                animate={isInView ? 'visible' : 'hidden'}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.25}}
            >
                {children}
            </motion.div>

        </div>
    );
};