import "../styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Bankkroll | NFT Project"
        description="Description of Your NFT Project."
         twitter={{
           handle: "@bankkroll_eth",
           site: "https://bankkroll.xyz",
           cardType: "summary_large_image",
         }}
      />

      <div className="min-h-screen bg-blue-900 text-white selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
