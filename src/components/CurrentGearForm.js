import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

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
        margin: theme.spacing(2),
    },
    allForms: {
        width: "50%"
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

const brewerNames = [
    'Batch Brewer',
    'French Press',
    'AeroPress',
    'Chemex',
    'Kalita Wave',
    'Hario v60',
    'Moka Pot',
    'Cold Brew Device',
    'Espresso Machine'
];

class CurrentGearForm extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Current Gear
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Tell us some info about your current coffee gear.
                        </Typography>
                    </Container>
                </div>
                <div className={classes.allForms}>
                    <div className={classes.formGroup}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Scale?</InputLabel>

                                <Select
                                    labelId="demo-simple-select-label"
                                    name="scaleType"
                                    id="demo-simple-select"
                                    value={this.props.scaleType}
                                    onChange={this.props.handleChange}
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
                                    value={this.props.kettleType}
                                    onChange={this.props.handleChange}
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
                                value={this.props.grinderType}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={"Blade Grinder"}>Blade Grinder</MenuItem>
                                <MenuItem value={"Hand Burr Grinder"}>Hand Burr Grinder</MenuItem>
                                <MenuItem value={"Electric Burr Grinder <$120"}>Electric Burr Grinder under $120</MenuItem>
                                <MenuItem value={"Electric Burr Grinder >$120"}>Electric Burr Grinder over $120</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-checkbox-label">Brewers?</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                name="brewerTypes"
                                multiple
                                value={this.props.brewerTypes}
                                onChange={this.props.handleChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {brewerNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.props.brewerTypes.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Coffee Beans?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="coffeeBeanType"
                                id="demo-simple-select"
                                value={this.props.coffeeBeanType}
                                onChange={this.props.handleChange}
                            >
                                <MenuItem value={"None"}>None</MenuItem>
                                <MenuItem value={"Store-Bought Pre-Ground"}>Store-Bought Pre-Ground</MenuItem>
                                <MenuItem value={"Store-Bought Whole Bean"}>Store-Bought Whole Bean</MenuItem>
                                <MenuItem value={"Local Coffee Shop Pre-Ground"}>Local Coffee Shop Pre-Ground</MenuItem>
                                <MenuItem value={"Local Coffee Shop Whole Bean"}>Local Coffee Shop Whole Bean</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(CurrentGearForm);