import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Front.css';
import Home from './Home';

const Front = () => {
    return (
        <div>
            <div className="overflow-auto">
                <h1 className="text">Assignment</h1>
            </div>
            <div >
                <Home/>
            </div>
        </div>
    );
};

export default Front;