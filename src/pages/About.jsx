import { useHistory } from 'react-router-dom';

import DownloadIcon from '../assets/img/download.svg';
import CV from '../assets/cuneydbolukoglu.pdf';
import IconGif from '../assets/img/original.gif';

const About = props => {
    const history = useHistory();
    const usehistory = history.location.pathname

    return (
        <section className="about">
            <figure>
                <img src={IconGif} style={{ width: '440px' }} alt="img" />
            </figure>
            <article>
                <h2>About Me.</h2>
                <p>Hi, I'm Cüneyd. I am a <b>Front-end developer</b>,
                    I create great sites and web applications with HTML and CSS and decorate them with <b>Javascript</b>.</p>
                <p>Photoshop, Sketch, Adobe XD, Figma, Zeplin etc.
                    I create responsive and mobile compatible products by using BOOTSTRAP technologies.
                    You can follow my works on <a className="link_a" href="http://gihtub.com/cuneydbolukoglu">GitHub</a> and <a className="link_a" href="http://codepen.io/cuneyd">CodePen</a>.</p>
                <p>If you have anything to ask, you can <a className="link_a" href="mailto:cuneydbolukogluu@gmail.com">contact me</a>.</p>
                <p>Follow me on <a className="link_a" href="http://cuneyd.medium.com">medium</a>, <a className="link_a" href="http://www.linkedin.com/in/cuneydbolukoglu">linkedin</a>, <a className="link_a" href="https://github.com/cuneydbolukoglu">github</a></p>
                <a href={CV} className="download"><img src={DownloadIcon} alt="icon" />Download CV</a>
            </article>
        </section>
    )
}

export default About;