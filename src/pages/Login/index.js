import React, { useState, useContext } from 'react';
import fire from '../../fire';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    clearInput();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  if (currentUser) {
    return <Redirect to="/home" />;
  }

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
          required
          label="E-mail"
          type="text"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <S.Error>{emailError}</S.Error>
        <Input
          name="password"
          placeholder="Digite sua senha"
          required
          label="Senha"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <S.Error>{passwordError}</S.Error>
        <S.Footer>
          {hasAccount ? (
            <>
              <Button type="submit" onClick={handleLogin}>
                Entrar
              </Button>
              <S.Message>
                Não tem conta?{' '}
                <S.Link onClick={() => setHasAccount(!hasAccount)}>
                  Cadastre-se
                </S.Link>
              </S.Message>
            </>
          ) : (
            <>
              <Button type="submit" onClick={handleSignUp}>
                Cadastrar
              </Button>
              <S.Message>
                Já possui uma conta?{' '}
                <S.Link
                  onClick={() => {
                    setHasAccount(!hasAccount);
                  }}
                >
                  Entrar
                </S.Link>
              </S.Message>
            </>
          )}
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
