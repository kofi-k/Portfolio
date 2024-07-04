import {StatsWidget, StatsWidgetProps} from "./StatsWidget.tsx";
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
        <div className={'row g-5 g-xl-8 mt-7 w-100 mb-10'}>
            {
                profileStats.map((stat, index) => (
                    <motion.div ref={ref} className={'col-lg-3 col-md-3 col-sm-6'}
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

const profileStats: StatsWidgetProps[] = [
    {
        className: 'bg-light-primary',
        title: 'Happy Clients',
        value: '20+',
        color: ''
    },
    {
        className: 'bg-light-danger',
        title: 'Projects Completed',
        value: '50',
        color: ''
    },
    {
        className: 'bg-light-success',
        title: 'Awards Won',
        value: '2',
        color: ''
    },
    {
        className: 'bg-light-info',
        title: 'Years of Experience',
        value: '1+',
        color: 'primary'
    }
]