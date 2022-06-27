import React from "react"
import { Link } from "gatsby"
import "twin.macro"
import { GlobalStyles } from "twin.macro"

const Hooter = () => {
  return (
    <hooter>
      <GlobalStyles />
      <section tw="text-center mt-20 bg-gray-700 py-5 px-5 ">
        <Link to="/">
          <div tw="font-zen text-white">
            東京大学 大学院理学系研究科
            <br />
            生物科学専攻 神経機能生化学研究室
          </div>
          <h1 tw="text-4xl font-bold font-zen text-white mt-2">小島グループ</h1>
        </Link>
        <p tw="mt-10 text-white">
          〒113-0032 東京都文京区弥生2-11-16 理学部3号館2階
        </p>
        <p tw="text-sm mt-5 text-white">
          旧神経機能生化学研究室 (深田研) のページは
          <a
            href="http://www.biochem.s.u-tokyo.ac.jp/fukada-lab/index-j.html"
            target="_blank"
            rel="noreferrer"
            tw="underline"
          >
            こちら
          </a>
        </p>
      </section>
    </hooter>
  )
}

export default Hooter
