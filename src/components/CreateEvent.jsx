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
import TextField from '@material-ui/core/TextField';
import { saveEvent } from '../services/EventServices';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button: {
        marginTop: '1vh'
    },
    rightButton: {
        marginTop: '1vh',
        marginLeft: '1vh',
        marginRight: '1vh'
    },
    rightAlign: {
        textAlign: 'right'
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

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CreateEvent(props) {
    const temp = new Date();
    console.log(temp.toISOString())
    const classes = useStyles();
    const [event, setEvent] = useState({ "name": "", "eventStart": temp})
    const [open, setOpen] = useState(false);


    const handleText = (input) => {
        setEvent({ ...event, "name": input.target.value })
    }

    const handleA = (input) => {
        setEvent({ ...event, "groupA": input.target.value })
    }
    const handleB = (input) => {
        setEvent({ ...event, "groupB": input.target.value })
    }
    const handleC = (input) => {
        setEvent({ ...event, "groupC": input.target.value })
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

    const handleDateChange = (date) => {
        setEvent({ ...event, "eventStart": date });
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-between" spacing={2} className={classes.title}>
                <Grid item xs={12}>
                    <TextField id="Event Name" label="Event Name" value={event.name} onChange={handleText} />
                </Grid>
                <Grid item xs={12}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/DD/yyyy"
                        margin="normal"
                        id="eventStart"
                        label="Event Start"
                        value={event.eventStart}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="groupA" multiline rowsMax={8} label="Group A" value={event.groupA} onChange={handleA} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="groupB" multiline rowsMax={8} label="Group B" value={event.groupB} onChange={handleB} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="groupC" multiline rowsMax={8} label="Group C" value={event.groupC} onChange={handleC} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" multiline rowsMax={8} color="primary" onClick={() => {
                        console.log(event);
                        saveEvent(event).then((res) => {
                            handleOpen();
                        }).catch((e) => {
                            console.log(e)
                        })
                    }}>
                        Save Event
                </Button>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Sucessfully Created Event!
                </Alert>
                </Snackbar>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default CreateEvent;
