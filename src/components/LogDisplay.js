import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const LogDisplay = ({log, title}) => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>{title}</Accordion.Header>
				<Accordion.Body>
					{log.map(line => {
						return <p dangerouslySetInnerHTML={{__html: line}} />
					})}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

export default LogDisplay
