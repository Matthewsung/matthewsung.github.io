import React from 'react'
import Sec1 from './Main/Sec1'
import Sec2 from './Main/Sec2'
import Skills from './Main/sub/Skills'
import Publishing from './Main/Publishing'
import ReactSmall from './Main/ReactSmall'
// import ReactProject from './Main/ReactProject'
// import VueProject from './Main/VueProject'

const Main = ()=>{

  return(
    <>
      <Sec1 />
      <Sec2 />
      <Skills/>
      <Publishing />
      <ReactSmall />
      {/* <ReactProject />
      <VueProject /> */}
    </>
  )
}
export default Main