import img from '../assets/img/membership.png';
import imgMobile from '../assets/img/membership-mobile.png';

const Portfolio = props => {

    return (
        <section className="portfolio">
            <article>
                <h2>Project</h2>
                <p>Memberhship App</p>
                <h2>Task</h2>
                <p>Membership Login Design</p>
                <h2>Source</h2>
                <p>
                    <a href="https://github.com/cuneydbolukoglu/membership-app">Github</a><br/>
                    <a href="https://membership-app-91af9.firebaseapp.com">Website</a>
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