import About from '../pages/about';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';

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