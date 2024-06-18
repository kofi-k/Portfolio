import {Content} from "../../../../_metronic/layout/components/Content.tsx";
import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

export const FancyFooter = () => {
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
            <div className={'separator separator-solid separator-backlight-bottom  my-20 '}/>
            <Content>
                <div ref={ref} className={'row g-5 g-xl-8 '}>
                    <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                        <motion.h3
                            animate={isInView ? 'visible' : 'hidden'}
                            initial={'hidden'}
                            variants={{
                                hidden: {scale: 0.7},
                                visible: {scale: 1}
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.75,
                                ease: "linear",
                            }}
                            className='fs-2hx fw-bolder'>kofi k.
                        </motion.h3>

                        <motion.div
                            ref={ref}
                            animate={isInView ? 'visible' : 'hidden'}
                            initial={'hidden'}
                            variants={{
                                hidden: {x: 50},
                                visible: {x: 1}
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.75,
                                ease: "linear",
                            }}

                            className='mt-10 fs-6 fw-light me-20 '>
                            A skilled android and a full-stack software developer, UI designer and
                            chess lover from Accra, Ghana.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed
                            cursus ante dapibus diam. Sed nisi.
                        </motion.div>

                        <div className={'d-flex flex-column mt-10'}>
                            <span className={'text-uppercase fw-bolder'}>Follow me</span>
                            {/*    todo socials*/}

                        </div>

                    </div>

                    <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                        <div className={'d-flex flex-row justify-content-between gap-5'}>
                            {
                                footerItems.map((item, index) => (
                                    <FooterItems title={item.title} items={item.items}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </Content>

            <div className={'separator separator-solid separator-backlight-bottom backlight-red my-20 '}/>

        </>
    );
};

type FooterItemsProps = {
    title: string;
    items: string[];
    index?: number;
}

const footerItems: FooterItemsProps[] = [
    {
        title: 'Services',
        items: ['Mobile Development', 'Web Applications', 'UI/UX Design']
    },
    {
        title: 'Tech Stack',
        items: ['Kotlin', 'Jetpack Compose', 'React', 'TypeScript', 'DotNet',]
    },
    {
        title: 'Contact',
        items: []
    },
]

const FooterItems: React.FC<FooterItemsProps> = ({title, items, index}) => {
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
        <motion.div
            ref={ref}
            // slide in from right delay by index * 0.25
            animate={isInView ? 'visible' : 'hidden'}
            initial={'hidden'}
            variants={{
                hidden: {opacity: 0, x: 80},
                visible: {opacity: 1, x: 0},
            }}
            transition={{
                type: 'tween',
                duration: index ? index * 0.25 : 0.25,
                ease: "linear",
                delay: 0.25 * (index ?? 0)
            }}
            className={'d-flex flex-column'}>
            <span className={' text-start px-2 py-2 text-start fs-2 fw-bolder'}>{title}</span>
            <div className={'d-flex flex-column align-items-start'}>
                {
                    items.map((item, index) => (
                        <motion.span
                            // scale in from 0.7
                            animate={isInView ? 'visible' : 'hidden'}
                            initial={'hidden'}
                            variants={{
                                hidden: {scale: 0.4},
                                visible: {scale: 1}
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.75,
                                ease: "linear",
                            }}
                            className='bg-hover-light rounded-1 text-start px-2 py-2 text-gray-700'>
                            {item}
                        </motion.span>
                    ))
                }
            </div>
        </motion.div>
    );
};