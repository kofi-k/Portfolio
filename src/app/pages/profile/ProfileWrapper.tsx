import {PageTitle} from '../../../_metronic/layout/core'
import {Toolbar} from '../../../_metronic/layout/components/toolbar/Toolbar'
import {Content} from '../../../_metronic/layout/components/Content'
import {toAbsoluteUrl} from "../../../_metronic/helpers";
import {StatsWidget} from "./StatsWidget.tsx";
import {profileStats} from "./ProfileStats.tsx";
import {WhatIOffer} from "./WhatIOffer.tsx";
import {VoiceOfThePeople} from "./VoiceOfThePeople.tsx";
import {FancyFooter} from "./FancyFooter.tsx";

const ProfilePage = () => (
    <>
        <Toolbar/>
        <Content>
            <div className='row g-5 g-xl-8 h-100'>
                <div className='col-xl-7 '>
                    <div className={'card rounded-4 '}>
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
                    </div>

                    <div className='row g-5 g-xl-8 mt-2 '>
                        <div className='col-xl-6 rounded-4'>
                            <img
                                className='rounded-4 h-120px w-100'
                                src={toAbsoluteUrl('media/img-2.jpg')}
                                alt='img'
                            />
                        </div>
                        <div className='col-xl-6 rounded-4'>
                            <img
                                className='rounded-4 h-120px w-100'
                                src={toAbsoluteUrl('media/img-3.jpg')}
                                alt='img'
                            />
                        </div>
                    </div>
                </div>

                <div className='col-xl-5'>
                    <img
                        className='rounded-4 h-100 w-100 bgi-no-repeat bgi-position-center bgi-size-cover'
                        src={toAbsoluteUrl('media/avatars/profile.jpg')}
                        alt='profile'
                    />
                </div>
            </div>

            <div className='row g-5 g-xl-8 mt-7 '>
                {
                    profileStats.map((stat, index) => (
                        <div className={'col-lg-3 col-md-3 col-sm-6'}>
                            <StatsWidget className={''} title={stat.title} value={stat.value}
                                         color={stat.color}
                                         key={`${stat.title}-${index}`}
                            />
                        </div>
                    ))
                }
            </div>
            <WhatIOffer/>
            <VoiceOfThePeople/>
            <FancyFooter/>


        </Content>
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
