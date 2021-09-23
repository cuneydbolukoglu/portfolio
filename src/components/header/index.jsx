import { Link } from 'react-router-dom';

const Header = props => {
    const history = false

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className="icon-logo"></i>
                </Link>
            </div>
            {history ?
                <nav>
                    <Link to="/">BACK</Link>
                </nav>
                :
                <nav>
                    <Link to="/about">ABOUT ME</Link>
                </nav>
            }
        </header>
    )
}

export default Header;