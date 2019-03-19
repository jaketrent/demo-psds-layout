import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react'
import React, { useState } from 'react'
import styleable from 'react-styleable'

import aside from './aside.js'
import * as css from './app.module.css'
import equalColumn from './equal-column.js'
import intro from './intro.js'
import pageHeading from './page-heading.js'

const layouts = [
  {
    name: 'Layout',
    layout: intro
  },
  {
    name: 'Page heading',
    layout: pageHeading
  },
  {
    name: 'Aside',
    layout: aside
  },
  {
    name: 'Equal column',
    layout: equalColumn
  }
]

export default styleable(css)(function App(props) {
  const [layoutI, setLayout] = useState(
    parseInt(localStorage.getItem('demo-psds-layout'), 10) || 0
  )
  const Layout = layouts[layoutI].layout
  return (
    <div className={props.css.app}>
      <div className={props.css.toggle}>
        <ViewToggle
          onSelect={i => {
            localStorage.setItem('demo-psds-layout', i)
            setLayout(i)
          }}
        >
          {layouts.map((layout, i) => (
            <ViewToggle.Option active={i === layoutI}>
              {layout.name}
            </ViewToggle.Option>
          ))}
        </ViewToggle>
      </div>
      <div className={props.css.layout}>
        <Layout />
      </div>
    </div>
  )
})
