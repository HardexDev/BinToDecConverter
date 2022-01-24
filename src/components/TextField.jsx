import React from 'react';

export default function TextField(props) {
  return (
    <div className="mb-3">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input className="form-control" type="text" id={props.id} value={props.value} onChange={props.handler}/>
    </div>
  );
}
