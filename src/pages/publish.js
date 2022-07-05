import React from "react"
import Layout from "../components/layout"
import ReportInfo from "../components/reportInfo"
import tw, { css } from "twin.macro"
import { GlobalStyles } from "twin.macro"
import { graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

const wrapper = tw`max-w-6xl mx-auto`

export default function Home({ data }) {
  const yearArray = data.allStrapiPublish.edges.map(
    edge => edge.node.publishedYear
  )
  const yearArrayNew = Array.from(new Set(yearArray))

  const hoverMarker = css`
    display: block;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #e0ff00;
      z-index: -1;
      transform: scale(0, 1);
      transition-duration: 0.3s;
      transform-origin: left;
    }
    &:hover {
      &::before {
        transform: scale(1, 1);
      }
    }
  `

  return (
    <Layout>
      <GlobalStyles />
      <section tw="mt-20" css={wrapper}>
        <h2 tw="text-3xl text-center">Publish</h2>
        <div tw="flex">
          <aside tw="mt-5 w-2/12 md:hidden">
            <div tw="sticky top-10">
              <div>Published in...</div>
              <ul tw="mt-4 pl-5 pr-5">
                {yearArrayNew.map(year => (
                  <li>
                    <AnchorLink
                      href={"#anchor" + year}
                      tw="px-4"
                      css={hoverMarker}
                    >
                      {year}年
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div tw="mt-5 w-10/12 md:w-full md:px-5">
            {data.allStrapiPublish.edges.map(edge => (
              <ReportInfo key={edge.node.strapi_id} post={edge.node} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PublishQuery {
    allStrapiPublish(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          detail
          titleEN
          titleJP
          urlEN
          urlJP
          publishedDate(locale: "ja-JP", formatString: "YYYY/MM/DD")
          publishedYear: publishedDate(formatString: "YYYY")
          strapi_id
          mainFigure {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
        }
      }
    }
  }
`
