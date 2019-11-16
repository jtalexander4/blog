import React from "react"
import { Link, graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import { Container } from "../components/layoutComponents"


const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <h1>This is a blog</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <Img fixed={document.node.image.childImageSharp.fixed}/>
            <ReactMarkdown source={document.node.content} />
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
