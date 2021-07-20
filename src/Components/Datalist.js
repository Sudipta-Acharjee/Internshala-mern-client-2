import React from 'react';
import './Datalist.css';
const Datalist = ({ user }) => {
    const { title, topic, source, intensity, likelihood, relevance, country, end_year, region } = user;
    return (
            <div className="row">
                <div className="column">
                        <div className="vehicleCart">
                            <ul><b>Title</b> {title}</ul>
                            <ul><b>Topic:</b> {topic}</ul>
                            <ul><b>Source:</b> {source}</ul>
                            <ul><b>Intensity:</b> {intensity}</ul>
                            <ul><b>Likelihood: </b>{likelihood}</ul>
                            <ul><b>Relevance: </b>{relevance}</ul>
                            <ul><b>Country: </b>{country}</ul>
                            <ul><b>End_Year:</b> {end_year}</ul>
                            <ul><b>Region:</b> {region}</ul>
                        </div>
                </div>
            </div>
    );
};

export default Datalist;