import { Link } from 'react-router-dom';

const Header = props => {

    const addClass = () => {
        const hmbrgrButton = document.querySelector(".hmbrgr-button");
        const mobileMenu = document.querySelector(".nav-mobile");

        hmbrgrButton.classList.toggle('change')
        mobileMenu.classList.toggle('active');
    }

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className="icon-logo"></i>
                </Link>
            </div>
            <nav>
                <Link to="/works">WORKS</Link>
                <Link to="/about">ABOUT ME</Link>
            </nav>
            <div onClick={addClass} className="hmbrgr-button">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="nav-mobile">
                <Link to="/works" onClick={addClass}>WORKS</Link>
                <Link to="/about" onClick={addClass}>ABOUT ME</Link>
                <a href="mailto:cuneydbolukogluu@gmail.com?subject=Contact from website" onClick={addClass}>CONTACT ME</a>
            </div>
        </header>
    )
}

export default Header;