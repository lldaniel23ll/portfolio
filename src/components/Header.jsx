import React, { Component } from 'react';
import "./css/Header.css"

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand text-info" href="#">Daniel</a>
                <button className="navbar-toggler border border-info text-info" 
                onClick={() => {this.setState({show: !this.state.show})}}>
                <span className="navbar-toggler-icon"></span>
                {/* {this.state.show} */}
                </button>
                <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">SERVICES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}