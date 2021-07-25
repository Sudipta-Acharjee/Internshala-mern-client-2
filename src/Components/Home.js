import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Datalist from './Datalist';

export default function Search() {
    const [data, setData] = useState([]);
    const [filtered, setFilterd] = useState([]);
    let [result, setResult] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/data');
                setData(res.data);
                setFilterd(res.data);
            } catch (err) {
                throw new Error(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let results = filtered.filter(res => res.title.toLowerCase().includes(result)
        );
        let results1 = filtered.filter(res => res.topic.toLowerCase().includes(result)
        );
        let results2 = filtered.filter(res => res.source.toLowerCase().includes(result)
        );
        let results3 = filtered.filter(res => res.country.toLowerCase().includes(result)
        );
        let results4 = filtered.filter(res => res.region.toLowerCase().includes(result)
        );
        setData(results || results1 || results2 || results3 || results4);
    }, [result])
    console.log(data)


    const onChange = (e) => {
        setResult(e.target.value);
    }
    const handleAddData = () => {
        fetch('http://localhost:5000/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div>
            {/* <button onClick={handleAddData}>Add Product</button> */}
            <input style={{ "marginLeft": "43%" }}
                type="text"
                placeholder="Name of Title,Topic,source,region..."
                value={result}
                onChange={onChange}
            />
            {data.map((r, i) => (
                <Datalist key={i} r={r}></Datalist>
            ))
            }
        </div>
    )
}