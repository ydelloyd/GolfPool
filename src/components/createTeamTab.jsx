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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { saveTeam } from '../services/TeamServices';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    button: {
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
    formControl: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: '1vh',
        marginLeft: '1vh',
        marginRight: '1vh'
    },
    full: {
    	width: '100%'
    },
    flexend: {
    	alignSelf: 'flex-end'
    },
    bottom:{
        marginBottom: '4vh'
    }
    // root: {
    // 	width: '100%',
    // 	'& > * + *': {
    // 	  marginTop: theme.spacing(2),
    // 	},
    //   },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function CreateTeamTab(props) {
    const classes = useStyles();
    const [currentEvent, setCurrentEvent] = useState(null);
    const [eventSelected, setEventSelected] = useState(null);
    const [team, setTeam] = useState({ "name": "", "owner": "", "tiebreaker": "0", "player1": "", "player2": "", "player3": "", "player4": "", "player5": "", "contactEmail": "" })
    const [message, setMessage] = useState({ "severity": "success", "message": "Success" });
    const [open, setOpen] = useState(false);


    const [groupA, setGroupA] = useState({});
    const [groupB, setGroupB] = useState({});
    const [groupC, setGroupC] = useState({});

    const getAError = () => {
        let count = 0;
        Object.keys(groupA).forEach((e) => {
            if (groupA[e] === true) {
                count++;
            }
        })
        return count !== 3;
    }
    const getBError = () => {
        let count = 0;
        Object.keys(groupB).forEach((e) => {
            if (groupB[e] === true) {
                count++;
            }
        })
        return count !== 1;
    }
    const getCError = () => {
        let count = 0;
        Object.keys(groupC).forEach((e) => {
            if (groupC[e] === true) {
                count++;
            }
        })
        return count !== 1;
    }

    const selectEvent = () => {
        if (currentEvent && currentEvent > -1) {
            const val = props.events.find((e) => {
                return e.id === currentEvent
            });
            setEventSelected({ ...val });
        }
    }

    const handleText = (input) => {
        console.log(input);
        setTeam({ ...team, [input.target.id]: input.target.value })
    }

    const handleChange = (event) => {
        setCurrentEvent(event.target.value);
    };

    const handleCheckedA = (event) => {
        setGroupA({ ...groupA, [event.target.name]: event.target.checked });
    };

    const handleCheckedB = (event) => {
        setGroupB({ ...groupB, [event.target.name]: event.target.checked });
    };

    const handleCheckedC = (event) => {
        setGroupC({ ...groupC, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        if (eventSelected && eventSelected.groupA) {
            const temp = { ...groupA };
            const keys = eventSelected.groupA.split(",");
            keys.forEach((e) => {
                temp[e] = false;
            });
            setGroupA(temp);
        }
        if (eventSelected && eventSelected.groupB) {
            const temp = { ...groupB };
            const keys = eventSelected.groupB.split(",");
            keys.forEach((e) => {
                temp[e] = false;
            });
            setGroupB(temp);
        }
        if (eventSelected && eventSelected.groupC) {
            const temp = { ...groupC };
            const keys = eventSelected.groupC.split(",");
            keys.forEach((e) => {
                temp[e] = false;
            });
            setGroupC(temp);
        }
    }, [eventSelected])

    const submitTeam = () => {
        const ret = team;
        console.log(getAError());
        console.log(getBError());
        console.log(getCError());
        if (!getAError() && !getBError() && !getCError() && ret.name.length > 0 && ret.owner.length > 0 && ret.contactEmail.length > 0) {
            console.log(!getAError() && !getBError() && !getCError());
            const a = [];
            Object.keys(groupA).forEach((e) => {
                if (groupA[e]) {
                    a.push(e);
                }
            });
            ret.player1 = a[0];
            ret.player2 = a[1];
            ret.player3 = a[2];
            ret.player4 = Object.keys(groupB).find((e) => { return groupB[e] === true });
            ret.player5 = Object.keys(groupC).find((e) => { return groupC[e] === true });
            ret.eventId = eventSelected.id;
            saveTeam(ret).then((res) => {
                setMessage({ "severity": "success", "message": "Sucessfully added team " + ret.name })
                handleOpen();
            }).catch((e) => {
                setMessage({ "severity": "error", "message": "There was an error creating the team. Please try again." })
                console.log(e)
            })
        } else {
            setMessage({ "severity": "error", "message": "Please validate inputs" })
            handleOpen()
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container spacing={3} className={classes.formControl}>
            {props.events.length > 0 ? <><Grid item xs={6}>
                <FormControl className={classes.full}>
                    <InputLabel id="event">Event</InputLabel>
                    <Select
                        labelId="Event for team"
                        id="eventSelect"
                        value={currentEvent ? currentEvent : -1}
                        onChange={handleChange}
                    >
                        <MenuItem value={-1}>Select an Event</MenuItem>
                        {props.events.filter((e) => {
                            let d = new Date();
                            d.setHours(0, 0, 0, 0);
                            let n = new Date(new Date(e.eventStart));
                            n.setHours(0, 0, 0, 0);
                            return e.eventStart ? n > d : false
                        }).map((e) => {
                            return <MenuItem value={e.id}>{e.name ? e.name : ""}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </Grid> 
                <Grid item className={classes.flexend} xs={6}>
                    <Button variant="contained" color="primary" onClick={selectEvent}>
                        Select Event
                    </Button>
                </Grid> 
                </> : <Grid item><LinearProgress /></Grid>}
            {eventSelected && <><Grid item xs={3} className={classes.bottom}>
                <TextField id="name" required label="Team Name" value={team.name} onChange={handleText} />
                </Grid>
                <Grid item xs={3} className={classes.bottom}>
                <TextField id="owner" required label="Team Owner" value={team.owner} onChange={handleText} />
                </Grid>
                <Grid item xs={3} className={classes.bottom}>
                <TextField id="contactEmail" required label="Contact Email" value={team.contactEmail} onChange={handleText} />
                </Grid>
                <Grid item xs={3} className={classes.bottom}>
                <TextField id="tiebreaker" required label="Tiebreaker" type="number" value={team.tiebreaker} onChange={handleText} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={3}>
                <FormControl required error={getAError()} component="fieldset">
                    <FormLabel component="legend">Pick Three From Group A</FormLabel>
                    <FormGroup>
                        {Object.keys(groupA).map((e) => {
                            return <FormControlLabel
                                control={<Checkbox checked={groupA[e]} onChange={handleCheckedA} name={e} />}
                                label={e}
                            />
                        })}
                    </FormGroup>
                    <FormHelperText>Please Select 3 Players</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={3}>
                <FormControl required error={getBError()} component="fieldset">
                    <FormLabel component="legend">Pick 1 From Group B</FormLabel>
                    <FormGroup>
                        {Object.keys(groupB).map((e) => {
                            return <FormControlLabel
                                control={<Checkbox checked={groupB[e]} onChange={handleCheckedB} name={e} />}
                                label={e}
                            />
                        })}
                    </FormGroup>
                    <FormHelperText>Please Select 1 Player</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={3}>
                <FormControl required error={getCError()} component="fieldset">
                    <FormLabel component="legend">Pick 1 From Group C</FormLabel>
                    <FormGroup>
                        {Object.keys(groupC).map((e) => {
                            return <FormControlLabel
                                control={<Checkbox checked={groupC[e]} onChange={handleCheckedC} name={e} />}
                                label={e}
                            />
                        })}
                    </FormGroup>
                    <FormHelperText>Please Select 1 Player</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={submitTeam}>
                    Submit Team
                </Button>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={message.severity}>
                        {message.message}
                    </Alert>
                </Snackbar>
            </>}
        </Grid>
    );
}

export default CreateTeamTab;
