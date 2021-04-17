import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Layout from './layout'

const components = {
  // Map HTML element tag to React component
  h1: props => (
    <header className="major">
      <h1 {...props}></h1>
    </header>
  ),
  iframe: props => (
    <iframe style={{ backgroundColor: "white" }} {...props} />
  )
};

const MDXPageLayout = ({ children }) => (
  <Layout>
    <MDXProvider
      components={components}
    >
      <section id="one">
        <div className="inner">
          {children}
        </div>
      </section>
    </MDXProvider>
  </Layout>
)

export default MDXPageLayout