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
            scaleType: "None",
            kettleType: "None"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Scale?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.scaleType}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={"None"}>No</MenuItem>
                        <MenuItem value={"Kitchen Scale"}>Kitchen Scale</MenuItem>
                        <MenuItem value={"Tenth of a Gram Scale"}>Tenth of a Gram Scale</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Kettle?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.kettleType}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={"None"}>No</MenuItem>
                        <MenuItem value={"Stovetop Kettle"}>Stovetop Kettle</MenuItem>
                        <MenuItem value={"Electric Kettle"}>Electric Kettle</MenuItem>
                        <MenuItem value={"Variable Temperature Electric Kettle"}>Variable Temperature Electric Kettle</MenuItem>
                        <MenuItem value={"Gooseneck Stovetop Kettle"}>Gooseneck Stovetop Kettle</MenuItem>
                        <MenuItem value={"Electric Gooseneck Kettle"}>Electric Gooseneck Kettle</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(GearForm);