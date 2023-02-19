import React from 'react';

import CONST from 'const';
import { Button } from './Button.styled';

const noop = () => {};

export const ModalButton = ({ onClick }) => {
  const _onClick = typeof onClick === 'function' ? onClick : noop;

  return (
    <div>
      <Button onClick={_onClick}>{CONST.modalButtonLabel}</Button>
    </div>
  );
};
