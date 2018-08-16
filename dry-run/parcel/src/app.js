import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Logo from '../public/logo.svg'
import css from './app.css'
//import scss from './app.scss'

let App = () => {
  let obj = {a:1}
  let {a} = obj

  return <div>
    <img className='logo' src={Logo}/>
    This is my App
  </div>
}

ReactDOM.render(<App/>, document.getElementById('app'))