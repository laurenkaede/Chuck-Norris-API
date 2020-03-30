import React from 'react';
import ChuckGif from './ChuckGif.js';
import Spinner from './Spinner.js';

const ChuckImg = (props) => {

    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <ChuckGif />
                {props.data}
            </div>
            )
        }
    };

export default ChuckImg;
