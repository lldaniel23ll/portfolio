import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import logo from '../logo.svg';

const Footer = () => {
    return ( 
        <div>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <nav className="row">
                        <a href="#" className="col-3 text-reset text-uppercase d-flex align-items-center">
                            <img src={logo} alt="" className='img-logo mr-2' height={150} />
                        </a>
                        <ul className="col-3 list-unstyled">
                            <div className='text-center'>
                                <li className="font-weight-bold text-uppercase text-center">Resources</li>
                                <div className='m-3'>
                                    <li><a href="" className="text-reset text-center">Link 1</a></li>
                                    <li><a href="" className="text-reset text-center">Link 2</a></li>
                                    <li><a href="" className="text-reset text-center">Link 3</a></li>
                                </div>
                            </div>
                        </ul>

                        <ul className="col-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase text-center">Quick Links</li>
                            <p className='text-center m-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem maiores accusantium, quo unde perspiciatis sequi et voluptatum ratione, reprehenderit nobis nesciunt aliquid voluptate commodi omnis, blanditiis totam aut repellendus.
                            </p>
                        </ul>

                        <ul className="col-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase text-center">Social network</li>
                            <li className='d-flex justify-content-between'>
                                <a href="" className="text-reset"><FontAwesomeIcon icon={faTwitter} style={{fontSize: '50px'}}/></a>
                                <a href="" className="text-reset"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: '50px'}}/></a>
                                <a href="" className="text-reset"><FontAwesomeIcon icon={faGithub} style={{fontSize: '50px'}} /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;