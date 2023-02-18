import React from 'react';
import { Input } from './Filter.styled';

export const Filter = ({ setSearchText }) => {
  return (
    <div>
      <label>
        <Input
          onChange={e => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Search available columns..."
        />
      </label>
    </div>
  );
};
