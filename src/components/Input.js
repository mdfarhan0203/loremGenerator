import React, { useState } from 'react'

const Input = ({ handleClick }) => {
    const [value, setValue] = useState(0)

    const handlerChange = (event) => {
        let inputdata = event.target.value
        setValue(inputdata)
    }
    return <section>
       <span className='para'>Paragraph:</span> <input 
            type='number'
            value={value}
            name='input'
            onChange={handlerChange}
        >
        </input>
        <button type='submit'
            onClick={() => handleClick(value)}
        >
            Generate
        </button>
    </section >


}
export default Input;