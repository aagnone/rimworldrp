import React, {useState, useEffect} from 'react'

import {Container} from 'react-bootstrap'

import LogDisplay from '../components/LogDisplay'

import proteinDeath from '../logs/proteindeath.txt'
import dumbovsbutum from '../logs/dumbo/dumbovsbutum.txt'

const Logs = () => {
	const [proteinTranscripts, setProteinTranscripts] = useState([])
	const proteinTitles = ['Oh How Little we Knew Thee']
	const proteinLogs = [proteinDeath]

	const [dumboTranscripts, setDumboTranscripts] = useState([])
	const dumboTitles = ['Oh How Little we Knew Thee']
	const dumboLogs = [dumbovsbutum]

	useEffect(() => {
		const regex1 = new RegExp('color=#D09B61FF', 'gm')
		const subst1 = `span class='character-name'`
		const regex2 = new RegExp('</color>', 'gm')
		const subst2 = `</span>`
		let allTranscripts = []
		proteinLogs.forEach(log => {
			let lines = []
			fetch(log)
				.then(r => r.text())
				.then(text => {
					text.split('.').forEach(line => {
						let modLine = line.replace(regex1, subst1)
						lines = [...lines, modLine.replace(regex2, subst2)]
					})
				})
				.then(() => (allTranscripts = [...allTranscripts, lines.reverse()]))
				.then(() => setProteinTranscripts(allTranscripts))
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const regex1 = new RegExp('color=#D09B61FF', 'gm')
		const subst1 = `span class='character-name'`
		const regex2 = new RegExp('</color>', 'gm')
		const subst2 = `</span>`
		let allTranscripts = []
		dumboLogs.forEach(log => {
			let lines = []
			fetch(log)
				.then(r => r.text())
				.then(text => {
					text.split('.').forEach(line => {
						let modLine = line.replace(regex1, subst1)
						lines = [...lines, modLine.replace(regex2, subst2)]
					})
				})
				.then(() => (allTranscripts = [...allTranscripts, lines.reverse()]))
				.then(() => setDumboTranscripts(allTranscripts))
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<Container>
			<Container>
				<h2>Protein's Logs (Rob)</h2>
				{proteinTranscripts.map((log, index) => {
					return (
						<LogDisplay
							log={log}
							title={proteinTitles[index]}
						/>
					)
				})}
			</Container>
			<Container>
				<h2>Dumbos's Logs (Jon)</h2>
				{dumboTranscripts.map((log, index) => {
					return (
						<LogDisplay
							log={log}
							title={dumboTitles[index]}
						/>
					)
				})}
			</Container>
		</Container>
	)
}

export default Logs
