import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import PoolTable from './components/poolTable.jsx'

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
  const api = window.location.href.includes("localhost") ? "https://cors-anywhere.herokuapp.com/http://samsandberg.com/themasters/" : "http://samsandberg.com/themasters/";
  useEffect(()=>{
    fetch(api)
      .then(res => res.json())
      .then((res)=>{
        if(res){
          const temp = {};
          res.players.forEach((e)=>{
            if(e.player){
              temp[e.player.replace(" (a)","")] = {
                "pos": e.pos,
                "toPar": e.to_par
              }
            }
          });
          setScores(temp);
        }
      })
  },[])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Paper className={classes.paperPadding} elevation={3}>
      <PoolTable leaderboard={scores}/>
    </Paper>
    
  );
}

export default App;
