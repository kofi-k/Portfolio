import React, {useEffect, useRef} from "react";
import {KTIcon} from "../../../../_metronic/helpers";
import {motion, useScroll, useTransform} from "framer-motion";
import Lenis from "lenis";

export const CallToAction = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.75, 1], [0.75, 1, 0.75]);


    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);


    return (
        <div ref={container}>
            <motion.div
                className='card mb-10 mb-xl-8 bg-primary  my-20  rounded-4   '
                style={{
                    backgroundImage: 'linear-gradient(135deg, #006AE6, #2A6DF5)',
                    scale,
                }}
            >
                <div className='card-body my-10'>
                    <div className='d-flex flex-column mx-15'>
                        <h1 className='text-start fs-4hx text-white fw-bolder mb-5 w-100'>
                            Ready to code your kick ass <span
                            className={'text-decoration-underline fst-italic d-xxl-block'}>projects to life?</span>
                        </h1>

                        <div className={'row mt-10 g-sm-5 g-xl-4 g-xxl-4 '}>
                            <div className={'col-xxl-9 col-lg-9 col-xl-9 col-md-9 col-sm-12'}>
                                <input
                                    className='form-control form-control-lg form-control-transparent rounded-pill bg-white bg-opacity-50  text-white placeholder-white  border border-white fs-3hx'
                                    type='text'
                                    name='email'
                                    placeholder='your email'
                                />
                            </div>
                            <div className={'col-xxl-3 col-lg-3 col-xl-3 col-md-3 col-sm-12'}>
                                <button
                                    className='btn btn-lg bg-white fw-bolder h-100 rounded-pill border border-white  hover-scale bg-hover-light'
                                >
                                    <KTIcon iconName='bi bi-arrow-right' className='fs-3hx text-primary mx-15'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};