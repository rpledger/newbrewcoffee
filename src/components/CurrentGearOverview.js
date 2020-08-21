import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = (theme, name) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '2% 0',
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
    flexGrid: {
        width: "55%",
    }
});

// TODO: Refactor this out to somewhere more static.
// For each brewer type, what are the minimun required gear options
const brewMap = {
    "batch": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["None", "Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Batch Brewer"
    },
    "frenchPress": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "French Press"
    },
    "aeroPress": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "AeroPress"
    },
    "chemex": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Chemex"
    },
    "kalitaWave": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Kalita Wave"
    },
    "harioV60": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Hario v60"
    },
    "mokaPot": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Moka Pot"
    },
    "coldBrew": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Blade Grinder", "Hand Burr Grinder", "Electric Burr Grinder <$120", "Electric Burr Grinder >$120"],
        brewerType: "Cold Brew Device"
    },
    "espressoMachine": {
        scale: ["None", "Kitchen Scale", "Tenth of a Gram Scale"],
        kettle: ["Stovetop Kettle", "Electric Kettle", "Variable Temperature Kettle", "Stovetop Gooseneck Kettle", "Electric Gooseneck Kettle"],
        grinder: ["Hand Burr Grinder", "Electric Burr Grinder >$120"],
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

// Check for whether user has no grinder, but they buy pre-ground coffee (except for espresso)
function noGrinderPreGround(brewerType, grinder, coffeeType) {
    return (grinder === "None" && (
        ((brewerType !== "espressoMachine") && (coffeeType === "Store-Bought Pre-Ground")) ||
        coffeeType === "Local Coffee Shop Pre-Ground" ))
}

// With the given form inputs, does the user have enough gear to brew w/ this brewer type
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

    // TODO: This step may or may not stay. If it does, it needs
    //       to be changed to match styling of the other steps.
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