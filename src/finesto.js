import { Heading, List } from '@pluralsight/ps-design-system-text/react'
import Link from '@pluralsight/ps-design-system-link/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './finesto.module.css'

export default styleable(css)(function Intro(props) {
  return (
    <div className={props.css.finesto}>
      <Heading size={Heading.sizes.xLarge}>
        <h2>Questions on usage?</h2>
      </Heading>
      <Heading size={Heading.sizes.xLarge}>
        <h2>Feedback about your experience with it?</h2>
      </Heading>
      <Heading size={Heading.sizes.xLarge}>
        <h2>What would be cool to have?</h2>
      </Heading>

      <Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://design-system.pluralsight.com/components/layout/"
        >
          design-system.pluralsight.com/components/layout
        </a>
      </Link>
    </div>
  )
})
