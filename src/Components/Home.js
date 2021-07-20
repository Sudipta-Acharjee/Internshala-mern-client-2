import React, { useState } from 'react';
import Fakedata from '../jsondata.json';
import Datalist from './Datalist';

const Home = () => {
    const first = Fakedata.slice(0,1500);
    const [users, setAlluser] = useState(first)
    
    const handleSubmit = () => {
        console.log("working")
    }
    return (
            <section>
                {
                    users.map(user => <Datalist user={user}></Datalist>)
                }
            </section>
    );
};

export default Home;