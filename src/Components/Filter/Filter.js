import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import data from '../../jsondata.json';

const Filter = () => {
    const endArray = data.filter(function (ele) {
        return ele.end_year !== "";
    });
    const counArray = data.filter(function (ele) {
        return ele.country !== "";
    });
    const topicsArray = data.filter(function (ele) {
        return ele.topic !== "";
    });
    const sectorArray = data.filter(function (ele) {
        return ele.sector !== "";
    });
    const regionArray = data.filter(function (ele) {
        return ele.region !== "";
    });
    const sourceArray = data.filter(function (ele) {
        return ele.source !== "";
    });
    const intensityArray = data.filter(function (ele) {
        return ele.intensity !== "";
    });
    console.log(intensityArray);

    return (
        <div>
            <h3><FilterListIcon />Filter</h3>
            <button value="end_year">End Year</button>
            <button value="country">Country</button>
            <button value="topic">Topic</button>
            <button value="sector">Sector</button>
            <button value="region">Region</button>
            <button value="source">Source</button>
            <button value="intensity">Intensity</button>
        </div>
    );
};

export default Filter;