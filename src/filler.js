import core from '@pluralsight/ps-design-system-core'
import { css } from 'glamor'
import React from 'react'

const styles = {
  container: css({
    color: core.colors.gray04,
    overflow: 'auto'
  }),
  content: css({
    margin: `${core.layout.spacingLarge} 0`
  }),
  grid: css({
    display: 'grid',
    gridGap: core.layout.spacingXLarge,
    gridTemplateColumns: '1fr 1fr 1fr'
  }),
  gridItem: css({
    width: '100%'
  })
}

export default function Filler({ count = 4 }) {
  return (
    <div {...styles.container}>
      <div {...styles.content}>
        <Grid>
          {Array(count)
            .fill(null)
            .map(_ => (
              <GridItem>
                <CommentPlaceholder />
              </GridItem>
            ))}
        </Grid>
      </div>
    </div>
  )
}

const Grid = props => (
  <div {...props} {...styles.grid}>
    {props.children}
  </div>
)

const GridItem = props => (
  <div {...props} {...styles.gridItem}>
    {props.children}
  </div>
)

const CommentPlaceholder = props => (
  <svg {...props} width="100%">
    <g fill="currentColor">
      <circle cx="30" cy="30" r="30" />

      <rect x="70" y="15" rx="4" ry="4" width="100%" height="6.4" />
      <rect x="70" y="35" rx="3" ry="3" width="100%" height="6.4" />
      <rect x="0" y="80" rx="3" ry="3" width="100%" height="6.4" />
      <rect x="0" y="100" rx="3" ry="3" width="100%" height="6.4" />
      <rect x="0" y="120" rx="3" ry="3" width="100%" height="6.4" />
      <rect x="0" y="140" rx="3" ry="3" width="100%" height="6.4" />
    </g>
  </svg>
)
