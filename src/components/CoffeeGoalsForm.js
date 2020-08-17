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
        width: "50%"
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

class CoffeeGoalsForm extends Component {
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
                            What are your coffee dreams?
                        </Typography>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Primary Goal</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="primaryGoal"
                                id="demo-simple-select"
                                value={this.props.primaryGoal}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={"Buy Entry Level Coffee Starter Gear"}>Buy Entry Level Coffee Starter Gear</MenuItem>
                                <MenuItem value={"Brew More Coffee at Once"}>Brew More Coffee at Once</MenuItem>
                                <MenuItem value={"Brew Higher Quality Coffee"}>Brew Higher Quality Coffee</MenuItem>
                                <MenuItem value={"Upgrade My Current Gear"}>Upgrade My Current Gear</MenuItem>
                                <MenuItem value={"Find 'Buy it for Life' Gear"}>Find 'Buy it for Life' Gear</MenuItem>
                                <MenuItem value={"Explore New Coffee Techniques"}>Explore New Coffee Techniques</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Optional Secondary Goal</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="secondaryGoal"
                                id="demo-simple-select"
                                value={this.props.secondaryGoal}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={"Buy Entry Level Coffee Starter Gear"}>Buy Entry Level Coffee Starter Gear</MenuItem>
                                <MenuItem value={"Brew More Coffee at Once"}>Brew More Coffee at Once</MenuItem>
                                <MenuItem value={"Brew Higher Quality Coffee"}>Brew Higher Quality Coffee</MenuItem>
                                <MenuItem value={"Upgrade My Current Gear"}>Upgrade My Current Gear</MenuItem>
                                <MenuItem value={"Find 'Buy it for Life' Gear"}>Find 'Buy it for Life' Gear</MenuItem>
                                <MenuItem value={"Explore New Coffee Techniques"}>Explore New Coffee Techniques</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-checkbox-label">Brewers?</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                name="futureBrewerNames"
                                multiple
                                value={this.props.futureBrewerNames}
                                onChange={this.props.handleChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {brewerNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.props.futureBrewerNames.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(CoffeeGoalsForm);