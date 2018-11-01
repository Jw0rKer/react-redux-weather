import React from 'react';


export const City = ({name, weatherIcon, temp, pressure, humidity, min, max, loading}) => (
    <div className="card">
        {(loading) ?
            <div className="card-body">
                loading
            </div>
            :
            <div className="card-body">
                <div className="col">name: {name}</div>
                < div className="col">temp: {temp}</div>
                <div className="col">pressure: {pressure}</div>
                <div className="col">humidity: {humidity}</div>
                <div className="col">min: {min}</div>
                <div className="col">max: {max}</div>
            </div>
        }
    </div>
)