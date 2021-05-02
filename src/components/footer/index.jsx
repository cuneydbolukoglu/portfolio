import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <footer>
            <Link to="/portfolio">PORTFOLIO</Link>
            <div className="social_link">
                <a href="https://linkedin.com/in/cuneydbolukoglu" target="blank"><i className="icon-linkedin"></i></a>
                <a href="https://cuneyd.medium.com" target="blank"><i className="icon-medium"></i></a>
                <a href="https://codepen.io/cuneyd" target="blank"><i className="icon-codepen"></i></a>
                <a href="mailto:cuneydbolukogluu@gmail.com" target="blank"><i className="icon-envelope-o"></i></a>
                <a href="https://github.com/cuneydbolukoglu" target="blank"><i className="icon-github"></i></a>
            </div>
        </footer>
    )
}

export default Footer;