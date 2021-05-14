import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getTeams} from '../services/TeamServices'; 
import {getLeaderboard} from '../services/LeaderboardService';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';



import PoolTable from './poolTable.jsx'

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
	},
	formControl: {
        padding: theme.spacing(3)
    },
	flexend: {
    	alignSelf: 'flex-end'
    },
	center: {
    	alignSelf: 'center'
    },
	full: {
    	width: '100%'
    }
	// paperPadding: {
	// 	margin: '6.9vh'
	// },
	// root: {
	// 	width: '100%',
	// 	'& > * + *': {
	// 	  marginTop: theme.spacing(2),
	// 	},
	//   },
}));

function PoolMain(props) {
	const classes = useStyles();

	const [espnLoading, setEspnLoading] = useState(false);
	const [teamsLoading, setTeamsLoading] = useState(false);
	const [currentEvent, setCurrentEvent] = useState(null);
	const [scores, setScores] = useState({});
	const [allTeams, setAllTeams] = useState([]);
	const [buttonPressed, setButtonPressed] = useState(false);


	const handleChange = (event) => {
        setCurrentEvent(event.target.value);
    };

	const selectEvent = ()=> {
		console.log(currentEvent)
		if(currentEvent){
			console.log("Inside")
			setButtonPressed(true);
			setEspnLoading(true);
			setTeamsLoading(true);
			getLeaderboard().then((res) => {
					console.log(res);
					setEspnLoading(false);
					if (res) {
						setScores(res.data);
					} else {
						console.log("There was an error");
					}
				});
			getTeams(currentEvent).then((res) => {
					console.log(res.data)
					setTeamsLoading(false)
					if (res) {
						setAllTeams(res.data);
					} else {
						console.log("There was an error");
					}
				});
		}
	}
	
	return (
		<>
		<Grid container spacing={3} className={classes.formControl}>
			<Grid item xs={6} className={classes.center}>
				<FormControl className={classes.full}>
					<InputLabel id="event">Event</InputLabel>
					<Select
						labelId="Select Event"
						id="eventSelect"
						value={currentEvent ? currentEvent : -1}
						onChange={handleChange}
					>
						<MenuItem value={-1}>Select an Event</MenuItem>
						{props.events.filter((e)=>{
							let d = new Date(); 
							d.setHours(0,0,0,0);
							let n = new Date(new Date(e.eventStart));
							n.setHours(0,0,0,0);
							return e.eventStart ? n <= d : false
						}).map((e) => {
							return <MenuItem value={e.id}>{e.name ? e.name : ""}</MenuItem>
						})}
					</Select>
				</FormControl>
			</Grid>
			<Grid item className={classes.flexend}>
				<Button variant="contained" color="primary" onClick={selectEvent}>
                    Select Event
                </Button>
			</Grid>
			{currentEvent && buttonPressed && <Grid item xs={12}>
				{((espnLoading || teamsLoading) ? <LinearProgress /> : <PoolTable leaderboard={scores} teams={allTeams} />)}
			</Grid>}
		</Grid>
			
                
		</>
	);
}

export default PoolMain;
