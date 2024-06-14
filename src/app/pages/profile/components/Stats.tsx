import {profileStats} from "./ProfileStats.tsx";
import {StatsWidget} from "./StatsWidget.tsx";
import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

export const Stats = () => {
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
        <div className={'row g-5 g-xl-8 mt-7 w-100'} ref={ref}>
            {
                profileStats.map((stat, index) => (
                    <motion.div className={'col-lg-3 col-md-3 col-sm-6'}
                                animate={isInView ? 'visible' : 'hidden'}
                                initial={'hidden'}
                                variants={{
                                    hidden: {scale: 0.7},
                                    visible: {scale: 1}
                                }}
                                transition={{
                                    type: 'tween',
                                    duration: index * 0.25,
                                    ease: "linear",
                                }}
                    >
                        <StatsWidget
                            className={''}
                            title={stat.title}
                            value={stat.value}
                            color={stat.color}
                            key={`${stat.title}-${index}`}
                        />
                    </motion.div>
                ))
            }
        </div>
    );
};