import './Navbar.css'
import React from 'react'
import Folha from '../../img/blue-leaf.png'


const Navbar = props => (
    <div className="Navbar">
        <img src={Folha} alt=""></img>
        <nav>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about" id="about">Sobre Nós</a>
                </li>
                <li>
                    <a href="/">Logins</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navbar