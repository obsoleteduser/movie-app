import { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { PuffLoader } from 'react-spinners'
import './App.css'
import { Card } from './components/Card'

function App() {

  const [data, setData] = useState([])
  const [movie, setMovie] = useState('sci-fi')
  const [get, setGet] = useState(false)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState([])
  const searchRef = useRef()

  useEffect(() => {

    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=d131f1b0`)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setData([])
        setData(data.Search)

      })
      .then(
        setGet(false)
      )

  }, [get])


  const movieHandler = (event) => {
    setMovie(event.target.value)
  }


  const handleSearch = () => {
    setGet(true)
  }


  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };


  const notFound = () => <h1 style={{ color: "white", position: 'absolute', fontSize: '10rem', marginTop: '5%' }}>Not Found!</h1>
  const loader = () => <div style={{ color: "white", position: 'absolute', fontSize: '10rem', marginTop: '5%' }}><PuffLoader color="white"  size={300}/></div>

  return (
    <>

      <div onLoad={() => { searchRef.current.focus() }} className="App">

        <header>
          <div onChange={movieHandler} className="search">
            <img className='search-icon' src="src\assets\magnifying-glass-solid.svg" alt="" />
            <input onKeyDown={handleKeypress} ref={searchRef} placeholder='Finds any movie' type="text" className="search-box" />

            <button onClick={handleSearch} className="search">Search</button>

          </div>
          <i onClick={() => { setWishListActive(true) }} style={{ color: "white", fontSize: '4rem', cursor: 'pointer' }} className="fa-regular fa-heart"></i>
        </header>
        <div className="movies">
          { loading ? loader():
            data?.length ? data.map((movie, index) => {
              return (
                <Card key={index} title={movie.Title} year={movie.Year} img={movie.Poster}></Card>
              )
            }) : notFound()
          }
        </div>
        
      </div>
    </>
  )
}

export default App
