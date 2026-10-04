import React from 'react'
import Header from './assets/Header'
import Card from './assets/Card'
import Button from './assets/Button'
import Form from './assets/Form'
import Footer from './assets/Footer'

const App = () => {
  function showMessage(){
    alert("Hello Student!");
  }
  return (
    <div>
      <Header />
      <Card name="Nikita" course="B.Tech" college="SATI Vidisha"/>
      <Button />
      <Form />
      <Footer />
    </div>
  )
}

export default App
