import "./NavDescription.css"
import playIcon from "../assets/Icon (1).svg"
import tomatoIcon from "../assets/PngItem_1381056 1.svg"
import ratingIcon from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg"

export function NavDescription() {
    return (
        <div className="description-div">
            <h1 className="nav-mov-title">John Wick 3 : Parabellum</h1>
            <div className="ratings-div">
                <img src={ratingIcon} alt="rating icon" className="rating-icon" />
                <p className="rating">86.0 / 100</p>
                <img src={tomatoIcon} alt="tomato icon" className="tomato-icon" />
                <p className="rating-percent">97%</p>
            </div>
            <p className="nav-mov-description">John Wick is on the run after killing a member of the international assassins' guild,
                and with a $14 million price tag on his head, he is the target of hit
                men and women everywhere.</p>
            <button className="watch-trailer-btn">
                <img src={playIcon} alt="play icon" />
                watch trailer
            </button>
        </div>
    )
}