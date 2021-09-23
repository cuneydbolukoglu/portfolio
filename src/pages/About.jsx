import DownloadIcon from '../assets/img/download.svg';
import CV from '../assets/cuneydbolukoglu.pdf';
import Icon from '../assets/img/desktop.jpg';

const About = props => {

    return (
        <section className="about">
            <article>
                <h2>About Me.</h2>
                <p>Hi, I'm Cüneyd. I am a <b>Front-end developer</b>,
                    I create great sites and web applications with HTML and CSS and decorate them with <b>Javascript</b>.</p>
                <p>Photoshop, Sketch, Adobe XD, Figma, Zeplin etc.
                    I create responsive and mobile compatible products by using BOOTSTRAP technologies.
                    You can follow my works on <a className="link-a" href="http://gihtub.com/cuneydbolukoglu">GitHub</a> and <a className="link-a" href="http://codepen.io/cuneyd">CodePen</a>.</p>
                <p>If you have anything to ask, you can <a className="link-a" href="mailto:cuneydbolukogluu@gmail.com">contact me</a>.</p>
                <p className="about-link"><a className="link-a" href="http://cuneyd.medium.com">medium</a>
                    <a className="link-a" href="http://www.linkedin.com/in/cuneydbolukoglu">linkedin</a>
                    <a className="link-a" href="https://github.com/cuneydbolukoglu">github</a>
                </p>
                <a href={CV} className="download"><img src={DownloadIcon} alt="icon" />Download Resume</a>
            </article>
            <figure>
                <img src={Icon} alt="desktop" />
            </figure>
        </section>
    )
}

export default About;