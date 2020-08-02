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
        minHeight: '200px'
    },
    formControl: {
        // margin: theme.spacing(1),
        // minWidth: 120,
        width: '70%',
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

class GearForm extends Component {
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
                <div>
                <Typography className={classes.title} variant="h4" noWrap>
                    What gear do you have?
                </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Scale?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="scaleType"
                        id="demo-simple-select"
                        value={this.state.scaleType}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Kitchen Scale"}>Kitchen Scale</MenuItem>
                        <MenuItem value={"Tenth of a Gram Scale"}>Tenth of a Gram Scale</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Kettle?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="kettleType"
                        id="demo-simple-select"
                        value={this.state.kettleType}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Stovetop Kettle"}>Stovetop Kettle</MenuItem>
                        <MenuItem value={"Electric Kettle"}>Electric Kettle</MenuItem>
                        <MenuItem value={"Variable Temperature Kettle"}>Variable Temperature Kettle</MenuItem>
                        <MenuItem value={"Stovetop Gooseneck Kettle"}>Stovetop Gooseneck Kettle</MenuItem>
                        <MenuItem value={"Electric Gooseneck Kettle"}>Electric Gooseneck Kettle</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Grinder?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="grinderType"
                        id="demo-simple-select"
                        value={this.state.grinderType}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Blade Grinder"}>Blade Grinder</MenuItem>
                        <MenuItem value={"Hand Burr Grinder"}>Hand Burr Grinder</MenuItem>
                        <MenuItem value={"Electric Burr Grinder <120"}>Electric Burr Grinder under $120</MenuItem>
                        <MenuItem value={"Electric Burr Grinder >120"}>Electric Burr Grinder over $120</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Brewers?</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        name="brewerNames"
                        multiple
                        value={this.state.brewerNames}
                        onChange={this.handleChange.bind(this)}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {brewerNames.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.brewerNames.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Coffee Beans?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="coffeeBeanType"
                        id="demo-simple-select"
                        value={this.state.coffeeBeanType}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Store-Bought Pre-Ground"}>Store-Bought Pre-Ground</MenuItem>
                        <MenuItem value={"Store-Bought Whole Bean"}>Store-Bought Whole Bean</MenuItem>
                        <MenuItem value={"Local Coffee Shop Pre-Ground"}>Local Coffee Shop Pre-Ground</MenuItem>
                        <MenuItem value={"Local Coffee Shop Whole Bean"}>Local Coffee Shop Whole Bean</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <br /><br />
                <Typography className={classes.title} variant="h4" noWrap>
                    What's your current coffee routine?
                </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Coffee Time?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="timeOfDay"
                        id="demo-simple-select"
                        value={this.state.timeOfDay}
                        onChange={this.handleChange.bind(this)}
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
                        value={this.state.numOfDrinkers}
                        onChange={this.handleChange.bind(this)}
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
                        value={this.state.cupsPerPerson}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"0"}>0</MenuItem>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4+"}>4+</MenuItem>
                    </Select>
                </FormControl>
                {/*How many cups each a day?
                How many coffee drinkers?
                Would you consider a hand-grinder?
                How do you like your coffee?
                What about batch, cold brew and espresso?
                */}
                </div>
                <div>
                <br /><br />
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

                <br /><br />
                <div>
                <Typography className={classes.title} variant="h4" noWrap>
                    What gear we recommend?
                </Typography>
                {this.scale()}
                {this.kettle()}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(GearForm);