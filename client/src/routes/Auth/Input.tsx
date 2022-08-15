import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


type Props = {
  name?: string;
  inputValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  half?: boolean;
  type?: string;
  handleShowPassword?: () => void;
  autoFocus?: boolean;

}
const Input: React.FC<Props> = ({ name, inputValue, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    <TextField
      style={{
        marginBottom: "14px"
      }}
      name={name}
      onChange={handleChange}
      value={inputValue}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : undefined}
    />
);

export default Input;
