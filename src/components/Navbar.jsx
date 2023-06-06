import React from 'react'
import './Styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
	<div className='navbar'>
		<nav className='nav'>
			<ul>
				<li>
					<Link to='/'>
					  Home
					</Link>
				</li>
				<li>
					<Link to='/login'>
					SpaceX
					</Link>
				</li>
				{/* <li>
					<Link to='/login'>
					 Login
					</Link>
				</li> */}
			</ul>
		</nav>
	</div>
  )
}

export default Navbar