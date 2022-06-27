import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import { GlobalStyles } from "twin.macro"

const wrapper = tw`max-w-6xl mx-auto`
const TableHeading = tw.th`md:block md:mt-5`
const TableData = tw.td`pl-10 md:block md:pl-0 md:text-center`

export default function Project() {
  return (
    <Layout>
      <GlobalStyles />
      <section css={wrapper} tw="mt-20">
        <h2 tw="text-3xl text-center">Access</h2>
        <div tw="flex gap-4 mt-5  md:flex-col md:items-center md:px-1.5">
          <div tw="w-1/2 md:w-full">
            <table tw="mt-20 mx-auto md:mt-5">
              <tr>
                <TableHeading>住所</TableHeading>
                <TableData>
                  〒113-0032
                  <br tw="hidden md:block" /> 東京都文京区弥生2-11-16
                  理学部3号館2階
                </TableData>
              </tr>
              <tr>
                <TableHeading>メールアドレス</TableHeading>
                <TableData>sdkojima@mail.ecc.u-tokyo.ac.jp</TableData>
              </tr>
              <tr>
                <TableHeading>電話番号</TableHeading>
                <TableData>00-0000-0000</TableData>
              </tr>
            </table>
          </div>
          <div tw="w-1/2 md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6478.882270987314!2d139.765308!3d35.715368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb165998d7eaca08d!2z5p2x5Lqs5aSn5a2mIOeQhuWtpumDqDPlj7fppKg!5e0!3m2!1sja!2sus!4v1655203332047!5m2!1sja!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="accessmap"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}
