import React, {useEffect} from 'react';
import {LinearProgress} from "@material-ui/core";

type LoadingBarPropsType = {
    deleteCallback: () => void
}

export const LoadingBar: React.FC<LoadingBarPropsType> = (props) => {
    const [progress, setProgress] = React.useState<number>(0);
    const [intervalId, setIntervalId] = React.useState<NodeJS.Timer | null>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 25);
        }, 500);
        setIntervalId(intervalId);
    }, []);

    useEffect(() => {
        if (progress > 100) {
            props.deleteCallback()
            intervalId && clearInterval(intervalId);
        }
    }, [progress])

    return (
        <>
            <LinearProgress variant="determinate" value={progress}/>
        </>
    )
}