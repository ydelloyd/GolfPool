import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import PoolTable from './components/poolTable.jsx'
import cheerio from 'cheerio';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	paperPadding: {
		margin: '16px'
	}
});

function App() {
	const classes = useStyles();
	const [scores, setScores] = useState({});
	const [allTeams, setAllTeams] = useState([]);
	const espn = window.location.href.includes("localhost") ? "https://enigmatic-hollows-91895.herokuapp.com/https://www.espn.com/golf/leaderboard" : "https://enigmatic-hollows-91895.herokuapp.com/https://www.espn.com/golf/leaderboard";
	const teams = window.location.href.includes("localhost") ? "https://enigmatic-hollows-91895.herokuapp.com/https://raw.githubusercontent.com/ydelloyd/Datasets/master/teams.json" : "https://enigmatic-hollows-91895.herokuapp.com/https://raw.githubusercontent.com/ydelloyd/Datasets/master/teams.json";
	useEffect(() => {
		fetch(espn)
			.then((res) => {
				return res.text();
			})
			.then((res) => {
				if (res) {
					const $ = cheerio.load(res)
					const $trs = $('.competitors tbody tr')
					console.log($trs)
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
					setScores(leaderboard);
				} else {
					console.log("There was an error");
				}
			});
		fetch(teams)
			.then((res) => {
				return res.json();
			}).then((res) => {
				if(res){
					setAllTeams(res);
				} else {
					console.log("There was an error");
				}
			});
	}, [])

	return (
		<Paper className={classes.paperPadding} elevation={3}>
			<PoolTable leaderboard={scores} teams={allTeams}/>
		</Paper>

	);
}

export default App;
