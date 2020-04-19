import styled from '@emotion/styled'
import theme from '@/theme'

export const Intro = styled('div')({
  paddingTop: '20%',
  h1: {
    color: theme.white75,
  },
  ul: {
    fontSize: 24,
  },
})

export const Paragraph = styled('p')({
  fontSize: 36,
  fontWeight: 300,
  b: {
    fontWeight: 'bold',
  },
})

export const Highlight = styled('div')({
  display: 'inline',
  color: theme.secondary,
})
