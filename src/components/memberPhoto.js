import React from "react"
import "twin.macro"

const MemberPhoto = ({ post }) => {
  const { image, legend, date } = post
  return (
    <div>
      <div>
        <img
          src={image.localFile.url}
          alt={image.alternativeText}
          tw="shadow-lg"
        />
      </div>
      <div tw="text-sm text-right mt-2">{date}</div>
      <div tw="text-center mt-2">{legend.data.legend}</div>
    </div>
  )
}

export default MemberPhoto
