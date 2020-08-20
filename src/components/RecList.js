import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import RecItem from "./RecItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        margin: '2% 0',
    }
}));

export default function RecList(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant="h3" noWrap>
                {props.recName}
            </Typography>
            <div className={classes.cardList}>
                {props.recList.map( recItem => {
                        return (
                            <RecItem
                                key={recItem.rec.hash}
                                recItem={recItem}
                            />
                        )
                    }
                )}
            </div>
        </div>
    );
}