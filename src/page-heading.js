import Button from '@pluralsight/ps-design-system-button/react'
import { PageHeadingLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'

import Filler from './filler.js'

export default function PageHeading() {
  return (
    <PageHeadingLayout
      actions={[
        <Button key="button1" appearance={Button.appearances.stroke}>
          Button
        </Button>,
        <Button key="button2">Button</Button>
      ]}
      heading={
        <h3>Page title that is super long and it goes on and on forever</h3>
      }
    >
      <Filler count={6} />
    </PageHeadingLayout>
  )
}
