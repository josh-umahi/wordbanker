import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
  name?: string;
  inputValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  half?: boolean;
  type?: string;
  handleShowPassword?: () => void;
  autoFocus?: boolean;
};
const Input: React.FC<Props> = ({
  name,
  inputValue,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <TextField
    style={{
      marginBottom: '14px',
    }}
    name={name}
    onChange={handleChange}
    value={inputValue}
    variant='outlined'
    required
    fullWidth
    label={label}
    autoFocus={autoFocus}
    type={type}
    InputProps={
      name === 'password'
        ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        : undefined
    }
  />
);

export default Input;
