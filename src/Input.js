import React from 'react'

function Input({onChangeField , name}){
    return(
        <div>
            <input type='text' onChange={onChangeField} value={name}/>
        </div>
    )
}

export default Input