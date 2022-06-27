import React from "react"
import Layout from "../components/layout"
import News from "../components/news"
import tw from "twin.macro"
import { GlobalStyles } from "twin.macro"
import { graphql } from "gatsby"

const wrapper = tw`max-w-lg mx-auto`

export default function Home({ data }) {
  return (
    <Layout>
      <GlobalStyles />
      <section tw="mt-20 px-10" css={wrapper}>
        <h2 tw="text-3xl text-center">What's New</h2>
        <table tw="mt-10">
          {data.allStrapiNew.edges.map(edge => (
            <News key={edge.node.strapi_id} post={edge.node} />
          ))}
        </table>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query NewsQuery {
    allStrapiNew(sort: { fields: date, order: DESC }) {
      edges {
        node {
          date(locale: "ja-JP", formatString: "YYYY/MM/DD")
          strapi_id
          heading
        }
      }
    }
  }
`
