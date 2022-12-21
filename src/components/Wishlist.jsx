import { useState } from 'react'
import './wishlist.css'

export const Wishlist = ()=>{
    const [wishListActive, setWishListActive] = useState(false)

    console.log(visible)
    return(
        <div className="overlay">
            <div className="wishlist">
            <h1>Favorites</h1>
        </div>
        </div>
    )
}