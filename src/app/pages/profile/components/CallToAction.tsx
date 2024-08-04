import React from "react";
import {KTIcon} from "../../../../_metronic/helpers";

export const CallToAction = () => {
    return (
        <>
            <div
                className='card mb-10 mb-xl-8 bg-primary  my-20  rounded-4  kofi-masked-cta kofi-masked-block '
                style={{
                    backgroundImage: 'linear-gradient(135deg, #006AE6, #2A6DF5)',
                }}
            >
                <div className='card-body my-10'>
                    <div className='d-flex flex-column mx-15'>
                        <h1 className='text-start fs-4hx text-white fw-bolder mb-5 w-100'>
                            Ready to experience some <span
                            className={'text-decoration-underline fst-italic d-xxl-block'}>magic?</span>
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
                {/*<div className={'kofi-masked-cta-content  kofi-masked-content at-top-right '}>*/}
                {/*    <p className={'fs-2x in-view'}>*/}
                {/*        I will code your kick ass projects to reality ✨*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </>
    );
};