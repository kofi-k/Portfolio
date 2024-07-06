import {motion, useAnimation, useInView} from "framer-motion";
import {KTIcon, toAbsoluteUrl} from "../../../../_metronic/helpers";
import {FramerReveal} from "./FramerReveal.tsx";
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
        <>
            <FramerReveal>
                <div className={'d-flex flex-column my-10 '}>
                    <h2 className={'display-3 fw-bold mb-5 text-center'}>Voice Of The People</h2>
                    <span className={'text-center fs-3 '}>What my clients say about my work</span>
                </div>
            </FramerReveal>
            <div className={'row g-5 g-xl-8 mt-7 align-items-center h-100'}>
                <div className={'col-lg-6 col-md-6 col-sm-12 justify-content-center'}>
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
                        className='rounded-bottom-pill  rounded-top-circle  h-100 bgi-no-repeat bgi-position-center bgi-size-cover bgi'
                        src={toAbsoluteUrl('media/img-1.jpg')}
                        alt='img'
                    />
                </div>
                <div
                    className={'col-lg-6 col-md-6 col-sm-12 g-5 mb-20'}
                >
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
                                className={'mb-5  '}>
                                <ReviewCard nameOfClient={item.nameOfClient} clientPosition={item.clientPosition}
                                            clientReview={item.clientReview}
                                    // color={item.color}
                                            rating={item.rating}/>
                            </motion.div>
                        ))
                    }

                </div>

            </div>
        </>
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
            className={`card card-custom card-stretch rounded-4 border  hover-elevate-up card-gradient`}>
            <div
                style={{
                    background: `radial-gradient(50vw circle at ${position.x}px ${position.y}px, #F5F7FA09, transparent 50%)`,
                }}
                className={'card-body '}>
                <p className={`text-start fs-5 fw-light tex text-gray-800`}>{`"${props.clientReview}"`}</p>
                <div className={'d-flex flex-row justify-content-between align-items-baseline '}>
                    <div className={'d-flex flex-column'}>
                        <h4 className={`fw-bolder fs-2 text-start mt-5 text-${props.color}`}>{props.nameOfClient}</h4>
                        <span
                            className={`text-start fs-7 text-uppercase text-${props.color}`}>{props.clientPosition}</span>
                    </div>

                    <div className={'row  justify-content-end align-baseline align-items-baseline'}>
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
        nameOfClient: 'John Doe',
        clientPosition: 'CEO, Doe Inc.',
        clientReview: 'Kofi is a great developer. He is very skilled and has a lot of experience in developing web and mobile applications. I highly recommend him for your development needs.',
        rating: 5,
        color: 'primary'
    },
    {
        nameOfClient: 'Jane Doe',
        clientPosition: 'CTO, Doe Inc.',
        clientReview: 'Kofi is a great designer. He has a lot of experience in designing user interfaces and user experiences for web and mobile applications. I highly recommend him for your design needs.',
        rating: 4,
        color: 'success'
    },
    {
        nameOfClient: 'Michael Doe',
        clientPosition: 'COO, Doe Inc.',
        clientReview: 'Kofi is a great chess player. He has a lot of experience in playing chess and has won many tournaments. I highly recommend him for your chess needs.',
        rating: 3,
        color: 'info'
    },
]
