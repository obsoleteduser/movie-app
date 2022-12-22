import { useState } from 'react'
import './wishlist.css'

export const Wishlist = ({active, setActive})=>{

   
    return(
        <div onClick={()=>{
            
            setActive(false)}} className={active ? "overlay active": "overlay"}>
            <div onClick={(event)=>{event.stopPropagation()}} className="wishlist">
            <h1>Favorites</h1>
        </div>
        </div>
    )
}