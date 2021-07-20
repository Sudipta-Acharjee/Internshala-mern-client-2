import React, { useState } from 'react';
import Fakedata from '../jsondata.json';
import Datalist from './Datalist';

const Home = () => {
    const first = Fakedata.slice(0, 1500);
    const [users, setAlluser] = useState(first)
    
    const handleSubmit = () => {
        console.log("working")
    }
    return (
        <div>
            <h1 className="text-primary"> Hello World! </h1>
            <button onClick={handleSubmit}>Send Data</button>
            <div>
                {
                    users.map(user => <Datalist user={user}></Datalist>)
                }
            </div>
        </div>
    );
};

export default Home;