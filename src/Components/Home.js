import React, { useState } from 'react';
import Fakedata from '../jsondata.json';
import Datalist from './Datalist';

const Home = () => {
    const first = Fakedata.slice(0, 1500);
    const [searchTerm, setSearchTerm] = React.useState("");
    let [searchResults,setSearchResults] = React.useState([]);

    const handleChange = (event) =>{
        return setSearchTerm(event.target.value=== "co");
    }
    React.useEffect(() => {
        const results = first.filter(person =>
          person.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

    const handleAddData=()=>{
        fetch('http://localhost:5000/addData',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(first)
        })
    }
    

    return (
        <section>
            <button onClick={handleAddData}>Add Product</button>
            <input style={{ "marginLeft": "43%" }} type="text" placeholder="Type intensity, End year etc"  value={searchTerm} onChange={handleChange} />
            {
                searchResults.map(user => <Datalist user={user}></Datalist>)
            }
        </section>
    );
};

export default Home;