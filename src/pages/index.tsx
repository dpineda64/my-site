import React from 'react'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Intro, { Paragraph, Highlight } from '@components/intro'
import { Row, Col } from '@components/grid'
import List from '@components/list'

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
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
  </Layout>
)

export default IndexPage
