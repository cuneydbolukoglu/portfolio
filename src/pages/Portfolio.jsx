import { Link } from 'react-router-dom';
import img from '../assets/img/membership.png';
import imgMobile from '../assets/img/membership-mobile.png';

const Portfolio = props => {

    return (
        <section className="about">
            <article>
                <h2>Project</h2>
                <p>Memberhship App</p>
                <h2>Task</h2>
                <p>Membership Login Design</p>
                <h2>Source</h2>
                <p>
                    <Link to="https://github.com/cuneydbolukoglu/membership-app">GitHub</Link>
                    <Link to="https://membership-app-91af9.firebaseapp.com">Website</Link>
                </p>
            </article>
            <figure>
                <img style={{ width: '500px' }} src={img} alt="" />
                <img style={{
                    width: '150px',
                    position: 'relative',
                    top: '-250px',
                    left: '15px'
                }} src={imgMobile} alt="" />
            </figure>
        </section>
    )
}

export default Portfolio;