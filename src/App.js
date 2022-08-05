import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'

import Bio from './pages/Bio'
import Home from './pages/Home'
import Logs from './pages/Logs'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavbarComponent />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="logs"
						element={<Logs />}
					/>
					<Route
						path="bios"
						element={<Bio />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
