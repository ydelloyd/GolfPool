import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import PoolMain from './components/poolMain.jsx'
import AdminTab from './components/adminTab.jsx';
import CreateTeamTab from './components/createTeamTab.jsx';
import cheerio from 'cheerio';
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {getAllEvents} from './services/EventServices';




const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},

});

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function App() {
	const classes = useStyles();

	const [events, setEvents] = useState([]);

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(()=>{
        getAllEvents().then((e)=>{
            setEvents(e.data);
            console.log(e.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])



	return (
		<>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
					variant="fullWidth">
					<Tab label="Leaderboard" {...a11yProps(0)} />
					<Tab label="Create Teams" {...a11yProps(1)} />
					<Tab label="Admin" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			{value === 0 && <PoolMain events={events}/>}
			{value === 1 && <CreateTeamTab events={events}/>}
			{value === 2 && <AdminTab/>}
		</>

	);
}

export default App;
