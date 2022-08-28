import React from 'react'

const Input = ({
    value, 
    onChange, 
    errors,
    type,
    name,
    placeholder
}) => {
  return (
    <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!errors && <p>{errors}</p>}
    </div>
  )
}

export default Input;
