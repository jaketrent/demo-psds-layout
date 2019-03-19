import { Heading, List } from '@pluralsight/ps-design-system-text/react'
import Link from '@pluralsight/ps-design-system-link/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './intro.module.css'

export default styleable(css)(function Intro(props) {
  return (
    <div className={props.css.intro}>
      <Heading className={props.css.title} size={Heading.sizes.xLarge}>
        <h2>Layout component</h2>
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

      <div className={props.css.points}>
        <List type={List.types.bulleted}>
          <List.Item>Different: containers</List.Item>
          <List.Item>Consistent: spacing and flow</List.Item>
          <List.Item>Flexible: reflow content</List.Item>
          <List.Item>Quick: plug n play</List.Item>
        </List>
      </div>
    </div>
  )
})
