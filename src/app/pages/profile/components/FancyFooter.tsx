import {Content} from "../../../../_metronic/layout/components/Content.tsx";
import React, {useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import {footerItems, FooterItemsProps, socials} from "../../core/data.ts";

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

            <div className={'custom-separator mt-20'}/>
            <div className={'backlight-top'}>
                <Content>
                    <div ref={ref} className={'row g-5 g-xl-8 my-10 mb-10'}>
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
                                className='fs-2hx fw-bolder'>kofi k<span className={'text-primary'}>.</span>
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

                                className='mt-10 fs-6 fw-light me-20 d-flex flex-column '>
                                {'Beyond my skills, I bring an insane level of dedication and commitment to see your project through. ' +
                                    'With each project, I push my work to new horizons, always putting quality first. Always exploring...'}
                            </motion.div>

                            <div className={'d-flex flex-column mt-10'}>
                                <span className={'text-uppercase fw-bolder'}>Let's connect</span>
                                <div className={'mt-3'}>
                                    <ul className={'kofi-socials-list '}>
                                        {
                                            socials.map((item, index) => (
                                                <li>
                                                    <a href={item.href} className={`kofi-socials-${item.icon}`}>
                                                        <i/>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                            <div className={'d-flex flex-row justify-content-between gap-5'}>
                                {
                                    footerItems.map((item, index) => (
                                        <FooterItems title={item.title} items={item.items}
                                                     contactDetails={item.contactDetails}/>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </Content>
            </div>
            <div className={'custom-separator '}/>

        </>
    );
};


const FooterItems: React.FC<FooterItemsProps> = ({title, items, index, contactDetails}) => {
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
                    title === 'Contact' &&
                    contactDetails?.map((contact, index) => (
                        <span className={'bg-hover-light rounded-1 text-start px-2 py-2 text-gray-700'}>
                               <i className={`bi bi-${items[index]} me-2`}/>
                            {
                                index === 0 ?
                                    <a href={`mailto:${contact}`} className={'text-gray-700'}>Email</a> :
                                    index === 1 ?
                                        <a href={`tel:${contact}`} className={'text-gray-700'}>{contact}</a> :
                                        <a href={contact} className={'text-gray-700'}>WhatsApp</a>

                            }</span>
                    ))
                }
                {
                    items
                        .filter((item, index) => title !== 'Contact')
                        .map((item, index) => (
                            <motion.span
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

