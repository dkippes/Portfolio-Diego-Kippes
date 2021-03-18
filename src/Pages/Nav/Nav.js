import React from 'react'
import './Nav.css';

export default function Nav() {
	return (
		<>
			<nav className='navBar'>
				<ul>
					<li className='navbar-links link-home'><a href="">Home</a></li>
					<li className='navbar-links link-aboutMe'><a href="">Sobre mi</a></li>
					<li className='navbar-links link-Tech'><a href="">Tecnologias</a></li>
					<li className='navbar-links link-Projects'><a href="">Projectos</a></li>
					<li className='navbar-links link-Contact'><a href="">Contactame</a></li>
				</ul>
			</nav>
		</>
	)
}
