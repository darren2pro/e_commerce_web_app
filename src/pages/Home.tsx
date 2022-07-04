import BasicList from '../components/BasicList';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const welcomeMessage =
        "Welcome to River Valley Irregulars Static E-Commerce Website!";

    return (
        <>
            <h3>{welcomeMessage}</h3>
            <br />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(30)
                        .pauseFor(1500)
                        .typeString("Click an item to view more")
                        .start();
                }}
            />
            <BasicList />
            <br />
            <br />
        </>
    );
};

export default Home;
