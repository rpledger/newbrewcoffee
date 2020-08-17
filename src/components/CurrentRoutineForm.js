import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Stepper from "./CoffeeForm";
import CurrentGearForm from "./CurrentGearForm";


const useStyles = (theme, name) => ({
    root: {
        // padding: theme.spacing(10, 10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // width: '60%',
        textAlign: 'center',
        margin: '5% 0',
        minHeight: '200px',
        // backgroundColor: 'blue'
    },
    formControl: {
        // margin: theme.spacing(1),
        // minWidth: 120,
        width: '80%',
    },
    formGroup: {
        margin: theme.spacing(2)
        // backgroundColor: 'red'
    },
    allForms: {
        width: '50%'
        // backgroundColor: 'yellow'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const brewerNames = [
    'Batch Brewer',
    'French Press',
    'AeroPress',
    'Chemex',
    'Kalita Wave',
    'Hario v60',
    'Moka Pot',
    'Cold Brew Device',
    'Espresso Machine'
];

const goalNames = [
    'Entry Level Coffee Starter Gear',
    'Brew More Coffee at Once',
    'Brew Higher Quality Coffee',
    'Upgrade My Current Gear',
    'Buy it for Life Gear',
    'Explore New Coffee Techniques'
];

class CurrentRoutineForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            scaleType: "",
            kettleType: "",
            grinderType: "",
            brewerType: "",
            coffeeBeanType: "",
            timeOfDay: "",
            numOfDrinkers: "",
            cupsPerPerson: "",
            goals: [],
            brewerNames: [],
            futureBrewerNames: []
        };
    }

    // handleChange(e) {
    //     this.setState({ [e.target.name] : e.target.value });
    // }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.allForms}>
                    <div className={classes.formGroup}>
                        <Typography className={classes.title} variant="h4" noWrap>
                            What's your current coffee routine?
                        </Typography>
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