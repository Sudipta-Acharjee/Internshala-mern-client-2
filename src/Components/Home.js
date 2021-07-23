import React, { useState } from 'react';
import Fakedata from '../jsondata.json';
import Datalist from './Datalist';

const Home = () => {
    const first = Fakedata.slice(0, 1500);
    const [searchTerm, setSearchTerm] = React.useState("");
    let [searchResults,setSearchResults] = React.useState([]);
    const handleChange = (event) =>{
        // if()
        return setSearchTerm(event.target.value=== "co");
    }
    React.useEffect(() => {
        const results = first.filter(person =>
          person.toString().toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
    // const search = (e) => {
    //     let endArray = users.filter(function (ele) {
    //         return ele.end_year !== "";
    //     });
    //     let counArray = users.filter(function (ele) {
    //         return ele.country !== "";
    //     });
    //     if (e.target.value === "co") {
            
    //         console.log(users);

    //     } else if (e.target.value === "en" || e.target.value === "En") {
    //         users = endArray;
    //         console.log(users);
    //     }
    // }

    return (
        <section>
            <input style={{ "marginLeft": "43%" }} type="text" placeholder="Type intensity, End year etc"  value={searchTerm} onChange={handleChange} />
            {
                searchResults.map(user => <Datalist user={user}></Datalist>)
            }
        </section>
    );
};

export default Home;