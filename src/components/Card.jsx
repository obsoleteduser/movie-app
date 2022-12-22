import { useRef } from 'react'
import './card.css'

export const Card = ({img, title, year, favorites, setFavorites, data})=>{

    const titleRef = useRef()

    const addToFavs = ()=>{
        console.log(titleRef.current.textContent)
        let selected = data.filter(item=>item.Title === titleRef.current.textContent)[0]
        selected.favorite = true
        setFavorites([...favorites, selected])
        console.log(favorites)
    }

    return(
        <div className="card borderBlink">
            
            <i  onClick={addToFavs} className="fa-regular fa-heart heart"></i>
            
            <img src={img} alt="" />
            <div className="info">
            <div ref={titleRef} className="title">{title}</div>
            <div className="year">{year}</div>
            </div>
        </div>
    )
}