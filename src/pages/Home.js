import React from 'react'
import {Container, Alert} from 'react-bootstrap'

const Home = () => {
	return (
		<Container>
			<Container className="d-flex justify-content-center flex-column">
				<h1 className="mb-5">Nail Confederacy Mission #2</h1>
				<Alert variant="danger">Previous Mission: FAILURE</Alert>
				<p>
					The next expedition lead by Vadim Dumbo Géradon begins today as their pods touch down in the flat wastelands
					of GS 8 Meridiana.
				</p>
				<p>The expectation is to colonize and assimilate the cultures and resources of the planet. </p>
				<p>The terrain is as follows:</p>
				<p>Flat</p>
				<p>Easily traversable</p>
				<p>Slate, sandstone, and granite local stone types</p>
				<p>Elevation of 1477m</p>
				<p>Average temperature of 67.8F</p>
				<p>Expected rainfall of approx 1712mm</p>
				<p>1.53&deg;N 5.20&deg;W</p>
			</Container>
		</Container>
	)
}

export default Home
