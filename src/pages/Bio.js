import React, {useState} from 'react'
import {Container, Tabs, Tab} from 'react-bootstrap'
import PawnCard from '../components/PawnCard'
import vadim from '../assets/vadimDumbo.png'
import terryg from '../assets/terry.png'
import kevinp from '../assets/kevin.png'

const Bio = () => {
	const [key, setKey] = useState('home')
	const dumbo = {
		name: 'Vadim Dumbo Géradon',
		sex: 'Male',
		age: '46 (102)',
		image: vadim,
		background: ['Musical Kid', 'Animal Farmer'],
		traits: ['Hard Worker', 'Iron Willed'],
		stats: [
			{
				name: 'Shooting',
				value: 2,
				color: 'info',
			},
			{
				name: 'Melee',
				value: 4,
				color: 'warning',
			},
			{
				name: 'Construction',
				value: 2,
				color: 'info',
			},
			{
				name: 'Mining',
				value: 3,
				color: 'info',
			},
			{
				name: 'Cooking',
				value: 2,
				color: 'info',
			},
			{
				name: 'Plants',
				value: 5,
				color: 'danger',
			},
			{
				name: 'Animals',
				value: 8,
				color: 'danger',
			},
			{
				name: 'Crafting',
				value: 2,
				color: 'info',
			},
			{
				name: 'Artistic',
				value: 9,
				color: 'danger',
			},
			{
				name: 'Medical',
				value: 1,
				color: 'info',
			},
			{
				name: 'Social',
				value: 2,
				color: 'info',
			},
			{
				name: 'Intellectual',
				value: 2,
				color: 'info',
			},
		],
	}

	const terry = {
		name: 'Terry Géradon',
		sex: 'Male',
		age: '47 (2506)',
		image: terryg,
		background: ['Medieval Slave', 'Space Marine'],
		traits: ['Fast Learner', 'Ascetic', 'Jogger'],
		stats: [
			{
				name: 'Shooting',
				value: 13,
				color: 'danger',
			},
			{
				name: 'Melee',
				value: 9,
				color: 'danger',
			},
			{
				name: 'Construction',
				value: 6,
				color: 'danger',
			},
			{
				name: 'Mining',
				value: 3,
				color: 'info',
			},
			{
				name: 'Cooking',
				value: 4,
				color: 'info',
			},
			{
				name: 'Plants',
				value: 6,
				color: 'warning',
			},
			{
				name: 'Animals',
				value: 5,
				color: 'info',
			},
			{
				name: 'Crafting',
				value: 1,
				color: 'info',
			},
			{
				name: 'Artistic',
				value: 0,
				color: 'info',
			},
			{
				name: 'Medical',
				value: 4,
				color: 'info',
			},
			{
				name: 'Social',
				value: 5,
				color: 'info',
			},
			{
				name: 'Intellectual',
				value: 0,
				color: 'info',
			},
		],
	}
	const kelvin = {
		name: 'Kelvin Pugh',
		sex: 'Male',
		age: '34 (85)',
		image: kevinp,
		background: ['Story Writer', 'Low-wage Worker'],
		traits: ['Great Memory', 'Quick Sleeper', 'Nervous'],
		stats: [
			{
				name: 'Shooting',
				value: 1,
				color: 'info',
			},
			{
				name: 'Melee',
				value: 2,
				color: 'info',
			},
			{
				name: 'Construction',
				value: 0,
				color: 'info',
			},
			{
				name: 'Mining',
				value: 0,
				color: 'info',
			},
			{
				name: 'Cooking',
				value: 7,
				color: 'danger',
			},
			{
				name: 'Plants',
				value: 4,
				color: 'info',
			},
			{
				name: 'Animals',
				value: 2,
				color: 'info',
			},
			{
				name: 'Crafting',
				value: 6,
				color: 'warning',
			},
			{
				name: 'Artistic',
				value: 7,
				color: 'warning',
			},
			{
				name: 'Medical',
				value: 0,
				color: 'info',
			},
			{
				name: 'Social',
				value: 1,
				color: 'info',
			},
			{
				name: 'Intellectual',
				value: 8,
				color: 'danger',
			},
		],
	}
	return (
		<Container className="p-2">
			<Tabs
				id="fill-tab-example"
				className="mb-3"
				fill
				activeKey={key}
				onSelect={k => setKey(k)}
			>
				<Tab
					eventKey="home"
					title="Dumbo"
				>
					<PawnCard character={dumbo} />
				</Tab>
				<Tab
					eventKey="terry"
					title="Terry"
				>
					<PawnCard character={terry} />
				</Tab>
				<Tab
					eventKey="kelvin"
					title="Kelvin"
				>
					<PawnCard character={kelvin} />
				</Tab>
			</Tabs>
		</Container>
	)
}

export default Bio
