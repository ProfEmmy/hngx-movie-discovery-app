import "./MovieNavItem.css"

export function MovieNavItem({ img, text, href_ }) {
    return (
        <div className="movie-nav-item">
            <img src={img} className="nav-item-img" />
            <a href={href_} className="nav_link">{text}</a>
        </div>
    )
}