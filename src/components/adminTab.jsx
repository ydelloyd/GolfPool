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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CreateEvent from './CreateEvent';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button:{
        marginTop: '1vh',
        marginRight: '1vh'
    },
    rightButton: {
        marginTop: '1vh',
        marginLeft: '1vh',
        marginRight: '1vh'
    },
    rightAlign: {
        textAlign: 'right',
        
    },
    title: {
        marginTop: '1vh',
        marginLeft: '1vh'
    },
    content: {
        marginTop: '1vh',
        marginLeft: '1vh',
        marginRight: '1vh'
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
});

function AdminTab(props) {
    const classes = useStyles();
    const [pageState, setPageState] = useState(0);
    const [adminVal, setAdminVal] = useState({"username":"", "password": ""})
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState(false);

    const getText = () => {
        if(pageState === 0){
            return "Select an Action"
        } else if(pageState === 1){
            return "Create an Event"
        } else if(pageState === 2){
            return "Edit an Event"
        }
    }

    const authenticate = () => {
        if(adminVal.username === "admin" && adminVal.password === "jiffy"){
            setAdmin(true);
            setError(false);
        } else {
            setError(true);
        }
    }
    
    const handleLogin = (event) => {
        setAdminVal({...adminVal, [event.target.id]: event.target.value})
    }

    return (
        <>
        {admin ? <Grid container justify="space-between" spacing={2}>
            <Grid item xs={8}>
                <Typography variant="h5" className={classes.title}>
                   {getText()}
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.rightAlign}>
                <Button className={classes.button} variant="contained" color="primary" onClick={()=>{setPageState(1)}}>
                    Create Event
                </Button>
                {/* <Button className={classes.rightButton} variant="contained" color="primary" onClick={()=>{setPageState(2)}}>
                    Edit Event
                </Button> */}
            </Grid>
            <Grid item xs={12}>
                {pageState === 1 && <CreateEvent/>}
            </Grid>
        </Grid> : 
        <Grid container justify="space-between" spacing={2} className={classes.title}>
            <Grid item xs={12}>
                <TextField id="username" error={error} helperText={error ? "Incorrect Credentials" : ""} label="Username" value={adminVal.username} onChange={handleLogin}/>
            </Grid>
            <Grid item xs={12}>
                <TextField id="password" error={error} label="Password" type="password" value={adminVal.password} helperText={error ? "Incorrect Credentials" : ""} onChange={handleLogin}/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={authenticate}>
                    Login
                </Button>
            </Grid>
        </Grid>}
        </>
    );
}

export default AdminTab;
