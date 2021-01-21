import { Container, Row, Col } from 'react-bootstrap';

const Contact = props => {
    return (
        <div className="contact">
            <Container>
                <Row>
                    <Col>
                        <article>
                            <h2>Keep in touch !</h2>
                            <p>If you have anything to ask, you can <a className="link_a" href="mailto:cuneydbolukogluu@gmail.com">contact me</a>.</p>
                            <p>Find me on <a className="link_a" href="http://cuneyd.medium.com">medium</a> or <a className="link_a" href="http://www.linkedin.com/in/cuneydbolukoglu">linkedin</a></p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;