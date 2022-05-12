import React from 'react';
import images from '../../assets/images/index'
import './Navbar.scss';

const Navbar = () =>{
    return(
        <nav className='navigation'>
            <a href="/"><img src={images.logo}/></a>
            
            <ul className='menu'>
                <li className='menu__item'><a href="/">Home</a></li>
                <li className='menu__item'><a href="/">Resources</a></li>
                <li className='menu__item'><a href="/">Team</a></li>
                <li className='menu__item'><a href="/">Features</a></li>
                <li className='menu__item'><a href="/">Comunity</a></li>
                <li className='menu__item'><a href="/">Downloads</a></li>
                <li className='menu__item'><a href="/">Contact us</a></li>
            </ul>
            
        </nav>
    )
}
export default Navbar;