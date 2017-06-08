import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BarListItem } from 'components'

storiesOf('HomePage', module)
  .add('default', () => (
    <BarListItem />
  ))
