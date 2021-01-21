import About from '../pages/About';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

export const MenuData = [
    {
        url: '/',
        page: Home
    },
    {
        title: 'About',
        url: '/about',
        page: About
    },
    {
        title: 'Experiments',
        url: '/portfolio',
        page: Portfolio
    },
    {
        title: 'Contact',
        url: '/contact',
        page: Contact
    }
]

export default MenuData;