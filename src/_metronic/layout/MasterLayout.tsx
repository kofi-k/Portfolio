import React, {FC, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {ScrollTop} from './components/ScrollTop'
import {PageDataProvider, useLayout} from './core'
import {themeModeSwitchHelper, useThemeMode} from '../partials/layout/theme-mode/ThemeModeProvider'
import {MenuComponent} from '../assets/ts/components'
import {WithChildren} from '../helpers'
import {useMousePosition} from "../../app/pages/core/helpers.ts";

const MasterLayout: FC<WithChildren> = ({children}) => {
    const {classes} = useLayout()
    const {mode} = useThemeMode()
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            MenuComponent.reinitialization()
        }, 500)
    }, [location.key])

    useEffect(() => {
        themeModeSwitchHelper(mode)
    }, [mode])

    const {divRef, position, handleMouseMove} = useMousePosition();

    return (
        <PageDataProvider>
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                className='page d-flex flex-row flex-column-fluid'>
                <div
                    style={{
                        background: `radial-gradient(50vw circle at ${position.x}px ${position.y}px, #F5F7FA09, transparent 50%)`,
                    }}
                    className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                    <HeaderWrapper/>
                    <Outlet/>
                    <Footer/>
                    {/*<Spotlight/>*/}
                </div>
            </div>
            <ScrollTop/>

        </PageDataProvider>
    )
}

export {MasterLayout}
