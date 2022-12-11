import type { NextPage } from "next"
import React from "react"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"

const Home: NextPage = () => {
  return (
    <main className="w-full pt-24">
      <Hero />
      <Gallery />
    </main>
  )
}

export default Home
