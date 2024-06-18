import {PageTitle} from '../../../_metronic/layout/core'
import {Toolbar} from '../../../_metronic/layout/components/toolbar/Toolbar'
import {Content} from '../../../_metronic/layout/components/Content'
import {toAbsoluteUrl} from "../../../_metronic/helpers";
import {WhatIOffer} from "./components/WhatIOffer.tsx";
import {VoiceOfThePeople} from "./components/VoiceOfThePeople.tsx";
import {FancyFooter} from "./components/FancyFooter.tsx";
import React from "react";
import {CallToAction} from "./components/CallToAction.tsx";
import {motion} from "framer-motion";
import {Stats} from "./components/Stats.tsx";

const ProfilePage = () => (
    <>
        <Toolbar/>
        <Content>
            <div className='row g-5 g-xl-8 h-100'>
                <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12'>
                    <motion.div
                        initial={{x: -50}}
                        animate={{x: 0,}}
                        transition={{type: 'tween', duration: 0.75, ease: 'linear'}}
                        className={'card rounded-4 border'}>
                        <div className='card-body'>
                        <span className={'text-uppercase ls-1'}>
                            Who am I? I am
                        </span>
                            <h3 className='display-3 fw-bolder'>Kofi K. <span className={'text-primary'}>Vincent,</span>
                            </h3>

                            <div className='mt-20 fs-3'>
                                A skilled android and a full-stack software developer, UI designer and
                                chess lover from Accra, Ghana.
                            </div>
                        </div>
                    </motion.div>

                    <div
                        className='row g-5 g-xl-8 mt-2 '>
                        <motion.div
                            initial={{y: -10, scale: 1.2}}
                            animate={{y: 0, scale: 1}}
                            transition={{type: 'tween', duration: 0.75, ease: 'linear'}}

                            className='col-xl-6 rounded-circle d-lg-flex d-md-none d-sm-none d-xxl-flex'>
                            <img
                                className='rounded-start-pill h-120px w-100'
                                src={toAbsoluteUrl('media/img-2.jpg')}
                                alt='img'
                            />
                        </motion.div>
                        <motion.div
                            initial={{y: -10, scale: 1.2}}
                            animate={{y: 0, scale: 1}}
                            transition={{type: 'tween', duration: 0.75, ease: 'linear'}}
                            className='col-xl-6 rounded-4 d-lg-flex d-md-none d-sm-none d-xxl-flex'>
                            <img
                                className='rounded-end-pill h-120px w-100'
                                src={toAbsoluteUrl('media/img-3.jpg')}
                                alt='img'
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{x: 50}}
                    animate={{x: 0}}
                    transition={{type: 'tween', duration: 0.75, ease: 'linear'}}
                    className='col-xl-5 col-lg-5 col-md-6 col-sm-12'
                >
                    <img
                        className='rounded-bottom-pill rounded-top-circle h-100 w-100 bgi-no-repeat bgi-position-center bgi-size-cover'
                        src={toAbsoluteUrl('media/avatars/profile.jpg')}
                        alt='profile'
                    />
                </motion.div>
            </div>
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


const ProfileWrapper = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>{'Profile'}</PageTitle>
            <ProfilePage/>
        </>
    )
}

export default ProfileWrapper
