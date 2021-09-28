import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = props => {
    const headerBack = useSelector(state => state ? state.headerBack : '');

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className="icon-logo"></i>
                </Link>
            </div>
            <nav>
                {headerBack ?
                    <Link to="/">Back</Link>
                    :
                    <>
                        <a href="http://github.com/cuneydbolukoglu" target="blank">Work</a>
                        <Link to="/about">About</Link>
                    </>
                }
            </nav>
        </header>
    )
}

export default Header;