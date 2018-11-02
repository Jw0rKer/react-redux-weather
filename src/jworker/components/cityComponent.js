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
                {temp?<div className="col">temp: {temp}</div>:""}
                {pressure?<div className="col">pressure: {pressure}</div>:""}
                {humidity?<div className="col">humidity: {humidity}</div>:""}
                {min?<div className="col">min: {min}</div>:""}
                {max?<div className="col">max: {max}</div>:""}
            </div>
        }
    </div>
)