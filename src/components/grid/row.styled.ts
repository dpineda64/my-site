import styled from '@emotion/styled'

interface RowProps {
  direction?: 'row' | 'column'
  lastRight?: boolean
}

const Row = styled('div')<RowProps>(
  {
    display: 'flex',
    width: '80%',
    margin: '0 auto',
    '@media (min-width: 1366px)': {
      width: '33%',
    },
    '@media (max-width: 720px)': {
      flexDirection: 'column',
    },
  },
  ({ direction }) => ({
    flexDirection: direction,
  }),
  ({ lastRight }) =>
    lastRight && {
      col: {
        ':last-child': {
          marginLeft: 'auto',
        },
      },
    }
)

Row.defaultProps = {
  direction: 'column',
  lastRight: false,
}

export default Row
