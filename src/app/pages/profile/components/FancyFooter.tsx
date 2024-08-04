import {Content} from "../../../../_metronic/layout/components/Content.tsx";
import React from "react";
import {footerItems, FooterItemsProps, socials} from "../../core/data.ts";
import FramerMagnetic from "../../../animation/FramerMagnetic.tsx";
import {FramerReveal} from "../../../animation/FramerReveal.tsx";

export const FancyFooter = () => {
    return (
        <>
            <div className={'custom-separator mt-20'}/>
            <div className={'backlight-top'}>
                <Content>
                    <div className={'row g-5 g-xl-8 my-10 mb-10'}>
                        <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                            <div className={'d-flex flex-column flex-start'}>
                                <FramerReveal className={'w-auto'}>
                                    <h3
                                        className='fs-2hx fw-bolder'>kofi<span className={'text-primary'}>.</span>k
                                    </h3>
                                </FramerReveal>
                                <FramerReveal className={'w-auto'}>
                                    <div
                                        className='mt-10 fs-6 fw-light me-20 d-flex flex-column '>
                                        {'Beyond my skills, I bring an insane level of dedication and commitment to see your project through. ' +
                                            'With each project, I push my work to new horizons, always putting quality first. Always exploring...'}
                                    </div>
                                </FramerReveal>
                            </div>

                            <div className={'d-flex flex-column mt-10'}>
                                <span className={'text-uppercase fw-bolder mb-2'}>Let's connect</span>
                                <div className={'row g-xl-5 g-4 g-xxl-8 '}>
                                    {
                                        socials.map((item, index) => (
                                            <FramerMagnetic className={'col-auto'}>
                                                <a href={item.href}
                                                   className={`btn btn-icon btn-outline btn-lg rounded border-white`}>
                                                    {item.icon === 'code' ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2.05em"
                                                             height="1em" viewBox="0 0 256 125">
                                                            <path fill="#fabc05"
                                                                  d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"/>
                                                            <path fill="#109d58"
                                                                  d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"/>
                                                            <path fill="#e94436"
                                                                  d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"/>
                                                            <path fill="#4385f3"
                                                                  d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"/>
                                                        </svg>
                                                        :
                                                        item.icon === 'figma' ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.67em"
                                                                 height="1em" viewBox="0 0 256 384">
                                                                <path fill="#0acf83"
                                                                      d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"/>
                                                                <path fill="#a259ff"
                                                                      d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"/>
                                                                <path fill="#f24e1e"
                                                                      d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"/>
                                                                <path fill="#ff7262"
                                                                      d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"/>
                                                                <path fill="#1abcfe"
                                                                      d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"/>
                                                            </svg>
                                                            :
                                                            <i className={`bi bi-${item.icon} fs-2x text-white`}></i>
                                                    }
                                                </a>
                                            </FramerMagnetic>
                                        ))
                                    }
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
    return (
        <div className={'d-flex flex-column flex-start'}>
            <FramerReveal className={'w-auto mb-3'}>
                <span className={' px-2 py-2 text-start fs-2 fw-bolder'}>{title}</span>
            </FramerReveal>
            <div className={'d-flex flex-column align-items-start gap-xl-2 gap-xxl-4'}>
                {
                    title === 'Contact' &&
                    contactDetails?.map((contact, index) => (
                        <FramerReveal className={'w-auto'}>
                        <span className={'bg-hover-light rounded text-start px-2 py-2 text-gray-700'}>
                               <i className={`bi bi-${items[index]} me-2`}/>
                            {
                                index === 0 ?
                                    <a href={`mailto:${contact}`} className={'text-gray-700'}>Email</a> :
                                    index === 1 ?
                                        <a href={`tel:${contact}`} className={'text-gray-700'}>{contact}</a> :
                                        <a href={contact} className={'text-gray-700'}>WhatsApp</a>

                            }
                        </span>
                        </FramerReveal>
                    ))
                }
                {
                    items
                        .filter((item, index) => title !== 'Contact')
                        .map((item, index) => (
                            <FramerReveal className={'w-auto'}>
                            <span
                                className='bg-hover-light rounded text-start px-2 py-2 text-gray-700'>
                                {item}
                            </span>
                            </FramerReveal>
                        ))
                }
            </div>
        </div>
    );
};

