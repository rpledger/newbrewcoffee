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
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RecItem from "./RecItem"

const useStyles = (theme, name) => ({
    root: {
        // padding: theme.spacing(10, 10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // width: '60%',
        textAlign: 'center',
        margin: '2% 0',
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
    flexGrid: {
        // display: "flex",
        // justifyContent: "space-between",
        width: "55%",

    },
    col: {
        // flex: 1,
        // padding: "20px"
    }
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

const brewMap = {
    "batch": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["None", "Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Batch Brewer"
    },
    "frenchPress": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "French Press"
    },
    "aeroPress": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "AeroPress"
    },
    "chemex": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Chemex"
    },
    "kalitaWave": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Kalita Wave"
    },
    "harioV60": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Hario v60"
    },
    "mokaPot": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Moka Pot"
    },
    "coldBrew": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <120", "Electric Burr Grinder >120"],
        brewerType: "Cold Brew Device"
    },
    "espressoMachine": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Hand Burr Grinder", "Electric Burr Grinder >120"],
        brewerType: "Espresso Machine"
    }
}

const brewTypes = [
    "batch",
    "frenchPress",
    "aeroPress",
    "chemex",
    "kalitaWave",
    "harioV60",
    "mokaPot",
    "coldBrew",
    "espressoMachine"
]

const brewerCategories = {
    "Batch": "Batch",
    "French Press": "Immersion",
    "AeroPress": "Immersion",
    "Chemex": "Pourover",
    "Kalita Wave": "Pourover",
    "Hario v60": "Pourover",
    "Moka Pot": "Stovetop Brewer",
    "Cold Brew Device": "Cold Brew",
    "Espresso Machine": "Espresso"
}

function noGrinderPreGround(brewerType, grinder, coffeeType) {
    return (grinder === "None" && (
        ((brewerType !== "espressoMachine") && (coffeeType === "Store-Bought Pre-Ground")) ||
        coffeeType === "Local Coffee Shop Pre-Ground" ))
}

function canBrew(type, scale, kettle, grinder, brewerType, coffeeType) {
    if(
        brewMap[type].scale.includes(scale) &&
        brewMap[type].kettle.includes(kettle) &&
        (brewMap[type].grinder.includes(grinder) ||
            noGrinderPreGround(type, grinder, coffeeType)
        ) &&
        brewerType.includes(brewMap[type].brewerType)
    ) return( <p>{brewMap[type].brewerType}</p> )
}

class CurrentGearOverview extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant="h4" noWrap>
                    Current Gear
                </Typography>
                <div>
                    <p>Scale: {this.props.scaleType}</p>
                    <p>Kettle: {this.props.kettleType}</p>
                    <p>Grinder: {this.props.grinderType}</p>
                    <p>Brewers: {this.props.brewerTypes.join(', ')}</p>
                    <p>Coffee Bean Type: {this.props.coffeeBeanType}</p>
                </div>
                <Typography className={classes.title} variant="h4" noWrap>
                    What can I brew now?
                </Typography>
                <div>
                    {brewTypes.map(brew => canBrew(brew, this.props.scaleType, this.props.kettleType, this.props.grinderType, this.props.brewerTypes, this.props.coffeeBeanType))}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(CurrentGearOverview);