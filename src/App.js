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
	const espn = window.location.href.includes("localhost") ? "https://enigmatic-hollows-91895.herokuapp.com/https://www.espn.com/golf/leaderboard" : "https://enigmatic-hollows-91895.herokuapp.com/https://www.espn.com/golf/leaderboard";
	const teams = window.location.href.includes("localhost") ? "https://enigmatic-hollows-91895.herokuapp.com/https://raw.githubusercontent.com/ydelloyd/Datasets/master/teams.json" : "https://enigmatic-hollows-91895.herokuapp.com/https://raw.githubusercontent.com/ydelloyd/Datasets/master/teams.json";
	useEffect(() => {
		setEspnLoading(true);
		setTeamsLoading(true);
		fetch(espn)
			.then((res) => {
				return res.text();
			})
			.then((res) => {
				setEspnLoading(false);
				if (res) {
					const $ = cheerio.load(res)
					const $trs = $('.competitors tbody tr')
					const leaderboard = {};
					$trs.toArray().forEach(tr => {
						const tds = $(tr).find('td').toArray();
						const playerPos = $(tds[0]).text();
						const playerName = $(tds[1]).text();
						const playerScore = $(tds[2]).text();
						leaderboard[playerName.replace(" (a)", "")] = {
							"pos": playerPos,
							"toPar": playerScore === "E" ? "0" : playerScore
						}
					});
					console.log(leaderboard);
					setScores(leaderboard);
				} else {
					console.log("There was an error");
				}
			});
		fetch(teams)
			.then((res) => {
				return res.json();
			}).then((res) => {
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
