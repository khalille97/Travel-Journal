import React from 'react'
import Navbar from "/Components/Navbar"
import Cards from "/Components/Cards"
import data from "/data"

function App() {
  const cards= data.map(item=> {
    return(
      <Cards
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="container">
        <Navbar />
        {cards}
    </div>
  )
}

export default App
