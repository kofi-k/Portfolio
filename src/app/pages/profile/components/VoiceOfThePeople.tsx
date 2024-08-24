import {motion, useAnimation, useInView} from "framer-motion";
import {KTIcon, toAbsoluteUrl} from "../../../../_metronic/helpers";
import {FramerReveal} from "../../../animation/FramerReveal.tsx";
import React, {useEffect} from "react";
import {useMousePosition} from "../../core/helpers.ts";

type Props = {
    nameOfClient: string;
    clientPosition: string;
    clientReview: string;
    rating: number;
    color?: string;
}
export const VoiceOfThePeople = () => {

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
        <div className={'d-flex flex-column flex-center'}>
            <FramerReveal className={'w-auto mt-20'}>
                <h2 className={'display-3 fw-bold text-center'}>...hear what the people say</h2>
            </FramerReveal>
            <FramerReveal className={'w-auto mb-10'}>
                <span className={'fs-3 '}>What clients say about me and my work</span>
            </FramerReveal>
            <div className={'row g-5 g-xl-8 mt-7 align-items-center '}>
                <div
                    className={'col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12 justify-content-center d-none d-lg-flex '}>
                    <motion.img
                        animate={isInView ? 'visible' : 'hidden'}
                        initial={'hidden'}
                        variants={{
                            hidden: {opacity: 0, scale: 0.87},
                            visible: {opacity: 1, scale: 1},
                        }}
                        transition={{
                            type: 'tween',
                            duration: 0.75,
                            ease: 'linear',
                        }}
                        className='rounded-bottom-pill rounded-top-circle w-xxl-75 h-xxl-75 w-xl-75 h-xl-75 min-w-200px min-h-200px w-sm-50px '
                        src={toAbsoluteUrl('media/avatars/profile.jpg')}
                        alt='img'
                    />
                </div>
                <div className={'col-lg-6 col-xl-6 col-xxl-6 col-md-12 col-sm-12 g-5 mb-20 mb-xxl-20 d-md-'}>
                    <div className={'row g-4'}>
                        {
                            reviews.map((item, index) => (
                                <motion.div
                                    ref={ref}
                                    animate={isInView ? 'visible' : 'hidden'}
                                    initial={'hidden'}
                                    variants={{
                                        // slide in from right
                                        hidden: {opacity: 0, x: 80},
                                        visible: {opacity: 1, x: 0},
                                    }}
                                    transition={{
                                        type: 'tween',
                                        duration: index * 0.25,
                                        ease: "linear",
                                    }}
                                    className={'col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-6'}>
                                    <ReviewCard nameOfClient={item.nameOfClient} clientPosition={item.clientPosition}
                                                clientReview={item.clientReview}
                                                rating={item.rating}/>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

// review card component
const ReviewCard = (props: Props) => {
    const {divRef, position, handleMouseMove} = useMousePosition();

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`card  rounded-4 border  hover-elevate-up  bg-light`}>
            <div
                style={{
                    background: `radial-gradient(50vw circle at ${position.x}px ${position.y}px, #F5F7FA09, transparent 50%)`,
                }}
                className={'card-body '}>
                <p className={`text-start fs-5 fw-light tex text-gray-800`}>{`"${props.clientReview}"`}</p>
                <div
                    className={'d-flex flex-row justify-content-between align-items-baseline align-text-bottom align-baseline bottom-0 bottom'}>
                    <div className={'d-flex flex-column'}>
                        <h4 className={`fw-bolder fs-2 text-start mt-5 text-${props.color}`}>{props.nameOfClient}</h4>
                        <span
                            className={`text-start fs-7 text-uppercase text-${props.color}`}>{props.clientPosition}</span>
                    </div>

                    <div
                        className={'row  justify-content-end '}>
                        {[...Array(5)].map((_, index) => (
                            <div className={'col-1'}>
                                <KTIcon
                                    key={index}
                                    iconName={'star'}
                                    className={index < props.rating ? `text-warning` : 'text-secondary'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


const reviews: Props[] = [

    {
        nameOfClient: 'Maloe Nartey',
        clientPosition: 'CEO, M&M Medical Center',
        clientReview: `Kofi is the hardest working person you'll ever find. All he cares about is getting the job done and done well. He's a great asset to any team.`,
        rating: 4,
        color: 'success'
    },
    {
        nameOfClient: 'Siddy Innocent',
        clientPosition: 'CEO - Labelkin, SafeNet ',
        clientReview: `This guy is a genie🧞out of the bottle. I never thought quality work and elegant code could co-exist. I know my go-to dev for any project now💯`,
        rating: 5,
        color: 'info'
    },
]
