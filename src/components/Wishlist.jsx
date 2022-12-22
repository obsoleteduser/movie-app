import { useState } from 'react'
import { Card } from './Card'
import './wishlist.css'

export const Wishlist = ({active, setActive, favorites, setFavorites})=>{

   
    return(
        <div onClick={()=>{
            
            setActive(false)}} className={active ? "overlay active": "overlay"}>
            <div onClick={(event)=>{event.stopPropagation()}} className="wishlist">
            <h1>Favorites</h1>
            <div className="wishlist-favorites">
                {
                    favorites.map((movie, index) => <Card key={index} title={movie.Title} year={movie.Year} img={movie.Poster}/>)
                }
                </div>-
        </div>
        </div>
    )
}