import { Container, Row, Col } from "react-bootstrap";

const About = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <article>
                        <h2> About Me.</h2>
                        <p>Hi, I'm Cüneyd. I am a <b>Front-end developer</b>,
                        I create great sites and web applications with HTML and CSS and decorate them with <b>Javascript</b>.</p>
                        <p>Photoshop, Sketch, Adobe XD, Figma, Zeplin etc.
                        I create responsive and mobile compatible products by using BOOTSTRAP technologies.
                        You can follow my works on <a className="link_a" href="http://gihtub.com/cuneydbolukoglu">GitHub</a> and <a className="link_a" href="http://codepen.io/cuneyd">CodePen</a>.</p>
                    </article>
                </Col>
            </Row>
        </Container>
    )
}

export default About;