import video from '../assets/video/Air-Bubbles.mp4';

const Home = props => {
    return (
        <section className="homepage">
            <figure>
                <video src={video} width="100%" height="100%" autoplay controls muted>
                </video>
            </figure>
            <article>
                <h1>Hi! I’m Cüneyd</h1>
                <h2>Front-End Developer</h2>
                <h3>at skyz.tech from Turkey</h3>
            </article>
        </section>
    )
}

export default Home;