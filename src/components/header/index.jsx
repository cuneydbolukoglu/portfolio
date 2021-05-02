import { Link } from 'react-router-dom';
// import MenuData from '../../data/MenuData';

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
                {/* {
                    MenuData.map((item, index) => <Link key={index} to={item.url}>{item.title}</Link>)
                } */}

                <div class="hmbrgr-button">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </nav>
        </header>
    )
}

export default Header;