import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";

const useStyles = (theme) => ({
    root: {
        padding: theme.spacing(10, 10)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class GearForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            scaleType: "None",
            kettleType: "None",
            grinderType: "None",
            brewerType: "None",
            coffeeBeanType: "None"
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
                    <InputLabel id="demo-simple-select-label">Brewer?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="brewerType"
                        id="demo-simple-select"
                        value={this.state.brewerType}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Batch Brewer"}>Batch Brewer</MenuItem>
                        <MenuItem value={"French Press"}>French Press</MenuItem>
                        <MenuItem value={"Aeropress"}>Aeropress</MenuItem>
                        <MenuItem value={"Chemex"}>Chemex</MenuItem>
                        <MenuItem value={"Kalita"}>Kalita</MenuItem>
                        <MenuItem value={"Hario v60"}>Hario v60</MenuItem>
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
                <br /><br />
                <Typography className={classes.title} variant="h4" noWrap>
                    What do you want to brew?
                </Typography>
                <br /><br />
                <Typography className={classes.title} variant="h4" noWrap>
                    What gear we recommend?
                </Typography>
                {this.scale()}
                {this.kettle()}
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(GearForm);