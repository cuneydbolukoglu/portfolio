import About from '../pages/About';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

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

export default MenuData;