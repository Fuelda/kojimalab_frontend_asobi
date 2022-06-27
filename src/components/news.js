import React from "react"
import "twin.macro"

const News = ({ post }) => {
  const { date, heading } = post
  return (
    <div tw="flex md:block">
      <div>{date}</div>
      <div tw="pl-5">{heading}</div>
    </div>
  )
}

export default News
