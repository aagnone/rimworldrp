import React from 'react'
import {Container, Row, Col, Stack, ProgressBar} from 'react-bootstrap'

const pawnCard = ({character: {name, sex, age, background, image, traits, stats}}) => {
	return (
		<Row className="justify-content-center">
			<Col>
				<div className="text-center card-box">
					<div className="member-card pt-2 pb-2 row">
						<Col
							xs={8}
							className="thumb-lg member-thumb mx-auto"
						>
							<img
								src={image}
								className="rounded-circle img-thumbnail"
								alt="asda-imasdge"
							/>
						</Col>
						<Container className="mt-2">
							<h4>{name}</h4>
						</Container>
						<Container>
							<h6>
								{sex}, {age}
							</h6>
						</Container>
						<Container>
							<h6>Background</h6>
							<Stack
								direction="horizontal"
								className="justify-content-center"
								gap={5}
							>
								{background.map((back, index) => (
									<p
										className="mb-0"
										key={index}
									>
										{back}
									</p>
								))}
							</Stack>
						</Container>
						<Container>
							<h6>Traits</h6>
							<Stack
								direction="horizontal"
								className="justify-content-center"
								gap={5}
							>
								{traits.map((trait, index) => (
									<p
										className="mb-0"
										key={index}
									>
										{trait}
									</p>
								))}
							</Stack>
						</Container>
						<Container className="mt-2">
							<Stack direction="vertical">
								{stats.map(stat => (
									<Stack
										direction="horizontal"
										className="align-items-center m-0"
										gap={4}
									>
										<p
											className="mb-0"
											style={{marginRight: '1rem!important'}}
										>
											{stat.name}
										</p>
										<ProgressBar
											className="ms-auto w-100 m-4 mb-0 mt-0"
											style={{height: '1rem'}}
											now={stat.value * 5}
											label={`${stat.value}`}
											variant={stat.color}
										/>
									</Stack>
								))}
							</Stack>
						</Container>
					</div>
				</div>
			</Col>
		</Row>
	)
}

export default pawnCard
