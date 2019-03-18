import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react'
import React, { useState } from 'react'

import './app.css'
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

export default function App() {
  const [layoutI, setLayout] = useState(0)
  const Layout = layouts[layoutI].layout
  return (
    <div className="App">
      <ViewToggle onSelect={setLayout}>
        {layouts.map((layout, i) => (
          <ViewToggle.Option active={i === layoutI}>
            {layout.name}
          </ViewToggle.Option>
        ))}
      </ViewToggle>
      <Layout />
    </div>
  )
}
