import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import * as S from './styles';

const PageHeader = props => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo
          src="https://gorila.com.br/wp-content/uploads/2020/07/LogoGorila_Header.png"
          width="160"
          height="45"
          alt="Logotipo Gorila"
        />
        <S.WrapperButton onClick={props.onClick}>
          <FiLogOut size={20} color="var(--color-primary)" />
          <S.Text>Logout</S.Text>
        </S.WrapperButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default PageHeader;
