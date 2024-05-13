

import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomenCollection from '../components/WomenCollection'

import {Gents,Ladies} from '../data'


const MainPage = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [LadiesFashion, setLadiesFashion] = useState(Ladies)
    console.log(Gents,Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion= {gentsFashion} />
      <WomenCollection LadiesFashion = {LadiesFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
