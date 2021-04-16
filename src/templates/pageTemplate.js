import React from "react"
import { graphql } from "gatsby"

import Helmet from 'react-helmet'
import Layout from '../components/layout'

const pageTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => {

  return (
    <Layout>
      <Helmet>
        <title>Generic - Forty by HTML5 UP</title>
        <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
            </header>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

export default pageTemplate