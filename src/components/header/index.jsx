import { Link } from 'react-router-dom';

const Header = props => {

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className="icon-logo"></i>
                </Link>
            </div>
            <nav>
                <a href="http://github.com/cuneydbolukoglu" target="blank">PROJECT</a>
                <a href="http://linkedin.com/in/cuneydbolukoglu" target="blank">ABOUT ME</a>
            </nav>
        </header>
    )
}

export default Header;