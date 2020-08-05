import React from 'react';
import useStyles from './index.styles';


interface Props {
    sample?: string;
}



const HomePage = (props: Props) => {
        const classes = useStyles();
    
    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage;
