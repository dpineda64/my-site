import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import theme from '@/theme'

export const LayoutStyled = styled('div')({
  height: '100vh',
  color: theme.white,
  display: 'flex',
  flexDirection: 'column',
  '> div': {
    flex: 1,
  },
})

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: ${theme.primary};
            overflow: hidden;
            font-family: 'Nunito', sans-serif;
          }
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100vh;
          }
          a {
            color: ${theme.white};
            text-decoration: none;
          }
        `}
      />
      <LayoutStyled>{props.children}</LayoutStyled>
    </>
  )
}
