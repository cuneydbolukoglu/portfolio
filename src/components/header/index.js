import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import MenuData from '../../data/MenuData';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: []
        }
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <Link to="/">
                        <i className="icon-logo"></i>
                    </Link>
                </div>
                <nav>
                    {
                        MenuData.map((item, index) => <Link key={index} to={item.url}>{item.title}</Link>)
                    }
                </nav>
            </header>
        )
    }
}