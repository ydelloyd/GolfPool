import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function PoolTable(props) {
	const classes = useStyles();
	const [results, setResults] = useState([]);
	const numOr0 = n => isNaN(n) ? 999 : n

	useEffect(() => {
		if (Object.keys(props.leaderboard).length > 0) {
			let temp = props.teams.map((e) => {
				let toPar = [props.leaderboard[e.player1] ? props.leaderboard[e.player1].toPar : '-',
				props.leaderboard[e.player2] ? props.leaderboard[e.player2].toPar : '-',
				props.leaderboard[e.player3] ? props.leaderboard[e.player3].toPar : '-',
				props.leaderboard[e.player4] ? props.leaderboard[e.player4].toPar : '-',
				props.leaderboard[e.player5] ? props.leaderboard[e.player5].toPar : '-'];
				toPar = toPar.sort((a, b) => {
					if (isNaN(parseInt(a))) {
						return 1;
					} else if (isNaN(parseInt(b))) {
						return -1;
					} else {
						return parseInt(a) - parseInt(b)
					}
				});
				return {
					...e,
					"total": [toPar[0], toPar[1], toPar[2]].reduce((a, b) => numOr0(parseInt(a)) + numOr0(parseInt(b)))
				}
			});
			temp.sort((a, b) => {
				if (isNaN(parseInt(a.total))) {
					return 1;
				} else if (isNaN(parseInt(b.total))) {
					return -1;
				} else {
					if (parseInt(a.total) === parseInt(b.total)) {
						return Math.abs(a.total - a.tiebreaker) - Math.abs(b.total - b.tiebreaker)
					} else {
						return parseInt(a.total) - parseInt(b.total)
					}
				}
			})
			temp.forEach((e, i) => {
				if (i === 0) {
					if (temp[i + 1].total === e.total && Math.abs(temp[i + 1].total - temp[i + 1].tiebreaker) - Math.abs(e.total - e.tiebreaker)) {
						temp[i] = { ...e, "pos": "T" + (i + 1) }
					} else {
						temp[i] = { ...e, "pos": i + 1 }
					}
				} else if (i !== temp.length - 1) {
					if (temp[i + 1].total === e.total && Math.abs(temp[i + 1].total - temp[i + 1].tiebreaker) === Math.abs(e.total - e.tiebreaker)) {
						temp[i] = { ...e, "pos": "T" + (i + 1) }
					} else if (temp[i - 1].total === e.total && Math.abs(temp[i - 1].total - temp[i - 1].tiebreaker) === Math.abs(e.total - e.tiebreaker)) {
						temp[i] = { ...e, "pos": temp[i - 1].pos }
					} else {
						temp[i] = { ...e, "pos": i + 1 }
					}
				} else {
					if (temp[i - 1].total === e.total && Math.abs(temp[i - 1].total - temp[i - 1].tiebreaker) === Math.abs(e.total - e.tiebreaker)) {
						temp[i] = { ...e, "pos": temp[i - 1].pos }
					} else {
						temp[i] = { ...e, "pos": i + 1 }
					}
				}
			})
			setResults(temp)
		}
	}, [props.leaderboard])
	return (
		<TableContainer>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Place</TableCell>
						<TableCell>Team Name</TableCell>
						<TableCell>Player 1</TableCell>
						<TableCell>Player 2</TableCell>
						<TableCell>Player 3</TableCell>
						<TableCell>Player 4</TableCell>
						<TableCell>Player 5</TableCell>
						<TableCell>Tie Breaker</TableCell>
						<TableCell>To Par</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{results.map((row) => (
						<TableRow key={row.team}>
							<TableCell>{row.pos}</TableCell>
							<TableCell>{row.team}</TableCell>
							<TableCell>{row.player1 + ` (${props.leaderboard[row.player1] ? props.leaderboard[row.player1].toPar : '-'})`}</TableCell>
							<TableCell>{row.player2 + ` (${props.leaderboard[row.player2] ? props.leaderboard[row.player2].toPar : '-'})`}</TableCell>
							<TableCell>{row.player3 + ` (${props.leaderboard[row.player3] ? props.leaderboard[row.player3].toPar : '-'})`}</TableCell>
							<TableCell>{row.player4 + ` (${props.leaderboard[row.player4] ? props.leaderboard[row.player4].toPar : '-'})`}</TableCell>
							<TableCell>{row.player5 + ` (${props.leaderboard[row.player5] ? props.leaderboard[row.player5].toPar : '-'})`}</TableCell>
							<TableCell>{row.tiebreaker}</TableCell>
							<TableCell>{row.total > 100 ? "-" : row.total}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default PoolTable;
