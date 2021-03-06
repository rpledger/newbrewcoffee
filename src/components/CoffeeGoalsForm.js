import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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
        width: "50%"
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

// TODO: Refactor this out to somewhere static because it is used in a few files
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

// TODO: Refactor this out to somewhere static because it is used in a few files
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
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Coffee Dreams
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Tell us some info about what your coffee goals.
                        </Typography>
                    </Container>
                </div>
                <div className={classes.allForms}>
                    <div className={classes.formGroup}>
                        {/* DOES NOTHING RIGHT NOW */}
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

                        {/* DOES NOTHING RIGHT NOW */}
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

                        {/* Only this form field actually does anything on this page */}
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