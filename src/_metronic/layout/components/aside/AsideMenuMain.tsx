
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/profile'
        icon='color-swatch'
        title={'Profile'}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}
