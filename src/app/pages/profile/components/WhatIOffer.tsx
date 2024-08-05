import {FramerReveal} from "../../../animation/FramerReveal.tsx";
import {Content} from "../../../../_metronic/layout/components/Content.tsx";
import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import {OfferCard} from "./OfferCard.tsx";

type Props = {
    title: string;
    description: string;
}
export const WhatIOffer = () => {
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
        <div className={'d-flex flex-column flex-center backlight-top mb-20 vh-100 '}>
            <FramerReveal className={'w-auto mt-20'}>
                <div className={'display-3 fw-bold mb-5'}>What I can help you with...</div>
            </FramerReveal>
            <FramerReveal className={'w-auto'}>
                <span className={'fs-3'}>I'm here to guarantee you quality </span>
            </FramerReveal>
            <FramerReveal className={'w-auto'}>
                <span className={'fs-3'}>and delightful applications with subtle animations.✨</span>
            </FramerReveal>
            <div className={''}>
                <Content>
                    <div ref={ref} className='row g-5 g-xl-8 mt-20'>
                        {
                            whatIdo.map((item, index) => (
                                <motion.div
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
                                    className={'col-lg-4 col-md-4 col-sm-6 '}>
                                    <OfferCard
                                        title={item.title}
                                        description={item.description}
                                    />
                                </motion.div>
                            ))
                        }
                    </div>
                </Content>
            </div>
        </div>
    );
};


const whatIdo: Props[] = [
    {
        title: 'Android Apps',
        description: 'I build scalable and maintainable android applications with seamlessly slapping user interfaces. ' +
            'My focus is on clean architecture for robustness and high performance. I build ' +
            'with Kotlin and Jetpack Compose.'
    },
    {
        title: 'Enterprise-Grade Web Apps',
        description: 'Helping organizations to achieve more and standout in the digital era by ' +
            'leveraging de-facto frameworks to create modern, scalable web solutions. ' +
            'No nonsense, just pure cutting-edge technology.'
    },
    {
        title: 'Design',
        description: 'With a passion for design in my bones, I have a solid track record of crafting ' +
            'and delivering lovely joubley digital designs for both web and mobile platforms.'
    },
]