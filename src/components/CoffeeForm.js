import React, {Component} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CurrentGearForm from "./CurrentGearForm";
import CurrentRoutineForm from "./CurrentRoutineForm";
import CoffeeGoalsForm from "./CoffeeGoalsForm";


const useStyles = (theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
});

function getSteps() {
    return ['Current Gear', 'Current Routine', 'Coffee Goals'];
}

// function getStepContent(step) {
//     switch (step) {f
//         case 0:
//             return(
//                 <CurrentGearForm
//                     scaleType={this.state.scaleType}
//                     kettleType={this.state.kettleType}
//                     grinderType={this.state.brewerType}
//                     coffeeBeanType={this.state.coffeeBeanType}
//                 />
//             );
//         case 1:
//             return(
//                 <CurrentRoutineForm />
//             );
//         case 2:
//             return(
//                 <CoffeeGoalsForm />
//             );
//         default:
//             return(
//                 <div>
//                     Unknown step
//                 </div>
//             );
//     }
// }

// export default function HorizontalLinearStepper() {
class CoffeeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeStep: 0,
            skipped: new Set(),
            scaleType: "",
            kettleType: "",
            grinderType: "",
            brewerTypes: [],
            coffeeBeanType: "",
            timeOfDay: "",
            numOfDrinkers: "",
            cupsPerPerson: "",
            currentBrewMethods: "",
            goals: [],
            brewerNames: [],
            futureBrewerNames: []
        };
        this.isStepOptional = this.isStepOptional.bind(this);
        this.isStepSkipped = this.isStepSkipped.bind(this);
        this.setSkipped = this.setSkipped.bind(this);
        this.setActiveStep = this.setActiveStep.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    setActiveStep(value) {
        console.log(value)
        this.setState({ activeStep: value });
    }

    setSkipped(value) {
        this.setState({ skipped: value });
    }

    isStepOptional(step) {
        //return step === 1;
    };

    isStepSkipped(step) {
        let skipped = this.state.skipped;
        return skipped.has(step);
    };

    handleNext() {
        let newSkipped = this.state.skipped;
        if (this.isStepSkipped(this.state.activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(this.state.activeStep);
        }

        this.setActiveStep(this.state.activeStep + 1);
        this.setSkipped(newSkipped);
    };

    handleBack() {
        this.setActiveStep(this.state.activeStep - 1);
    };

    handleSkip() {
        if (!this.isStepOptional(this.state.activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setActiveStep((prevActiveStep) => prevActiveStep + 1);
        this.setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(this.state.activeStep);
            return newSkipped;
        });
    };

    handleReset() {
        this.setActiveStep(0);
    };

    getStepContent(step) {
        switch (step) {
            case 0:
                return(
                    <CurrentGearForm
                        scaleType={this.state.scaleType}
                        kettleType={this.state.kettleType}
                        grinderType={this.state.grinderType}
                        brewerTypes={this.state.brewerTypes}
                        coffeeBeanType={this.state.coffeeBeanType}
                        handleChange={this.handleChange}
                    />
                );
            case 1:
                return(
                    <CurrentRoutineForm />
                );
            case 2:
                return(
                    <CoffeeGoalsForm />
                );
            default:
                return(
                    <div>
                        Unknown step
                    </div>
                );
        }
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps()
        return (
            <div className={classes.root}>
                <Stepper activeStep={this.state.activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {/*<Typography className={classes.instructions}>*/}
                            {/*    Hello*/}
                            {/*</Typography>*/}
                            <div>
                                {this.getStepContent(this.state.activeStep)}
                            </div>
                            <div>
                                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className={classes.button}>
                                    Back
                                </Button>
                                {this.isStepOptional(this.state.activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSkip}
                                        className={classes.button}
                                    >
                                        Skip
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(CoffeeForm);