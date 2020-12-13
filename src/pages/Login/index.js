import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Funciona');
  };

  return (
    <S.Container>
      <S.Logo
        src="https://gorila.com.br/wp-content/uploads/2020/07/LogoGorila_Header.png"
        width="163"
        height="48"
        alt="Logotipo Gorila"
      />
      <S.Wrapper>
        <Input
          name="email"
          placeholder="Digite o seu e-mail"
          label="E-mail"
          type="text"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <Input
          name="password"
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <S.Footer>
          <Button type="submit" onClick={handleSubmit}>
            Entrar
          </Button>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
