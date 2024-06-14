import {FC, lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

const PrivateRoutes = () => {
    const ProfileWrapper = lazy(() => import('../pages/profile/ProfileWrapper'))


    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                <Route path='/*' element={<Navigate to='/profile'/>}/>
                {/* Pages */}
                <Route path='profile' element={
                    <SuspensedView>
                        <ProfileWrapper/>
                    </SuspensedView>
                }/>
                {/* Page Not Found */}
                {/*<Route path='*' element={<Navigate to='/error/404'/>}/>*/}
            </Route>
        </Routes>
    )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
    const baseColor = getCSSVariableValue('--bs-primary')
    TopBarProgress.config({
        barColors: {
            '0': baseColor,
        },
        barThickness: 1,
        shadowBlur: 5,
    })
    return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>
}

export {PrivateRoutes}
