import React, { useState } from "react"
import tw from "twin.macro"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
// import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyles } from "twin.macro"

const List = tw.li`text-base hover:bg-bgYello`
const HamLine = tw.div`w-10 h-1 bg-gray-700 rounded-md md:duration-500`

const Header = () => {
  const location = useLocation().pathname

  const [openMenu, setOpenMenu] = useState(false)
  const moveOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

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
          tw="hidden w-9 h-9  fixed top-5 right-5 z-10 md:flex flex-col justify-between"
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
          tw=" md:text-center md:bg-gray-700 md:w-screen md:pt-20 md:pb-3 md:fixed md:top-0 md:duration-500 md:text-white"
          css={openMenu ? tw`right-0` : tw`-right-full`}
        >
          <ul tw="flex md:flex-col md:gap-3">
            <List
              css={location === "/" ? tw`bg-bgYello text-black` : tw`bg-none`}
            >
              <Link to="/" tw="px-3 block">
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
              <Link to="/project" tw="px-3 block">
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
              <Link to="/publish" tw="px-3 block">
                研究業績
              </Link>
            </List>
            <List
              css={
                location === "/member" ? tw`bg-bgYello text-black` : tw`bg-none`
              }
            >
              <Link to="/member" tw="px-3 block">
                メンバー
              </Link>
            </List>
            <List
              css={
                location === "/access" ? tw`bg-bgYello text-black` : tw`bg-none`
              }
            >
              <Link to="/access" tw="px-3 block">
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
