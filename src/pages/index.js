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
          After some career twists and turns, I graduated from General
          Assembly's web development immersive in March, 2019. As a full stack
          web developer, I focus on the interaction between the front and back
          ends. Sending data between the front and backend? I am comfortable
          with REST and GraphQL.
        </p>
        <p>
          Need a backend? I am comfortable working with Node.js, Express,
          Django, and Phoenix, and can get the database calls using any SQL
          dialect, or MongoDB with or without an ORM layer. I also make
          beautifully minimalist, and typographically sensitive frontends using
          Html, CSS, and React.
        </p>
        <p>
          I believe in helping the computer help me solve problems, so I enjoy
          using Typescript and modern ES6+ Javascript. Python and Elixir are
          other languages I love, because they are like coding superpowers.
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
