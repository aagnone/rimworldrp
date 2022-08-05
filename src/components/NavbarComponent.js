import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'

const NavbarComponent = () => {
	return (
		<Navbar
			bg="dark"
			expand="lg"
			variant="dark"
		>
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>Nail Rimworld Logs</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/logs">
							<Nav.Link>Logs</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/bios">
							<Nav.Link>Character Bios</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/factions">
							<Nav.Link>Other Factions</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/map">
							<Nav.Link>Map Progress</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarComponent
