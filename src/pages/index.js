import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/road.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
          I solve problems with code. I am most comfortable working with backend
          technologies such as Node.js, Express, Django, and Phoenix.
        </p>
        <p>
          Sending data between the front and backend? I am comfortable with REST
          and GraphQL. I also make beautiful, minimalist, and typographically
          sensitive frontends using Html, CSS, React, and Tachyons. I believe in
          helping the computer help me solve problems, so I enjoy using
          Typescript and modern ES6+ Javascript.
        </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
