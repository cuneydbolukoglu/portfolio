import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <footer>
                <div>
                    Portfolio
                </div>
                <div className="social_link">
                    <a href="https://www.linkedin.com/in/cuneydbolukoglu/" target="blank"><i className="icon-linkedin-in-brands"></i></a>
                    <a href="https://codepen.io/cuneyd" target="blank"><i className="icon-codepen-brands"></i></a>
                    <a href="mailto:cuneydbolukogluu@gmail.com" target="blank"><i className="icon-envelope-regular"></i></a>
                    <a href="https://github.com/cuneydbolukoglu" target="blank"><i className="icon-github-brands"></i></a>
                </div>
            </footer>
        )
    }
}