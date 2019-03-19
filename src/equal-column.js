import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'
import styleable from 'react-styleable'

import Card from './card.js'
import css from './equal-column.module.css'

export default styleable(css)(function EqualColumn(props) {
  return (
    <div className={props.css.page}>
      <EqualColumnLayout count={EqualColumnLayout.counts.three}>
        {Array(props.count || 8)
          .fill(null)
          .map(_ => (
            <Card />
          ))}
      </EqualColumnLayout>
    </div>
  )
})
