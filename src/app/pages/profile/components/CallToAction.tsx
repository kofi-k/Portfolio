import React from "react";
import {KTIcon} from "../../../../_metronic/helpers";

export const CallToAction = () => {
    return (
        <>
            <div className='card mb-5 mb-xl-8 bg-primary  my-20 kofi-masked-cta kofi-masked-block '
                 style={{
                     backgroundImage: 'linear-gradient(135deg, #006AE6, #2A6DF5)',
                 }}
            >
                <div className='card-body my-10'>
                    <div className='d-flex flex-center flex-column flex-column-fluid mx-15'>
                        <h1 className='text-start fs-4hx text-white fw-bolder mb-5 w-100'>
                            Ready to experience some <br/><span
                            className={'text-decoration-underline fst-italic'}>magic?</span>
                        </h1>

                        <div className={'d-flex flex-row gap-4 justify-content-between w-100 mt-10'}>
                            <div className={'w-100'}>
                                <input
                                    className='form-control form-control-lg form-control-transparent rounded-pill bg-white bg-opacity-50  text-white placeholder-white  border border-white fs-3hx'
                                    type='text'
                                    name='email'
                                    placeholder='youremail@example.com'
                                />
                            </div>
                            <button
                                className='btn btn-lg bg-white fw-bolder h-auto rounded-pill border border-white  hover-scale bg-hover-light'
                            >
                                <KTIcon iconName='bi bi-arrow-right' className='fs-3hx text-primary mx-10'/>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={'kofi-masked-cta-content kofi-masked-content at-top-right '}>*/}
            {/*    <p>*/}
            {/*        Let's craft a visual identity that ignites passion and loyalty. ✨*/}
            {/*    </p>*/}
            {/*</div>*/}
        </>
    );
};