import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = (theme) => ({
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
            scaleType: "",
            kettleType: ""
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
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
                        <MenuItem value={"Electric Kettle"}>Electric Gooseneck Kettle</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Grinder?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        name="grinderType"
                        id="demo-simple-select"
                        value={this.state.Type}
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
                        value={this.state.Type}
                        onChange={this.handleChange.bind(this)}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"French Press"}>French Press</MenuItem>
                        <MenuItem value={"Aeropress"}>Aeropress</MenuItem>
                        <MenuItem value={"Chemex"}>Chemex</MenuItem>
                        <MenuItem value={"Kalita"}>Kalita</MenuItem>
                        <MenuItem value={"Hario v60"}>Hario v60</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(GearForm);