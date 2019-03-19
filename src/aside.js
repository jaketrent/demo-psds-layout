import { AsideLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'

import AuthorProfile from './author-profile.js'
import AuthorCourses from './author-courses.js'

export default function Aside() {
  return (
    <AsideLayout
      aside={
        <AsideLayout.Aside>
          <AuthorProfile />
        </AsideLayout.Aside>
      }
      main={
        <AsideLayout.Main>
          <AuthorCourses />
        </AsideLayout.Main>
      }
    />
  )
}
