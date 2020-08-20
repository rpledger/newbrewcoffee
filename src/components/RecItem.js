import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        width: "250px",
        minHeight: "300px",
        marginRight: "15px",
        marginLeft: "15px",

    }
}));

export default function RecItem(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                        title={props.recItem.rec}
                >
                </CardHeader>
                <Divider variant="middle" />
                <CardContent>
                {props.recItem.description}
                </CardContent>
            </Card>
        </div>
    );
}