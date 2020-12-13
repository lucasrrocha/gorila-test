import React from 'react';

import * as S from './styles';

const Input = props => {
  const { name, label } = props;
  return (
    <S.Container {...props}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} {...props} />
    </S.Container>
  );
};

export default Input;
