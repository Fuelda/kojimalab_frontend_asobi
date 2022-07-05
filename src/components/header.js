import React, { useState } from "react"
import tw, { css } from "twin.macro"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
// import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyles } from "twin.macro"

const List = tw.li`text-base `
const HamLine = tw.div`w-10 h-1 bg-gray-700 rounded-md md:duration-500`
// const Marker = tw.div`bg-bgYello h-full w-full`

const Header = () => {
  const location = useLocation().pathname

  const [openMenu, setOpenMenu] = useState(false)
  const moveOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const hoverMarker = css`
    ${tw`px-3`}
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
    ${tw`md:text-3xl`}
  `

  return (
    <header>
      <GlobalStyles />
      <section tw="flex justify-between items-center px-5 pt-5 md:block md:px-0">
        {/* <StaticImage
          src="../../image/tgb1-1_Crop001_z03_RAW_ch000102.tif (RGB).jpg"
          alt="headerBg"
        /> */}
        <Link to="/">
          <div tw="">
            <div tw="font-zen px-5 md:text-xs">
              東京大学 大学院理学系研究科
              <br />
              生物科学専攻 神経機能生化学研究室
            </div>
            <h1 tw="text-4xl font-bold font-zen px-5 mt-2 md:text-base">
              小島グループ
            </h1>
          </div>
        </Link>
        <button
          tw="hidden w-9 h-9  fixed top-5 right-5 z-20 md:flex flex-col justify-between"
          onClick={moveOpenMenu}
        >
          <HamLine
            css={
              openMenu
                ? tw`bg-bgYello rotate-45 translate-y-4`
                : tw`bg-gray-700`
            }
          ></HamLine>
          <HamLine
            css={openMenu ? tw`bg-bgYello opacity-0` : tw`bg-gray-700`}
          ></HamLine>
          <HamLine
            css={
              openMenu
                ? tw`bg-bgYello -rotate-45 -translate-y-4`
                : tw`bg-gray-700`
            }
          ></HamLine>
        </button>
        <nav
          tw="z-10 md:(text-center bg-gray-700 w-screen h-screen pt-40 fixed top-0 duration-500 text-white )"
          css={openMenu ? tw`right-0` : tw`-right-full`}
        >
          <ul tw="flex md:(flex-col gap-14 )">
            <List
              css={location === "/" ? tw`bg-bgYello text-black` : tw`bg-none`}
            >
              <Link to="/" css={hoverMarker}>
                ホーム
              </Link>
            </List>
            <List
              css={
                location === "/project"
                  ? tw`bg-bgYello text-black`
                  : tw`bg-none`
              }
            >
              <Link to="/project" css={hoverMarker}>
                研究内容
              </Link>
            </List>
            <List
              css={
                location === "/publish"
                  ? tw`bg-bgYello text-black`
                  : tw`bg-none`
              }
            >
              <Link to="/publish" css={hoverMarker}>
                研究業績
              </Link>
            </List>
            <List
              css={
                location === "/member" ? tw`bg-bgYello text-black` : tw`bg-none`
              }
            >
              <Link to="/member" css={hoverMarker}>
                メンバー
              </Link>
            </List>
            <List
              css={
                location === "/access" ? tw`bg-bgYello text-black` : tw`bg-none`
              }
            >
              <Link to="/access" css={hoverMarker}>
                アクセス
              </Link>
            </List>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
