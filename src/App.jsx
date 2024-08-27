import React from 'react'

import { Page01 } from './Components/Pages/page-01/index.jsx'
import { Page02 } from './Components/Pages/page-02'
import { Page03 } from './Components/Pages/page-03'
import { Page04 } from './Components/Pages/page-04'

import LevelForm from './Components/level-form/index.jsx'

import MyProvider from './Context/formValues.jsx'

export default function App(){


  return(
    <MyProvider>
      <div className="container">
        <div className="title">
          <h1>Join our Community of Developers</h1>
          <span>To join community and participate in frontend challeges.</span>
          <br />
          <span>Please fill out the following form.</span>
        </div>

        <main className="content">
            <LevelForm/>
            <div className='div-bar'></div>
            <Page01/>
            <Page02/>
            <Page03/>
            <Page04/>

        </main>

      </div>
    </MyProvider>
  )
}