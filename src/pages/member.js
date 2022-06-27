import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import { GlobalStyles } from "twin.macro"
import { graphql } from "gatsby"
import MemberInfo from "../components/memberInfo"
import MemberPhoto from "../components/memberPhoto"

const Grid = tw.div`grid grid-cols-3 gap-4 mt-2 md:block`
const wrapper = tw`max-w-6xl mx-auto`
const Category = tw.div`mt-5 md:px-5`

export default function Project({ data }) {
  const staff = data.allStrapiMember.edges.filter(
    edge => edge.node.category.name === "Staff"
  )
  const graduate = data.allStrapiMember.edges.filter(
    edge =>
      edge.node.category.name === "Doctor" ||
      edge.node.category.name === "Master"
  )
  const bachelor = data.allStrapiMember.edges.filter(
    edge => edge.node.category.name === "Bachelor"
  )
  const alumni = data.allStrapiMember.edges.filter(
    edge => edge.node.category.name === "Alumni"
  )

  return (
    <Layout>
      <GlobalStyles />
      <section css={wrapper} tw="mt-20">
        <h2 tw="text-3xl text-center">Members</h2>
        <Category>
          <p>【スタッフ】</p>
          <Grid>
            {staff.map(edge => (
              <MemberInfo key={edge.node.strapi_id} post={edge.node} />
            ))}
          </Grid>
        </Category>
        <Category>
          <p>【大学院生】</p>
          <Grid>
            {graduate.map(edge => (
              <MemberInfo key={edge.node.strapi_id} post={edge.node} />
            ))}
          </Grid>
        </Category>
        <Category>
          <p>【学部生】</p>
          <Grid>
            {bachelor.map(edge => (
              <MemberInfo key={edge.node.strapi_id} post={edge.node} />
            ))}
          </Grid>
        </Category>
        <Category>
          <p>【OB・OG】</p>
          <Grid>
            {alumni.map(edge => (
              <MemberInfo key={edge.node.strapi_id} post={edge.node} />
            ))}
          </Grid>
        </Category>
      </section>
      <section css={wrapper} tw="mt-20  md:px-5">
        <h2 tw="text-3xl text-center">Photos</h2>
        <Grid>
          {data.allStrapiPhoto.edges.map(edge => (
            <MemberPhoto key={edge.node.strapi_id} post={edge.node} />
          ))}
        </Grid>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MemberQuery {
    allStrapiMember {
      edges {
        node {
          email
          strapi_id
          nameEN
          nameJP
          photo {
            localFile {
              url
            }
            alternativeText
          }
          researchMap
          position
          category {
            name
          }
          rank
        }
      }
    }
    allStrapiPhoto {
      edges {
        node {
          image {
            localFile {
              url
            }
            alternativeText
          }
          legend {
            data {
              legend
            }
          }
          date(locale: "ja-JP", formatString: "YYYY/MM/DD")
          strapi_id
        }
      }
    }
  }
`
