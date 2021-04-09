import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import PoolTable from './components/poolTable.jsx'
import cheerio from 'cheerio';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	paperPadding: {
		margin: '6.9vh'
	},
	// root: {
	// 	width: '100%',
	// 	'& > * + *': {
	// 	  marginTop: theme.spacing(2),
	// 	},
	//   },
});

function App() {
	const classes = useStyles();
	const [scores, setScores] = useState({});
	const [allTeams, setAllTeams] = useState([]);
	const [espnLoading, setEspnLoading] = useState(false);
	const [teamsLoading, setTeamsLoading] = useState(false);
	const espn = window.location.href.includes("localhost") ? "https://protected-citadel-17952.herokuapp.com/leaderboard" : "https://protected-citadel-17952.herokuapp.com/leaderboard";
	const teams = window.location.href.includes("localhost") ? "https://protected-citadel-17952.herokuapp.com/teams" : "https://protected-citadel-17952.herokuapp.com/teams";
	useEffect(() => {
		setEspnLoading(true);
		setTeamsLoading(true);
		fetch(espn)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				setEspnLoading(false);
				if (res) {
					setScores(res);
				} else {
					console.log("There was an error");
				}
			});
		fetch(teams)
			.then((res) => {
				return res.json();
			}).then((res) => {
				console.log(res)
				setTeamsLoading(false)
				if(res){
					setAllTeams(res);
				} else {
					console.log("There was an error");
				}
			});
	}, [])

	return (
		<Paper className={classes.paperPadding} elevation={3}>
			{(espnLoading || teamsLoading) ? <LinearProgress /> : <PoolTable leaderboard={scores} teams={allTeams}/>}
		</Paper>

	);
}

export default App;
