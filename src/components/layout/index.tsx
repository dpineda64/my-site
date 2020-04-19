/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import LayoutStyled from './layout.styled'
import Footer, { FooterColumn } from '@components/footer'
import { Row, Col } from '@components/grid'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyled>
      <>
        {children}
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
            <Col>
              <h4> Blog </h4>
              <span>
                <b> SOON </b>
              </span>
            </Col>
          </Row>
        </Footer>
      </>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
