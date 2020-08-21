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

// For all current and future brewers, get a list of the brewer categories (ex: Pourover, Immersion...)
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

class Rec {
    constructor(rec, current, description) {
      this.rec = rec;
      this.current = current;
      this.description = description;
    }
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

    // TODO: These rec functions are super messy, figure out how to make them nicer

    // Get Scale Recommendations for form inputs, and push them onto essential and optional rec lists
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

    // Get Kettle Recommendations for form inputs, and push them onto essential and optional rec lists
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
    
    // Get Grinder Recommendations for form inputs, and push them onto essential and optional rec lists
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

    // Get Coffee bean Recommendations for form inputs, and push them onto essential and optional rec lists
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

        // Clear the rec lists when we render the recs page
        this.state.essentialRecs = []
        this.state.optionalRecs = []
        // Get all the recs from input form fields and add results to the Rec lists above
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