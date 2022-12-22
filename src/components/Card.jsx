import { useRef, useState } from 'react'
import './card.css'

export const Card = ({img, title, year, favorites, setFavorites, data})=>{
    const [active, setActive] = useState(true)

    const titleRef = useRef()

    const addToFavs = (event)=>{
        console.log(titleRef.current.textContent)
        let selected = data.filter(item=>item.Title === titleRef.current.textContent)[0]
        selected.favorite = true
        setFavorites([...favorites, selected])
        event.target.setAttribute('disabled', true)
        setActive(false)
    }

    const removeFromfavs = ()=>{
        console.log(data)
       
    }

    return(
        <div className="card borderBlink">
            
            <i  onClick={active ? addToFavs : removeFromfavs} className="fa-regular fa-heart heart"></i>
            
            <img src={img} alt="" />
            <div className="info">
            <div ref={titleRef} className="title">{title}</div>
            <div className="year">{year}</div>
            </div>
        </div>
    )
}