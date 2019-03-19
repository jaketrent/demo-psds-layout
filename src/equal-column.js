import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'

import Card from './card.js'

export default function EqualColumn({ count = 8 }) {
  return (
    <EqualColumnLayout count={EqualColumnLayout.counts.four}>
      {Array(count)
        .fill(null)
        .map(_ => (
          <Card />
        ))}
    </EqualColumnLayout>
  )
}
