import img from '../assets/img/membership.png';

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
            </figure>
        </section>
    )
}

export default Portfolio;