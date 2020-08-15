import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RecItem(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant="h6" noWrap>
                {/*{props.recTitle}*/}
            </Typography>
            <div>
                {/*<img src={props.recImageSrc} alt={props.recImageAlt} width="200" height="200"/>*/}
            </div>
            <div>
                {props.rec["rec"]}
                <p>{props.rec["description"]}</p>
            </div>
            <div>
                {/*<p>{props.recDescription}</p>*/}
            </div>
        </div>
    );
}