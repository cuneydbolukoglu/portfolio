import { Link } from 'react-router-dom';

const errorpage = props => {
    return (
        <section className="errorpage-section">
            <article>
                <div className="error-title">404</div>
                <div className="error-text">This page could not be found.</div>
                <Link className="error-back-button" to="/">HOME</Link>
            </article>
        </section>
    )
}

export default errorpage;