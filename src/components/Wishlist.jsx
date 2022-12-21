import './wishlist.css'

export const Wishlist = ({visible})=>{
    console.log(visible)
    return(
        <div onClick={visible(false)} className="overlay">
            <div className="wishlist">
            <h1>Favorites</h1>
        </div>
        </div>
    )
}