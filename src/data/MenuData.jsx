import About from '../pages/about';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';

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
    }
]

export default MenuData