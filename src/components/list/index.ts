import styled from '@emotion/styled'
import theme from '@/theme'

interface ListProps {
  inline?: true
  separator?: string
}

const Li = styled('li')({
  position: 'relative',
})

const Ul = styled('ul')<ListProps>(
  {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  ({ inline }) =>
    inline && {
      Li: {
        display: 'inline-block',
        paddingRight: '2rem',
      },
    },
  ({ separator }) =>
    separator && {
      Li: {
        '&:not(:last-child)': {
          '&:after': {
            content: `"${separator}"`,
            position: 'absolute',
            transform: 'translateX(15px)',
            color: theme.secondary,
          },
        },
      },
    }
)

export default {
  Li,
  Ul,
}
