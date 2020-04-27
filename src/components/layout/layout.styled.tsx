import React from 'react'
import styled from '@emotion/styled'
import { Row } from '@components/grid'
import { Global, css } from '@emotion/core'
import theme from '@/theme'

interface LayoutStyledProps {
  crunch: boolean
}

export const LayoutStyled = styled('div')<LayoutStyledProps>(
  {
    height: '100vh',
    display: 'flex',
  },
  ({ crunch }) =>
    crunch && {
      [`${Row}`]: {
        width: '70%',
      },
    }
)

export const LayoutBase = styled('div')({
  color: theme.white,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  '> div:first-child': {
    flex: 1,
  },
})

interface LayoutContentProps {
  active: boolean
}

export const LayoutContent = styled('div')<LayoutContentProps>(
  {
    background: theme.white,
    transition: 'all .5s ease',
    flex: 0,
  },
  ({ active }) =>
    active && {
      padding: '1rem 8rem',
      flex: 2,
    }
)

interface LayoutProps extends LayoutStyledProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: ${theme.primary};
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
      <LayoutStyled crunch={props.crunch}>{props.children}</LayoutStyled>
    </>
  )
}
