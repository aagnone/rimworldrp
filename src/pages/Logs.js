import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap'

import LogDisplay from '../components/LogDisplay'

const Logs = () => {
	// const [perksTranscripts, setPerksTranscripts] = useState([])

	// const perksTitles = ['Perkins vs Prisoner', 'Cand vs Perkins', 'Perkins saving Private McMillion']

	// useEffect(() => {
	// 	let allTranscripts = []
	// 	perksLogs.forEach(log => {
	// 		let lines = []
	// 		fetch(log)
	// 			.then(r => r.text())
	// 			.then(text => {
	// 				text.split('.').forEach(line => {
	// 					lines = [...lines, line]
	// 				})
	// 			})
	// 			.then(() => (allTranscripts = [...allTranscripts, lines.reverse()]))
	// 			.then(() => setPerksTranscripts(allTranscripts))
	// 	})
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	return (
		<Container>
			{/* <Container>
				<h2>Perkins' Logs (Jon)</h2>
				{perksTranscripts.map((log, index) => {
					return (
						<LogDisplay
							log={log}
							title={perksTitles[index]}
						/>
					)
				})}
			</Container> */}
		</Container>
	)
}

export default Logs
