import {PageTitle} from '../../../_metronic/layout/core'
import {Content} from '../../../_metronic/layout/components/Content'
import {toAbsoluteUrl} from "../../../_metronic/helpers";
import {WhatIOffer} from "./components/WhatIOffer.tsx";
import {VoiceOfThePeople} from "./components/VoiceOfThePeople.tsx";
import {FancyFooter} from "./components/FancyFooter.tsx";
import React from "react";
import {CallToAction} from "./components/CallToAction.tsx";
import {motion} from "framer-motion";
import {Stats} from "./components/Stats.tsx";
import {useMousePosition} from "../core/helpers.ts";

const ProfilePage = () => {
    const {divRef, position, handleMouseMove} = useMousePosition();

    return (
        <>
            {/*<Toolbar/>*/}
            <div className={'px-20 d-flex justify-content-center vh-100'}>
                <div className='row g-5 g-xl-8 h-100 align-items-center'>
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
                            <h3 className='fs-7x  fw-bolder ls-5'>Kofi K<span
                                className={'text-primary ls-5'}>. Vincent,</span>
                            </h3>

                            <div className='mt-10 text-muted fs-2 d-flex flex-column'>
                                <span>your full-stack software developer</span>
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
                        className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'
                    >
                        <img
                            className='rounded-bottom-pill rounded-top-circle '
                            src={toAbsoluteUrl('media/avatars/profile.jpg')}
                            alt='profile'
                        />
                    </motion.div>
                </div>
            </div>
            <Content>
                <Stats/>
            </Content>
            <WhatIOffer/>
            <Content>
                <VoiceOfThePeople/>
                <CallToAction/>
            </Content>
            <FancyFooter/>
        </>
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
