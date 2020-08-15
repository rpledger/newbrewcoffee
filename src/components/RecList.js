import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import RecItem from "./RecItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RecList(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant="h5" noWrap>
                {props.recName}
            </Typography>
            <div>
                {props.recList.map( rec => {
                        console.log(rec)
                        return (
                            <RecItem
                                key={rec["rec"].hash}
                                rec={rec}
                            />
                        )
                    }
                )}
            </div>
        </div>
    );
}