import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Landing } from 'components'

storiesOf('HomePage', module)
  .add('default', () => (
    <Landing />
  ))
