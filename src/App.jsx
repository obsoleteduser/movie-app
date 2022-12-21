import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {

  const [data, setData] = useState([])
  const [movie, setMovie] = useState('hell')
  const [get, setGet] = useState(false)

  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=d131f1b0`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data.Search)
      
    })
    .then(
      setGet(false)
    )
  }, [get])


  const movieHandler = (event)=>{
    setMovie(event.target.value)
  }

  return (
    <div className="App">
      <div onChange={movieHandler} className="search">
      <img className='search-icon' src="src\assets\magnifying-glass-solid.svg" alt="" />
      <input type="text" className="search-box" />
      <button onClick={()=>{setGet(true)
      }} className="search">Search</button>
      </div>
      <div className="movies">
      {
      data.length > 0 && data.map((movie, index) =>{
          return(
            <Card key={index} title={movie.Title} year={movie.Year} img={movie.Poster}></Card>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
