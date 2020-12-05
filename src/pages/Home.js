import React, { Component } from 'react';

import logo from '../assets/img/logo.svg'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <section className="home-section">
                <article>
                    <img src={logo} alt="logo" />
                    <h1>Cüneyd BÖLÜKOĞLU</h1>
                    <h2>Front-end Developer</h2>
                </article>
            </section>
        )
    }
}