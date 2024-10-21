import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import ContactForm from './ContactForm'
import './style.css'

function App() {

  return (
    <>
    <div class="Container">
    <HomePage></HomePage>
    <ContactForm></ContactForm>
    </div>
    </>
  )
}

export default App
