import React, { useState } from 'react'
import styleable from 'react-styleable'
import Tab from '@pluralsight/ps-design-system-tab/react'

import aside from './aside.js'
import * as css from './app.module.css'
import equalColumn from './equal-column.js'
import finesto from './finesto.js'
import intro from './intro.js'
import pageHeading from './page-heading.js'

const layouts = [
  {
    name: 'Hallo',
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
  },
  {
    name: 'Finesto',
    layout: finesto
  }
]

export default styleable(css)(function App(props) {
  const [layoutI, setLayout] = useState(
    parseInt(localStorage.getItem('demo-psds-layout'), 10) || 0
  )
  const Layout = layouts[layoutI].layout
  return (
    <div className={props.css.app}>
      <div className={props.css.tabs}>
        <Tab.List>
          {layouts.map((layout, i) => (
            <Tab.ListItem
              id={layout.name}
              key={layout.name}
              onClick={i => {
                localStorage.setItem('demo-psds-layout', i)
                setLayout(i)
              }}
              active={i === layoutI}
            >
              {layout.name}
            </Tab.ListItem>
          ))}
        </Tab.List>
      </div>
      <Tab.Panel labelledBy={layouts[layoutI].name} key={layouts[layoutI].name}>
        <div className={props.css.layout}>
          <Layout />
        </div>
      </Tab.Panel>
    </div>
  )
})
