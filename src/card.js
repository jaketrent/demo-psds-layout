import Card from '@pluralsight/ps-design-system-card/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './card.module.css'

export default styleable(css)(function Card(props) {
  return (
    <div className={props.css.card} {...props}>
      <Card
        size={Card.sizes.medium}
        title={<Card.Title>Super Course!</Card.Title>}
        metadata1={['Jim Cooper']}
        image={
          <Card.Image src="https://design-system.pluralsight.com/static/img/course1.jpg" />
        }
      />
    </div>
  )
})
