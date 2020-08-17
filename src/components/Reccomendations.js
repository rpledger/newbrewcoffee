import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RecList from "./RecList";

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

const scaleRecTextLong = `
Ensuring that you always use a brew ratio of around 1:16 coffee to water will improve your coffee's taste,
and consistency from cup to cup. Using a scale when brewing coffee will provide this consistency and accuracy.
Since coffee beans are not very heavy, many recommend using a scale with that weighs to a tenth of a gram.
However, if you are just starting out, a standard kitchen scale will work just fine!
`;

const scaleRecText = `
Using a scale when brewing coffee will provide consistency and accuracy.
A scale will allow you to brew with an exact ratio of coffee to water.
Since coffee beans are light, many recommend using a scale that weighs to a tenth of a gram.
However, if you are just starting out, a standard kitchen scale will work just fine!
`;

const kettleRecTextLong = `
The magic recipe for coffee consists of just ground coffee and hot water (unless your making cold brew!). The right hot water kettle makes it easy
to heat up water to the ideal temperature for brewing coffee (around 205-210 degrees F). Many traditional stovetop or electric kettles don't allow
you to set a specific temperature to heat the water to. If you have of these kettles, it is recommended to heat the water to a boil and then wait
30 seconds before brewing. However, using a variable temperature electric kettle will allow you to brew at a more precise temperature.
Some methods of brewing, including pourover (e.g. Chemex, Hario v60, Kalita Wave)
will also benefit from using a kettle with a gooseneck spout that allows you to control the speed and flow rate of your pour.
`;

const kettleRecText = `
The ideal temperature for brewing coffee is around 205-210 degrees F.
A variable temperature electric kettle allows you to set the temperature to heat the water to.
Pourovers will also benefit from using a kettle with a gooseneck spout which allows you to control the speed and flow rate of your pour.
`;

const grinderRecTextLong = `
Grinders are the most import part of brewing coffee. If you are going to spend more money on one thing it should be
the grinder. There are two main categories of grinders: blade grinders and burr grinders. A burr grinder is essential 
to brewing great coffee because it grinds the beans to a much more uniform size than a blade grinder. A quality burr 
grinder will start at around $150, however if that is more than your budget allows, you can also purchase a hand burr
grinder. Many hand burr grinders less expensive than their electric counterparts, however hand grinding coffee can become
tiresome.
`

const grinderRecText = `
A burr grinder is essential to brewing great coffee because it grinds the beans to a more uniform size than a blade grinder.
A quality burr grinder will start at around $150. However, a cheaper alternative is to purchase a hand burr
grinder. While they are less expensive, hand grinding coffee can become tiresome.
`

const beansRecTextLong = `
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

const beansRecText = `
Coffee will taste it's best if you buy it within two weeks of when it was roasted and if you grind it right before brewing.
The best way to get great beans is to visit your local coffee shop and ask the barista what they recommend for your brewing device.
`

const priorities = ["No Recommendation", "Optional Upgrade", "Essential"]

class Rec {
    constructor(rec, current, description) {
      this.rec = rec;
      this.current = current;
      this.description = description;
    }
  }

function scaleRec(scale) {
    if(scale === "None") {
        let rec = new Rec(
            "Tenth of a Gram Scale",
            scale,
            "Since you don't have a scale, we suggest purchasing a tenth of a gram scale."
        )
        // essentialRecs.push(rec)
    } //return( {"rec": "A tenth of a gram scale", "description": "Since you don't have a scale, we suggest purchasing a tenth of a gram scale.", "priority": 2})
    else if(scale === "Kitchen Scale") {
        let rec = new Rec(
            "Tenth of a Gram Scale",
            scale,
            "Since you have a kitchen scale, you can optionally upgrade to a tenth of a gram scale."
        )
        // optionalRecs.push(rec)
    } //return({"rec": "A tenth of a gram scale", "description": "Since you have a kitchen scale, you can optionally upgrade to a tenth of a gram scale", "priority": 1})
    else if(scale === "Tenth of a Gram Scale") {
        let rec = new Rec(
            "Upgraded Scale",
            scale,
            "Since you already have a tenth of a gram scale, you're all set! If you're looking to upgrade your scale, we recommend these."
        )
        // optionalRecs.push(rec)
    } //return({"rec": "Upgraded scale", "description": "Since you already have a tenth of a gram scale, you're all set! If you're looking to upgrade your scale, we recommend these.", "priority": 1})
    else {

    }
}

function getBrewerCategories(currentBrewers, futureBrewers) {
    let currentBrewerCategories = {}
    if (typeof currentBrewers !== "object") currentBrewers = Array.from(currentBrewers)
    if (typeof futureBrewers !== "object") futureBrewers = Array.from(futureBrewers)
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
    console.log("current: " + currentBrewers)
    console.log("future: " + futureBrewers)
    console.log(currentBrewerCategories)

    if ((kettle === "None" ||
        kettle === "Stovetop Kettle" ||
        kettle === "Electric Kettle" ||
        kettle === "Variable Temperature Kettle")
        && Object.keys(currentBrewerCategories).includes("Pourover")) {
            let brewers = currentBrewerCategories["Pourover"].join(", ")
            return(
                {"rec": "Variable Temperature Eletric Gooseneck Kettle", "description": "Since you are interested in pourover brewers (" + brewers + ") we recommend purchasing a variable temperature electric gooseneck kettle", "priority": 2}
                // <p>Since you are interested in pourover brewers ({currentBrewerCategories["Pourover"].join(", ")}) we recommend purchasing a <b>variable temperature electric gooseneck kettle</b>.</p>
            )
    } else if ((kettle === "None" ||
        kettle === "Stovetop Kettle" ||
        kettle === "Electric Kettle")
        && Object.keys(currentBrewerCategories).includes("Immersion")) {
            let brewers = currentBrewerCategories["Immersion"].join(", ")
            return(
                {"rec": "Variable Temperature Eletric Kettle", "description": "Since you are interested in immersion brewers (" + brewers + ") we recommend purchasing a variable temperature electric kettle", "priority": 1}
            // <p>Since you are interested in immersion brewers ({currentBrewerCategories["Immersion"].join(", ")}) we recommend purchasing a <b>variable temperature electric kettle</b>.</p>
            )
    } else {
        return (
            {"rec": "Kettle", "description": "Since you already have a kettle, you're all set.", "priority": 0}
            )
    }
}

function grinderRec(grinder, currentBrewers, futureBrewers) {
    let currentBrewerCategories = getBrewerCategories( currentBrewers, futureBrewers)
    console.log("Grinder: " + grinder)

    if ((grinder === "None" ||
        grinder === "Blade Grinder" ||
        grinder === "Hand Burr Grinder" ||
        grinder === "Electric Burr Grinder <$120")
        && Object.keys(currentBrewerCategories).includes("Espresso")) {
        return(
            {"rec": "Quality Burr Grinder", "description": "Since you want to make espresso, you'll need a high quality burr grinder.", "priority": 2}
        //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
        )
    }
    else if (
        grinder === "None" ||
        grinder === "Blade Grinder"
    ) {
        return(
            {"rec": "Quality Burr Grinder", "description": "Since you don't have a burr grinder, you can upgrade to a high quality burr grinder.", "priority": 2}
            //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
        )
    }
    else if (
        grinder === "Hand Burr Grinder" ||
        grinder === "Electric Burr Grinder <$120"
    ) {
        return(
            {"rec": "Quality Burr Grinder", "description": "Since you already have a burr grinder, you can optionally upgrade to a high quality burr grinder.", "priority": 1}
            //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
        )
    }
    else {
        return (
            {"rec": "Grinder", "description": "Since you already have a high quality burr grinder, you're all set.", "priority": 0}
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

function getRecsByPriority(scale, kettle, grinder, currentBrewers, futureBrewers, coffeeType) {
    let recPriorities = {}
    let allRecs = {
        "scale": scaleRec(scale),
        "kettle": kettleRec(kettle, currentBrewers, futureBrewers),
        "grinder": grinderRec(grinder, currentBrewers, futureBrewers)
    }

    Object.keys(allRecs).forEach( recName => {
            let rec = allRecs[recName]
            if (typeof rec !== "undefined") {
                let priority = rec["priority"]

                if (typeof recPriorities[priority] === "undefined") {
                    recPriorities[priority] = [rec]
                } else {
                    recPriorities[priority].push(rec)
                }
            }
        }
    )
    return recPriorities
}

function renderRecs(recPriorities) {
    return [2, 1, 0].map(pri => {
        let priorityName = priorities[pri]
        let recPriority = recPriorities[pri]
        if (typeof recPriority !== "undefined") {
            return (
                <RecList
                    recName={priorityName}
                    recList={recPriority}
                />
            )
        }
    })
}

class Reccomendations extends Component {
    constructor(props){
        super(props);
        this.state = {
            essentialRecs: [],
            optionalRecs: []
        };
        this.scaleRecs = this.scaleRecs.bind(this);
        this.grinderRecs = this.grinderRecs.bind(this);
    }

    scaleRecs(scale) {
        if(scale === "None") {
            let rec = new Rec(
                "Tenth of a Gram Scale",
                scale,
                "Since you don't have a scale, we suggest purchasing a tenth of a gram scale."
            )
            this.state.essentialRecs.push(rec)
        }
        else if(scale === "Kitchen Scale") {
            let rec = new Rec(
                "Tenth of a Gram Scale",
                scale,
                "Since you have a kitchen scale, you can optionally upgrade to a tenth of a gram scale."
            )
            this.state.optionalRecs.push(rec)
        }
        else if(scale === "Tenth of a Gram Scale") {
            let rec = new Rec(
                "Upgraded Scale",
                scale,
                "Since you already have a tenth of a gram scale, you're all set! If you're looking to upgrade your scale, we recommend these."
            )
            this.state.optionalRecs.push(rec)
        }
    }

    grinderRecs(grinder, currentBrewers, futureBrewers) {
        let currentBrewerCategories = getBrewerCategories( currentBrewers, futureBrewers)
        console.log("Grinder: " + grinder)
    
        if ((grinder === "None" ||
            grinder === "Blade Grinder" ||
            grinder === "Hand Burr Grinder" ||
            grinder === "Electric Burr Grinder <$120")
            && Object.keys(currentBrewerCategories).includes("Espresso")) {
                let rec = new Rec(
                    "Quality Burr Grinder",
                    currentBrewers,
                    "Since you want to make espresso, you'll need a high quality burr grinder."
                )
                this.state.essentialRecs.push(rec)
            // return(
            //     {"rec": "Quality Burr Grinder", "description": "Since you want to make espresso, you'll need a high quality burr grinder.", "priority": 2}
            // //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
            // )
        }
        else if (
            grinder === "None" ||
            grinder === "Blade Grinder"
        ) {
            let rec = new Rec(
                "Quality Burr Grinder",
                currentBrewers,
                "Since you don't have a burr grinder, you can upgrade to a high quality burr grinder."
            )
            this.state.essentialRecs.push(rec)

            // return(
            //     {"rec": "Quality Burr Grinder", "description": "Since you don't have a burr grinder, you can upgrade to a high quality burr grinder.", "priority": 2}
            //     //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
            // )
        }
        else if (
            grinder === "Hand Burr Grinder" ||
            grinder === "Electric Burr Grinder <$120"
        ) {
            let rec = new Rec(
                "Quality Burr Grinder",
                currentBrewers,
                "Since you already have a burr grinder, you can optionally upgrade to a high quality burr grinder."
            )
            this.state.optionalRecs.push(rec)

            // return(
            //     {"rec": "Quality Burr Grinder", "description": "Since you already have a burr grinder, you can optionally upgrade to a high quality burr grinder.", "priority": 1}
            //     //<p>We recommend purchasing a <b>Baratza grinder</b> or a <b>high quality hand grinder</b>.</p>
            // )
        }
        // else {
            
        //     return (
        //         {"rec": "Grinder", "description": "Since you already have a high quality burr grinder, you're all set.", "priority": 0}
        //     )
        // }
    }

    render() {
        const { classes } = this.props;
        let recPriorities = getRecsByPriority(
            this.props.scaleType,
            this.props.kettleType,
            this.props.grinderType,
            this.props.brewerTypes,
            this.props.futureBrewerNames,
            this.props.coffeeBeanType
        )

        this.state.essentialRecs = []
        this.state.optionalRecs = []
        this.scaleRecs(this.props.scaleType)
        this.grinderRecs(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)

        return (
            <div className={classes.root}>
                {/*<Typography className={classes.title} variant="h4" noWrap>*/}
                {/*    Current Gear*/}
                {/*</Typography>*/}
                {/*<div>*/}
                {/*    <p>Scale: {this.props.scaleType}</p>*/}
                {/*    <p>Kettle: {this.props.kettleType}</p>*/}
                {/*    <p>Grinder: {this.props.grinderType}</p>*/}
                {/*    <p>Brewers: {this.props.brewerTypes.join(', ')}</p>*/}
                {/*    <p>Coffee Bean Type: {this.props.coffeeBeanType}</p>*/}
                {/*</div>*/}
                {/*<Typography className={classes.title} variant="h4" noWrap>*/}
                {/*    What can I brew now?*/}
                {/*</Typography>*/}
                {/*<div>*/}
                {/*    {brewTypes.map(brew => canBrew(brew, this.props.scaleType, this.props.kettleType, this.props.grinderType, this.props.brewerTypes, this.props.coffeeBeanType))}*/}
                {/*</div>*/}
                {/*<Typography className={classes.title} variant="h4" noWrap>*/}
                {/*    Recommendations*/}
                {/*</Typography>*/}
                <Typography className={classes.title} variant="h4" noWrap>
                    Recommendations
                </Typography>
                { this.state.essentialRecs.length !== 0 &&
                    <RecList
                        recName="Essential"
                        recList={this.state.essentialRecs}
                    />
                }
                { this.state.optionalRecs.length !== 0 &&
                    <RecList
                        recName="Optional"
                        recList={this.state.optionalRecs}
                    />
                }
                {/* {renderRecs(recPriorities)} */}
                {/*<Typography className={classes.title} variant="h5" noWrap>*/}
                {/*    Essentials*/}
                {/*</Typography>*/}
                {/*<div className={classes.flexGrid}>*/}
                {/*    <div className={classes.col}>*/}
                {/*        <RecItem*/}
                {/*            recTitle={"Scale"}*/}
                {/*            recImageSrc={"https://images-na.ssl-images-amazon.com/images/I/61L9kYByOdL._AC_SL1200_.jpg"}*/}
                {/*            recImageAlt={"Amazon Scale"}*/}
                {/*            rec={scaleRec(this.props.scaleType)}*/}
                {/*            recDescription={scaleRecText}*/}
                {/*        />*/}
                {/*    </div>*/}
                    {/*<div className={classes.col}>*/}
                    {/*    <RecItem*/}
                    {/*        recTitle={"Kettle"}*/}
                    {/*        recImageSrc={"https://images-na.ssl-images-amazon.com/images/I/71MEjurY%2BwL._AC_SL1500_.jpg"}*/}
                    {/*        recImageAlt={"Amazon Kettle"}*/}
                    {/*        recText={kettleRec(this.props.kettleType, this.props.brewerTypes, this.props.futureBrewerNames)}*/}
                    {/*        recDescription={kettleRecText}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className={classes.col}>*/}
                    {/*    <RecItem*/}
                    {/*        recTitle={"Grinder"}*/}
                    {/*        recImageSrc={"https://images-na.ssl-images-amazon.com/images/I/711jsKbAS2L._AC_SL1500_.jpg"}*/}
                    {/*        recImageAlt={"Amazon Grinder"}*/}
                    {/*        recText={grinderRec(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)}*/}
                    {/*        recDescription={grinderRecText}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className={classes.col}>*/}
                    {/*    <Typography className={classes.title} variant="h6" noWrap>*/}
                    {/*        Coffee Beans*/}
                    {/*    </Typography>*/}
                    {/*    <div>*/}
                    {/*        <p>{beansRecText}</p>*/}
                    {/*        {grinderRec(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Reccomendations);