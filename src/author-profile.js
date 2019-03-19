import Avatar from '@pluralsight/ps-design-system-avatar/react'
import React from 'react'
import styleable from 'react-styleable'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import Tag from '@pluralsight/ps-design-system-tag/react'

import css from './author-profile.module.css'

const tags = [
  'Accessibility',
  'Career Path',
  'Data Visualization',
  'ES6',
  'Functional Programming',
  'Interfaces',
  'JavaScript',
  'Leadership',
  'Mobile Design',
  'Node.js',
  'Responsive Design',
  'Soft Skills',
  'TypeScript',
  'Unit Testing',
  'Web Graphics'
]

export default styleable(css)(function AuthorProfile(props) {
  return (
    <div className={props.css.profile}>
      <Avatar
        name="Jake Trent"
        size={Avatar.sizes.xLarge}
        src="https://gravatar.com/avatar/63a1fa126f541c0f0ecf1d74f7a40640?s=320"
      />
      <Heading size={Heading.sizes.large}>
        <h1>Jake Trent</h1>
      </Heading>
      <Heading size={Heading.sizes.medium}>
        <h2>Software Creator</h2>
      </Heading>

      <Heading size={Heading.sizes.smallCaps}>
        <h3>Interests You Follow</h3>
      </Heading>

      <div className={props.css.tags}>
        {tags.map(tag => (
          <div className={props.css.tag}>
            <Tag size={Tag.sizes.small}>{tag}</Tag>
          </div>
        ))}
      </div>
    </div>
  )
})
