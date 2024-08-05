import {PageTitle} from '../../../_metronic/layout/core'
import {Content} from '../../../_metronic/layout/components/Content'
import {toAbsoluteUrl} from "../../../_metronic/helpers";
import {WhatIOffer} from "./components/WhatIOffer.tsx";
import {VoiceOfThePeople} from "./components/VoiceOfThePeople.tsx";
import {FancyFooter} from "./components/FancyFooter.tsx";
import React, {useEffect, useRef} from "react";
import {CallToAction} from "./components/CallToAction.tsx";
import {motion, useScroll} from "framer-motion";
import {Stats} from "./components/Stats.tsx";
import {useMousePosition} from "../core/helpers.ts";
import {FlipLink} from "../../animation/Fliplink.tsx";
import Lenis from "lenis";
import {WorkPortfolio} from "./components/WorkPortfolio.tsx";

const ProfilePage = () => {
    const {divRef, position, handleMouseMove} = useMousePosition();
    const container = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div ref={container} className={'d-flex flex-column'}>
            {/*<Toolbar/>*/}
            <div className={'px-20 d-flex justify-content-center vh-100'}>
                <div className='row g-10 g-xl-8 align-items-center'>
                    <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12'>
                        <motion.div
                            initial={{x: -50, opacity: 0, scale: 0}}
                            animate={{x: 0, opacity: 1, scale: 1}}
                            transition={{
                                type: 'spring',
                                duration: 1,
                                ease: 'easeInOut',
                                delay: 0.55,
                                damping: 10,
                                stiffness: 100
                            }}
                            ref={divRef}
                            onMouseMove={handleMouseMove}>
                        <span className={'text-uppercase text-muted ls-1'}>
                            Who am I? I am
                        </span>
                            <FlipLink href={'#'} children={'Kofi.K'} className={'text-white fs-7x fw-bolder'}/>
                            <FlipLink href={'#'} children={'Vincent'} className={'text-primary fs-7x fw-bolder'}/>
                            <div className='d-flex flex-row mt-10 text-muted fs-2 d-flex flex-column'>
                                <span>a full-stack software developer</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{x: 50, opacity: 0, scale: 0.7}}
                        animate={{x: 0, opacity: 1, scale: 1}}
                        transition={{
                            type: 'spring',
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 0.75,
                            damping: 10,
                            stiffness: 100
                        }}
                        className='col-xl-5 col-lg-5 col-md-6 col-sm-12'
                    >
                        <img
                            className='rounded-bottom-pill rounded-top-circle w-xxl-550px h-xxl-550px w-xl-100 h-xl-100 min-w-300px min-h-300px w-sm-50px '
                            src={toAbsoluteUrl('media/avatars/profile.jpg')}
                            alt='profile'
                        />


                    </motion.div>
                </div>
            </div>
            <Content>
                <Stats/>
            </Content>
            <div className={'custom-separator mt-20'}/>
            <WhatIOffer/>
            <div className={'custom-separator my-10'}/>
            <WorkPortfolio/>
            <div className={'custom-separator'}/>
            <Content>
                <VoiceOfThePeople/>
                {/*<TechStackNTools/>*/}
                <CallToAction/>
            </Content>
            <div className={'custom-separator mt-20'}/>
            <FancyFooter/>
            <div className={'custom-separator '}/>
        </div>
    )
}


const ProfileWrapper = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>{'Profile'}</PageTitle>
            <ProfilePage/>
        </>
    )
}

export default ProfileWrapper
