import React from 'react';
import { Handle, Wrapper } from './style';

export default function BottomSheetHeader() {
  return (
    <Wrapper>
      <Handle data-cy="bottomSheet_handle" />
    </Wrapper>
  );
}
