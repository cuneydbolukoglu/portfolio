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
                <Link to="/about">ABOUT ME</Link>
            </nav>
        </header>
    )
}

export default Header;