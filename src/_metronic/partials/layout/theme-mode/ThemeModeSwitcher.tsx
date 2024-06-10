import clsx from 'clsx'
import {KTIcon} from '../../../helpers'


type Props = {
    toggleBtnClass?: string
    toggleBtnIconClass?: string
    menuPlacement?: string
    menuTrigger?: string
}


const ThemeModeSwitcher = ({
                               toggleBtnClass = '',
                               toggleBtnIconClass = 'fs-1',
                               menuPlacement = 'bottom-end',
                               menuTrigger = "{default: 'click', lg: 'hover'}",
                           }: Props) => {

    return (
        <>
            {/* begin::Menu toggle */}
            <a
                href='#'
                className={clsx('btn btn-icon ', toggleBtnClass)}
                data-kt-menu-trigger={menuTrigger}
                data-kt-menu-attach='parent'
                data-kt-menu-placement={menuPlacement}
            >
                <KTIcon iconName='moon' className={clsx('theme-light-hide', toggleBtnIconClass)}/>
            </a>
            {/* begin::Menu toggle */}

        </>
    )
}

export {ThemeModeSwitcher}
