import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RecList from "./RecList";

import Container from "@material-ui/core/Container";

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
    heroContent: {
        backgroundColor: theme.palette.background.paper,
      },
    recs: {
        padding: theme.spacing(2, 0, 6),
    },
    formControl: {
        width: '80%',
    },
    formGroup: {
        margin: theme.spacing(2)
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    flexGrid: {
        width: "55%",

    }
});

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

class Reccomendations extends Component {
    constructor(props){
        super(props);
        this.state = {
            essentialRecs: [],
            optionalRecs: []
        };
        this.scaleRecs = this.scaleRecs.bind(this);
        this.grinderRecs = this.grinderRecs.bind(this);
        this.kettleRecs = this.kettleRecs.bind(this);
        this.coffeeRecs = this.coffeeRecs.bind(this);
    }

    scaleRecs(scale) {
        if(scale === "None") {
            let rec = new Rec(
                "Tenth of a Gram Scale",
                scale,
                "Since you don't have a scale, we suggest purchasing a tenth of a gram scale. Using a scale to measure your coffee grounds and brew water when making coffee will help you improve your consistency and accuracy."
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

    kettleRecs(kettle, currentBrewers, futureBrewers) {
        let currentBrewerCategories = getBrewerCategories( currentBrewers, futureBrewers)
    
        if ((kettle === "None" ||
            kettle === "Stovetop Kettle" ||
            kettle === "Electric Kettle" ||
            kettle === "Variable Temperature Kettle")
            && Object.keys(currentBrewerCategories).includes("Pourover")) {
                let brewers = currentBrewerCategories["Pourover"].join(", ")

                let rec = new Rec(
                    "Variable Temperature Eletric Gooseneck Kettle",
                    kettle,
                    "Since you are interested in pourover brewers (" + brewers + ") we recommend purchasing a variable temperature electric gooseneck kettle."
                )
                this.state.essentialRecs.push(rec)
        } else if ((kettle === "None" ||
            kettle === "Stovetop Kettle" ||
            kettle === "Electric Kettle")
            && Object.keys(currentBrewerCategories).includes("Immersion")) {
                let brewers = currentBrewerCategories["Immersion"].join(", ")

                let rec = new Rec(
                    "Variable Temperature Eletric Kettle",
                    kettle,
                    "Since you are interested in immersion brewers (" + brewers + ") we recommend purchasing a variable temperature electric kettle."
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
        }
    }

    coffeeRecs(beans) {
        if (
            beans === "None" ||
            beans === "Store-Bought Pre-Ground"
        ) {
            let rec = new Rec(
                "Whole Beans",
                beans,
                "Since you currently purchase store-bought pre-ground beans, we reccommend you buy whole beans from a store or local coffee shop."
            )
            this.state.essentialRecs.push(rec)
        } else if (
            beans === "Store-Bought Whole Bean"
        ) {
            let rec = new Rec(
                "Local Coffee Shop Whole Beans",
                beans,
                "Since you currently purchase store-bought whole beans, we reccommend you buy whole beans local coffee shop because they are typically more recently roasted."
            )
            this.state.optionalRecs.push(rec)
        }
        else if (
            beans === "Local Coffee Shop Pre-Ground"
        ) {
            let rec = new Rec(
                "Local Coffee Shop Whole Beans",
                beans,
                "Since you currently purchase local coffee shop pre-ground beans, we reccommend you buy whole beans local coffee shop because your coffee will be much more flavorful if you grind it right before brewing."
            )
            this.state.optionalRecs.push(rec)
        }
    }

    render() {
        const { classes } = this.props;

        this.state.essentialRecs = []
        this.state.optionalRecs = []
        this.scaleRecs(this.props.scaleType)
        this.kettleRecs(this.props.kettleType, this.props.brewerTypes, this.props.futureBrewerNames)
        this.grinderRecs(this.props.grinderType, this.props.brewerTypes, this.props.futureBrewerNames)
        this.coffeeRecs(this.props.coffeeBeanType)

        return (
            <div className={classes.root}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Reccommendation
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Here's some reccomendations for your current coffee gear.
                        </Typography>
                    </Container>
                </div>
                <div>
                    <Container maxWidth="sm">
                        { this.state.essentialRecs.length !== 0 &&
                            <div className={classes.recs}>
                                <RecList
                                    recName="Essential"
                                    recList={this.state.essentialRecs}
                                />
                            </div>
                        }
                        { this.state.optionalRecs.length !== 0 &&
                            <div className={classes.recs}>
                                <RecList
                                    recName="Optional"
                                    recList={this.state.optionalRecs}
                                />
                            </div>
                        }
                    </Container>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Reccomendations);