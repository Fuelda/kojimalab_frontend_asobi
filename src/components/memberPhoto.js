import React from "react"
import "twin.macro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MemberPhoto = ({ post }) => {
  const { image, legend, date } = post
  const labImg = getImage(image.localFile)
  return (
    <div>
      <div>
        <GatsbyImage image={labImg} alt={date} tw="shadow-lg" />
      </div>
      <div tw="text-sm text-right mt-2">{date}</div>
      <div tw="text-center mt-2">{legend.data.legend}</div>
    </div>
  )
}

export default MemberPhoto
