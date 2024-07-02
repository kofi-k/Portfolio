import {FC} from 'react'
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'
import {ThemeModeSwitcher,} from '../../../partials'
import {motion} from 'framer-motion'


const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
    toolbarButtonHeightClass = 'btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40p',
    toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
    return (
        <div className='d-flex align-items-stretch flex-shrink-0'>
            <div className='topbar d-flex align-items-stretch flex-shrink-0'>

                {/* begin::Theme mode */}
                <motion.div
                    initial={{scale: 0.7}}
                    animate={{scale: 1}}
                    transition={{duration: 0.3, ease: 'easeInOut', delay: 0.35}}
                    className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
                    <ThemeModeSwitcher toggleBtnClass={toolbarButtonHeightClass}/>
                </motion.div>
                {/* end::Theme mode */}

                {/* begin::User */}
                <motion.div
                    initial={{scale: 0.7}}
                    animate={{scale: 1}}
                    transition={{duration: 0.3, ease: 'easeInOut', delay: 0.45}}
                    className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
                    id='kt_header_user_menu_toggle'
                >
                    {/* begin::Toggle */}
                    <div
                        className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
                        data-kt-menu-trigger='click'
                        data-kt-menu-attach='parent'
                        data-kt-menu-placement='bottom-end'
                        data-kt-menu-flip='bottom'
                    >
                        <img
                            className='h-40px w-40px rounded border'
                            src={toAbsoluteUrl('media/avatars/profile.jpg')}
                            alt='metronic'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export {Topbar}
