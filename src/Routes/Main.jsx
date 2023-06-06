import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing_page from '../components/Landing_page'
import LoginForm from '../components/LoginForm'
import SpaceX from '../components/SpaceX'

function Main() {
  return (
	<div>
		<Routes>
			<Route path="/" element={<Landing_page />} />
			<Route path='/login' element={<LoginForm/>}/>
			<Route path='/spacex' element={<SpaceX/>}/>
		</Routes>
	</div>
  )
}

export default Main