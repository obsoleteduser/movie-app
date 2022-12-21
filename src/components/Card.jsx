import './card.css'

export const Card = ({img, title, year})=>{
    return(
        <div className="card">
            <img src={img} alt="" />
            <div className="info">
            <div className="title">{title}</div>
            <div className="year">{year}</div>
            </div>
        </div>
    )
}