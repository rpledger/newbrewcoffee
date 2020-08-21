import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';


const useStyles = (theme, name) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '5% 0',
        minHeight: '200px',
    },
    formControl: {
        width: '80%',
    },
    formGroup: {
        margin: theme.spacing(2)
    },
    allForms: {
        width: '50%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class CurrentRoutineForm extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    // TODO: This step may go away or get merged with step 1 (current gear)
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Coffee Routine
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Tell us some info about your current coffee routine.
                        </Typography>
                    </Container>
                </div>
                {/* NONE OF THESE FIELDS DO ANYTHING RIGHT NOW */}
                <div className={classes.allForms}>
                    <div className={classes.formGroup}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Coffee Time?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="timeOfDay"
                                id="demo-simple-select"
                                value={this.props.timeOfDay}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={"AM Only"}>AM Only</MenuItem>
                                <MenuItem value={"AM/PM"}>AM/PM</MenuItem>
                                <MenuItem value={"PM Only"}>PM Only</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Number of Drinkers?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="numOfDrinkers"
                                id="demo-simple-select"
                                value={this.props.numOfDrinkers}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"0"}>0</MenuItem>
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                                <MenuItem value={"4+"}>4+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Cups per drinker per day?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="cupsPerPerson"
                                id="demo-simple-select"
                                value={this.props.cupsPerPerson}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"0"}>0</MenuItem>
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                                <MenuItem value={"4+"}>4+</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(CurrentRoutineForm);