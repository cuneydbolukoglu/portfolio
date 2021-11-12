import CV from '../assets/cuneydbolukoglu.pdf';

const About = props => {
    return (
        <section className="about">
            <div className="about-left">
                <article className="slide-nav">
                    <h4>👋HI</h4>
                    <p>everyone</p>
                </article>
            </div>
            <div className="about-right">
                <article>
                    <h5>About Me</h5>
                    <p>My Name is Cüneyd, a Front-end developer,
                        I create great sites and web applications with HTML and CSS and decorate them with <b>Javascript</b>.</p>
                    <p>Photoshop, Sketch, Adobe XD, Figma, Zeplin etc.
                        I create responsive and mobile compatible products by using BOOTSTRAP technologies.
                        You can follow my works on <b>GitHub</b> and <b>CodePen</b>.</p>
                    <p>If you have anything to ask, you can <a href="mailto:cuneydbolukogluu@gmail.com"><b>contact me</b></a></p>
                    <b><a href={CV} className="download" target="blank">Download Resume</a></b>
                </article>
            </div>
        </section>
    )
}

export default About;