import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react'
import React, { useState } from 'react'
import styleable from 'react-styleable'

import * as css from './app.module.css'
import pageHeading from './page-heading.js'
import aside from './aside.js'
import equalColumn from './equal-column.js'

const layouts = [
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
  const [layoutI, setLayout] = useState(0)
  const Layout = layouts[layoutI].layout
  return (
    <div className={props.css.app}>
      <div className={props.css.toggle}>
        <ViewToggle onSelect={setLayout}>
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
