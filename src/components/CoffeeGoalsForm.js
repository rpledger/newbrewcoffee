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

import Stepper from "./Stepper";
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
            currentBrewMethods: "",
            goals: [],
            brewerNames: [],
            futureBrewerNames: []
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    scale() {
        if (this.state.scaleType === "None" || this.state.scaleType === "Kitchen Scale") {
            return <div>A Tenth of a Gram Scale</div>;
        }
    }

    kettle() {
        if (this.state.kettleType === "None") {
            return <div>Electric Kettle</div>;
        } else if (this.state.kettleType === "Stovetop Kettle" || this.state.kettleType === "Electric Kettle") {
            return <div>Hario Gooseneck Stovetop</div>
        } else {
            return <div>Baratza Encore</div>;
        }
    }

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
                            <InputLabel id="demo-mutiple-checkbox-label">Goals?</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                name="goals"
                                multiple
                                value={this.state.goals}
                                onChange={this.handleChange.bind(this)}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {goalNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.state.goals.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-checkbox-label">Brewers?</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                name="futureBrewerNames"
                                multiple
                                value={this.state.futureBrewerNames}
                                onChange={this.handleChange.bind(this)}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {brewerNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.state.futureBrewerNames.indexOf(name) > -1} />
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