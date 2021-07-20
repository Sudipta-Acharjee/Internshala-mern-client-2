import React from 'react';
import './Front.css';
import Home from './Home';

const Front = () => {
    return (
        <section>
            <h1 className="text"><u>Assignment</u></h1>
            <div className="d-flex">
                <div className="col-md-4 cart1">
                    <Home></Home>
                </div>
                <div className="col-md-4 cart1">
                    <h1>Hi</h1>
                </div>
            </div>
        </section>
    );
};

export default Front;