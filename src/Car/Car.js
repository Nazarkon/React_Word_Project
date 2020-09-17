import React from 'react';
import Input from '../Input'


function Car(props){
    const { name , year ,onChangeTitle , onChangeField , onDelete} = props
    return (
        <div style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            display: 'block',
            padding: '10px'
        }}>
            <h1>Name: {name}</h1>
            <h2>Year: {year}</h2>
            <Input onChangeField={onChangeField} name={name}/>
            <button onClick={onChangeTitle}>Click</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Car