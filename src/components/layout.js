import React from "react"
import Header from "./header"
import Hooter from "./hooter"
import "twin.macro"
import { GlobalStyles } from "twin.macro"
import "@fontsource/zen-old-mincho"

const Layout = ({ children }) => {
  return (
    <div tw="bg-bgGray">
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Hooter />
    </div>
  )
}

export default Layout
