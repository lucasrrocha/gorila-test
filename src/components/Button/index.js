import React from 'react';

import * as S from './styles';

const Button = props => {
  return (
    <S.Container>
      <S.Button type={props.type} onClick={props.onClick}>
        {props.children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
