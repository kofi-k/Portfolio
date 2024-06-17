import {FramerReveal} from "./FramerReveal.tsx";
import {Content} from "../../../../_metronic/layout/components/Content.tsx";
import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

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
        <>
            <div className={'separator separator-styled my-20 '}/>
            <div className={'backlight-both'}>
                <Content>
                    <FramerReveal className={'w-auto'}>
                        <h2 className={'display-3 fw-bold mb-5 text-center'}>What I Can Do For You</h2>
                    </FramerReveal>
                    <FramerReveal className={'w-auto'}>
                        <div className={'d-flex flex-column '}>
                            <span className={'text-center fs-3 '}>Unleash the full spectrum of magic </span>
                            <span className={'text-center fs-3 '}>for your web and mobile development needs.</span>
                        </div>
                    </FramerReveal>
                </Content>
                <Content>
                    <div ref={ref} className='row g-5 g-xl-8 mt-10 '>
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
                                    className={'col-lg-4 col-md-4 col-sm-6'}>
                                    <div className={'card card-custom card-stretch border'}>
                                        <div className={'card-body'}>
                                            <h3 className={'card-title fw-bolder fs-2 text-start'}>{item.title}<span
                                                className={'text-primary fs-1'}>.</span></h3>
                                            <div className={'my-20'}/>
                                            <div className={'align-items-baseline'}>
                                                <p className={'text-start '}>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </Content>
            </div>
            <div className={'separator separator-solid separator-backlight-bottom backlight-red my-20 '}/>
        </>
    );
};


const whatIdo: Props[] = [
    {
        title: 'Web Applications',
        description: 'I have been working as a web developer for 2 years. I have a lot of experience in developing full stack web applications using React, TypeScript, and DotNet. for backend services'
    },
    {
        title: 'Android Development',
        description: 'I have been working as a mobile developer for 3 years. I have a lot of experience in developing mobile applications using Kotlin and Jetpack Compose.'
    },
    {
        title: 'UI/UX Design',
        description: 'I have been working as a UI/UX designer for 2 years. I have a lot of experience in designing user interfaces and user experiences for web and mobile applications.'
    },
]