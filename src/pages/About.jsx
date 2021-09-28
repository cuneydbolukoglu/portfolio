import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DownloadIcon from '../assets/img/download.svg';
import CV from '../assets/cuneydbolukoglu.pdf';
import IconGif from '../assets/img/original.gif';

const About = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'HEADER_BACK_CHANGE',
            headerBack: true
        })

        return () => {
            dispatch({
                type: 'HEADER_BACK_CHANGE',
                headerBack: false
            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }
    })

    return (
        <section className="about">
            <figure>
                <img src={IconGif} className="icon" alt="icon" />
            </figure>
            <article>
                <h2>About Me.</h2>
                <p>Hi, I'm Cüneyd. I am a <b>Front-end developer</b>,
                    I create great sites and web applications with HTML and CSS and decorate them with <b>Javascript</b>.</p>
                <p>Photoshop, Sketch, Adobe XD, Figma, Zeplin etc.
                    I create responsive and mobile compatible products by using BOOTSTRAP technologies.
                    You can follow my works on <b>GitHub</b> and <b>CodePen</b>.</p>
                <p>If you have anything to ask, you can <a className="link-a" href="mailto:cuneydbolukogluu@gmail.com">contact me</a>.</p>
                <h2>Social.</h2>
                <p className="about-link"><a className="link-a" href="http://cuneyd.medium.com">medium</a>
                    <a className="link-a" href="http://www.linkedin.com/in/cuneydbolukoglu">linkedin</a>
                    <a className="link-a" href="https://github.com/cuneydbolukoglu">github</a>
                </p>
                <p><a href={CV} className="download link-a"><img src={DownloadIcon} alt="icon" />Download Resume</a></p>
            </article>
        </section>
    )
}

export default About;