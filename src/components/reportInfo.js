import React from "react"
import tw from "twin.macro"

const ReportInfo = ({ post }) => {
  const {
    publishedDate,
    titleJP,
    detail,
    titleEN,
    urlJP,
    urlEN,
    mainFigure,
    publishedYear,
  } = post

  const mainFigureUrl = mainFigure ? mainFigure.localFile.url : ""
  const mainFigureText = mainFigure ? mainFigure.alternatvieText : ""

  return (
    <div tw="flex mt-5 md:flex-col">
      <div css={mainFigure ? tw`w-1/2` : tw`w-full`} tw="md:w-full">
        <div tw="text-sm" id={"anchor" + publishedYear}>
          {publishedDate}
        </div>
        <a
          href={urlJP}
          target="_blank"
          rel="noreferrer"
          tw="block  mt-3 pl-5"
          css={urlJP ? tw`underline` : tw`no-underline`}
        >
          {titleJP}
        </a>
        <div tw="text-sm mt-2 pl-5">{detail}</div>
        <div tw=" mt-1 pl-5">
          原著論文:
          <a
            href={urlEN}
            target="_blank"
            rel="noreferrer"
            tw="pl-1"
            css={urlEN ? tw`underline` : tw`no-underline`}
          >
            {titleEN}
          </a>
        </div>
      </div>
      <div css={mainFigure ? tw`w-1/2` : tw`w-0`} tw="md:w-full md:mt-2">
        <img src={mainFigureUrl} alt={mainFigureText} />
      </div>
    </div>
  )
}

export default ReportInfo
