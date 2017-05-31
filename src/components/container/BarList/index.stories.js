import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BarList } from 'components'

storiesOf('HomePage', module)
  .add('default', () => (
    <BarList />
  ))
