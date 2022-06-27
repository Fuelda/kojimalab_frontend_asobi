import React from "react"
import Layout from "../components/layout"
import "twin.macro"
import { GlobalStyles } from "twin.macro"

export default function Project() {
  return (
    <Layout>
      <GlobalStyles />
      <section tw="mt-20">
        <h2 tw="text-3xl text-center">Project</h2>
        <aside></aside>
      </section>
    </Layout>
  )
}
