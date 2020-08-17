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
        // width: '60%',
        textAlign: 'center',
        margin: '2% 0',
    }
}));

export default function RecList(props) {
    const classes = useStyles();

    console.log("recList: " + props.recList)
    return (
    
        <div>
            <Typography className={classes.title} variant="h5" noWrap>
                {props.recName}
            </Typography>
            <div className={classes.cardList}>
                {props.recList.map( recItem => {
                        console.log("recItem: " + recItem)
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