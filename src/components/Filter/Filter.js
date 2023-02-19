import React from 'react';

import CONST from 'const';
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
          placeholder={CONST.inputPlaceholder}
        />
      </label>
    </div>
  );
};
