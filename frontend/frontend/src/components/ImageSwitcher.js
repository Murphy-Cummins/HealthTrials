import React from "react";
import { useLocation } from "react-router-dom";

import '../styles/App.css';
import Laughing from '../Pictures/Laughing.jpg';
import HighFive from '../Pictures/PatientHighFive.jpg';
import Smiling from '../Pictures/Smiling.jpg';
import Testing from '../Pictures/Testing.jpg';
import Form from '../Pictures/Form.jpg';
import Hand from '../Pictures/Hand.jpg';

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
        case '/create':
            image = Form;
            break;
        case '/favorites':
            image = Hand;
            break;
        case '/login':
            image = Testing;
            break;
        default:
            image = Smiling;
    }

    return (
        <div className ="centered-image" style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                padding: 0,
            }
        }>
    <img src={image} alt="Centered" style={
                {   
                    height: '400px',
                    width: 'auto',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    fontFamily: 'sans-serif',
                }
            }
    />
    </div>
    );
}

export default ImageSwitcher;