import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MainListContainer } from 'components'

storiesOf('HomePage', module)
  .add('default', () => (
    <MainListContainer />
  ))
