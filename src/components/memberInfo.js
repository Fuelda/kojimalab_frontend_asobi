import React from "react"
import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MemberInfo = ({ post }) => {
  const { photo, position, nameJP, nameEN, email, researchMap } = post
  const memberImg = getImage(photo.localFile)

  return (
    <div tw="flex bg-white p-1 shadow-lg rounded">
      <div tw="w-24 h-28">
        <GatsbyImage
          image={memberImg}
          alt={nameJP}
          tw="w-full h-full object-cover"
        />
        {/* <img
          src={photo.localFile.url}
          alt={photo.alternativeText}
          tw="w-full h-full object-cover"
        /> */}
      </div>
      <div tw="pl-3">
        <p>{position}</p>
        <div tw="pl-3 flex">
          <p>{nameJP}</p>
          <a
            href={researchMap}
            target="_blank"
            rel="noreferrer"
            tw="text-sm underline pl-2"
            css={researchMap ? tw`block` : tw`hidden`}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
        <p tw="text-sm pl-3">{nameEN}</p>
        <div tw="w-full">
          <a
            href={"mailto:" + email}
            tw="block text-xs mt-3 underline break-all "
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default MemberInfo
