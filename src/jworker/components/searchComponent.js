import React from 'react'

export const Search = ({
                           defaultValue,
                           onSearch = () => {
                           }
                       }) => {
    let _inputRef;
    return <div className="input-group">
        <input className="form-control" ref={input => _inputRef = input} defaultValue={defaultValue}/>
        <button className="input-group-append btn btn-primary" onClick={() => {
            onSearch(_inputRef.value);
        }}>search
        </button>
    </div>
}