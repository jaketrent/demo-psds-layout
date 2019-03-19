import React from 'react'
import styleable from 'react-styleable'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import Row from '@pluralsight/ps-design-system-row/react'

import css from './author-courses.module.css'

const courses = [
  'Flowtype Fundamentals',
  'Electron Fundamentals',
  'Styling React Components'
]

export default styleable(css)(function AuthorCourses(props) {
  return (
    <div className={props.css.author}>
      <Heading size={Heading.sizes.small}>
        <h2>Author Courses</h2>
      </Heading>

      <div className={props.css.courses}>
        {courses.map(course => (
          <Row
            title={course}
            metadata1={['Jake Trent', 'Intermediate']}
            image={
              <Row.Image src="https://design-system.pluralsight.com/static/img/course4.jpg" />
            }
          />
        ))}
      </div>
    </div>
  )
})
