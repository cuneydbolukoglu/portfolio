import IconGif from '../assets/img/original.gif';

const Home = props => {
    return (
        <section className="homepage">
            <figure>
                <img src={IconGif} className="icon" alt="icon" />
            </figure>
            <article>
                <h1>Cüneyd BÖLÜKOĞLU</h1>
                <h2>Front-End Developer <br /> at skyz.tech From Turkey</h2>
            </article>
        </section>
    )
}

export default Home;