/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import LayoutStyled, { LayoutBase, LayoutContent } from './layout.styled'
import Footer from '@components/footer'
import { Row, Col } from '@components/grid'
import SEO from '@components/seo'
import Intro, { Paragraph, Highlight } from '@components/intro'
import List from '@components/list'

interface LayoutProps {
  children: ReactNode
  path?: string
}

const Layout = ({ children, path }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isInnerPage = path !== '/'

  return (
    <LayoutStyled crunch={isInnerPage}>
      <SEO title="Hello" />
      <LayoutBase>
        <Row>
          <Col>
            <Intro>
              <h1> Hello </h1>
              <Paragraph>
                I'm <b> Daniel Pineda </b> a <Highlight>Full Stack</Highlight>{' '}
                Developer with 6+ years of experience from Guatemala
              </Paragraph>
              <h1> I do </h1>
              <List.Ul inline={true} separator="/">
                <List.Li> React </List.Li>
                <List.Li> Vue </List.Li>
                <List.Li> Elixir </List.Li>
                <List.Li> Node </List.Li>
              </List.Ul>
            </Intro>
          </Col>
        </Row>
        <Footer>
          <Row direction="row">
            <Col>
              <h4> email me </h4>
              <span>
                <a href="mailto:hello@dpineda.dev">
                  <b>hello@dpineda.dev</b>
                </a>
              </span>
            </Col>
            <Col>
              <h4> github </h4>
              <a href="https://github.com/dpineda64">
                <b>github.com/dpineda64</b>
              </a>
            </Col>
            {/* <Col>
              <h4> Blog </h4>
              <span>
                <b> SOON </b>
              </span>
            </Col>
            <Col>
              <h4> Projects </h4>
              <Link to="/projects">See</Link>
            </Col> */}
          </Row>
        </Footer>
      </LayoutBase>

      <LayoutContent active={isInnerPage}>{children}</LayoutContent>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
