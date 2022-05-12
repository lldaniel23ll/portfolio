import React, { Component } from 'react';
import "./css/Header.css";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

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
                    
                <a className="navbar-brand text-info" href="/">logo</a>
                <button className="navbar-toggler border border-info text-info" 
                onClick={() => {this.setState({show: !this.state.show})}}>
                <span className="navbar-toggler-icon"></span>
                {/* {this.state.show} */}
                </button>
                <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        
                    <a className="nav-link text-dark" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        
                    <a className="nav-link text-dark" href="/Services">Services</a>
                    </li>
                    <li className="nav-item">
                        
                    <a className="nav-link text-dark" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        
                    <a className="nav-link text-dark" href="/Contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}