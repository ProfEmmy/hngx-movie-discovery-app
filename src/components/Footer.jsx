import "./Footer.css"
import facebookIcon from "../assets/facebook.svg"
import instagramIcon from "../assets/instagram.svg"
import twitterIcon from "../assets/twitter.svg"
import youtubeIcon from "../assets/youtube.svg"

export function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-div">
                    <div className="socials">
                        <a href="#">
                            <img src={facebookIcon} alt="facebook icon" />
                        </a>
                        <a href="#">
                            <img src={instagramIcon} alt="instagram icon" />
                        </a>
                        <a href="#">
                            <img src={twitterIcon} alt="twitter icon" />
                        </a>
                        <a href="#">
                            <img src={youtubeIcon} alt="youtube icon" />
                        </a>
                    </div>
                    <div className="other-links">
                        <a href="#">Consitions of Use</a>
                        <a href="#">Privacy & Policy</a>
                        <a href="#">Press Room</a>
                    </div>
                    <p className="copyright-txt">© 2021 MovieBox by Adriana Eka Prayudha  </p>
                </div>
            </footer>
        </>
    )
}