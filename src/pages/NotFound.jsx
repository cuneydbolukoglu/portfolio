import { Link } from 'react-router-dom';

import video from '../assets/video/Bubbles-1085.mp4';

const errorpage = props => {
    return (
        <section className="errorpage">
            <video preload="yes" muted loop autoPlay>
                <source src={video} type="video/mp4"></source>
            </video>
            <article>
                <div className="error-title">404</div>
                <div className="error-text">This page could not be found</div>
                <Link className="error-back-button nav-a" to="/">HOME</Link>
            </article>
        </section>
    )
}

export default errorpage;