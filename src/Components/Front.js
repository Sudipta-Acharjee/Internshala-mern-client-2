import React from 'react';
import './Front.css';
import Home from './Home';
const Front = () => {
    return (
        <div>
            <div className="overflow-auto">
                <h1 className="text">Assignment</h1>
            </div>
            <div className="d-flex">
                <div>
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default Front;