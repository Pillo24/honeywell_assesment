import { TextField } from '@mui/material';
import React from 'react';

const Input = ({
  id,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  startAdornment,
  endAdornment = null,
  schema,
  isDirty = false,
  customMessage = null,
}) => {
  const { error } = schema.validate(value);
  const messageError =
    (isDirty && (customMessage || error?.details[0]?.message)) || null;
  console.log('error', messageError);

  return (
    <TextField
      id={id}
      name={id}
      label={label}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value || ''}
      fullWidth
      required
      InputProps={{ startAdornment, endAdornment }}
      helperText={messageError}
      error={!!messageError}
    />
  );
};

export default Input;
