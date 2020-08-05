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

const scaleRecText = `
Ensuring that you always use a brew ratio of around 1:16 coffee to water will improve your coffee's taste,
and consistency from cup to cup. Using a scale when brewing coffee will provide this consistency and accuracy.
Since coffee beans are not very heavy, many recommend using a scale with that weighs to a tenth of a gram.
However, if you are just starting out, a standard kitchen scale will work just fine!
`;

const kettleRecText = `
The magic recipe for coffee consists of just ground coffee and hot water (unless your making cold brew!). The right hot water kettle makes it easy
to heat up water to the ideal temperature for brewing coffee (around 205-210 degrees F). Many traditional stovetop or electric kettles don't allow
you to set a specific temperature to heat the water to. If you have of these kettles, it is recommended to heat the water to a boil and then wait
30 seconds before brewing. However, using a variable temperature electric kettle will allow you to brew at a more precise temperature.
Some methods of brewing, including pourover (e.g. Chemex, Hario v60, Kalita Wave)
will also benefit from using a kettle with a gooseneck spout that allows you to control the speed and flow rate of your pour.
`;

const grinderRecText = `
Grinders are the most import part of brewing coffee. If you are going to spend more money on one thing it should be
the grinder. There are two main categories of grinders: blade grinders and burr grinders. A burr grinder is essential 
to brewing great coffee because it grinds the beans to a much more uniform size than a blade grinder. A quality burr 
grinder will start at around $150, however if that is more than your budget allows, you can also purchase a hand burr
grinder. Many hand burr grinders less expensive than their electric counterparts, however hand grinding coffee can become
tiresome.
`

const beansRecText = `
You can't make good coffee without good coffee beans! In an ideal scenario, you should always buy whole coffee and grind
right before brewing. The best way to get great beans is to visit your local coffee shop.
Ask your local barista what they recommend for what brewing device you are using. After coffee is roasted, it begins

Another thing to consider when you buy coffee beans, is when the coffee was roasted. You'll get the best flavor out of
your coffee if you buy it within two weeks of when it was roasted. Most reputable roaster will put the roasting date on
the bag.

If you don't have a grinder at home, you'll need to purchase pre-ground beans
from the store or a coffee shop. However, the longer coffee sits after it's been ground,
the more yummy flavors will be lost. Pre-ground coffee purchased at a grocery store, will likely have been sitting on
the shelf for a while before it is purchased. If you don't have a grinder, we recommend buying coffee at a local coffee shop
and have them grind it appropriately for what ever brewer you'll be using. 
`

function scaleRec(scale) {
    if(scale === "None") return( <p>Since you don't have a scale, we recommend purchasing a <b>tenth of a gram scale</b>.</p>)
    else if(scale === "Kitchen Scale") return(<p>Since you already have a kitchen scale, you can upgrade to a <b>tenth of a gram scale</b>.</p>)
    // else return (<p>You already have a tenth of a gram scale! It is not essential, but if you want to upgrade, check out these <b>upgrade scales</b>.</p>)
}

function getBrewerCategories(currentBrewers, futureBrewers) {
    let currentBrewerCategories = {}
    let brewers = Array.from(new Set(currentBrewers.concat(futureBrewers)))
    brewers.forEach(brewer => {
            let category = brewerCategories[brewer]
            console.log(category)
            if (currentBrewerCategories[category] === undefined){
                currentBrewerCategories[category] = [brewer]
            } else {
                currentBrewerCategories[category].push(brewer)
            }
        }
    )
    return currentBrewerCategories
}

function kettleRec(kettle, currentBrewers, futureBrewers) {
    let currentBrewerCategories = getBrewerCategories( currentBrewers, futureBrewers)

    if ((kettle === "None" ||
        kettle === "Stovetop Kettle" ||
        kettle === "Electric Kettle" ||
        kettle === "Variable Temperature Kettle")
        && Object.keys(currentBrewerCategories).includes("Pourover"))return( <p>Since you are interested in pourover brewers ({currentBrewerCategories["Pourover"].join(", ")}) we recommend purchasing a <b>variable temperature electric gooseneck kettle</b>.</p>)
    else if ((kettle === "None" ||
        kettle === "Stovetop Kettle" ||
        kettle === "Electric Kettle")
        && Object.keys(currentBrewerCategories).includes("Immersion")) return( <p>Since you are interested in immersion brewers ({currentBrewerCategories["Immersion"].join(", ")}) we recommend purchasing a <b>variable temperature electric kettle</b>.</p>)

}

function grinderRec(grinder, currentBrewers, futureBrewers) {
    let currentBrewerCategories = getBrewerCategories( currentBrewers, futureBrewers)

    if ((grinder === "None" ||
        grinder === "Blade Grinder" ||
        grinder === "Hand Burr Grinder" ||
        grinder === "Electric Burr Grinder <120")
        && Object.keys(currentBrewerCategories).includes("Espresso")) {
        return(
            <p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
        )
    }

    else if (grinder === "None" ||
        grinder === "Blade Grinder" ||
        grinder === "Hand Burr Grinder" ||
        grinder === "Electric Burr Grinder <120") {
        return(
            <p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
        )
    }
}

function noGrinderPreGround(brewerType, grinder, coffeeType) {
    return (grinder === "None" && (
        ((brewerType !== "espressoMachine") && (coffeeType === "Store-Bought Pre-Ground")) ||
        coffeeType === "Local Coffee Shop Pre-Ground" ))
}

function canBrew(type, scale, kettle, grinder, brewerType, coffeeType) {
    console.log(type)
    console.log(brewMap[type].scale)
    if(
        brewMap[type].scale.includes(scale) &&
        brewMap[type].kettle.includes(kettle) &&
        (brewMap[type].grinder.includes(grinder) ||
            noGrinderPreGround(type, grinder, coffeeType)
        ) &&
        brewerType.includes(brewMap[type].brewerType)
    ) return( <p>{brewMap[type].brewerType}</p> )
}

class Reccomendations extends Component {
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
                <Typography className={classes.title} variant="h4" noWrap>
                    Recommendations
                </Typography>
                <Typography className={classes.title} variant="h4" noWrap>
                    Recommendations for your current gear
                </Typography>
                <Typography className={classes.title} variant="h6" noWrap>
                    Scale
                </Typography>
                <div>
                    <p>{scaleRecText}</p>
                    {scaleRec(this.props.scaleType)}
                </div>
                <Typography className={classes.title} variant="h6" noWrap>
                    Kettle
                </Typography>
                <div>
                    <p>{kettleRecText}</p>
                    {kettleRec(this.props.kettleType, this.props.brewerTypes, this.props.futureBrewerNames)}
                </div>
                <Typography className={classes.title} variant="h6" noWrap>
                    Grinder
                </Typography>
                <div>
                    <p>{grinderRecText}</p>
                    {grinderRec(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)}
                </div>
                <Typography className={classes.title} variant="h6" noWrap>
                    Coffee Beans
                </Typography>
                <div>
                    <p>{beansRecText}</p>
                    {grinderRec(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Reccomendations);