import React from "react";
import { useLocation } from "react-router-dom";

import Laughing from '../Pictures/Laughing.jpg';
import HighFive from '../Pictures/PatientHighFive.jpg';
import Smiling from '../Pictures/Smiling.jpg';
import Testing from '../Pictures/Testing.jpg';

function ImageSwitcher () {
    const location = useLocation();

    let image;

    switch(location.pathname) {
        case '/':
            image = Smiling;
            break;
        case '/profile':
            image = HighFive;
            break;
        case '/favorites':
            image = Testing;
            break;
        default:
            image = Smiling;
    }

    return (
        <div className ="centered-container">
            <img src={image} alt="Page Banner" style={
                {   width:'300px',
                    height: 'auto',
                    marginTop: '20px',
                    borderRadius: '8px',
                }
            }
            />
        </div>
    );
}

export default ImageSwitcher;