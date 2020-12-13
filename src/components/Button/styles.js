import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-primary);
  color: var(--color-button-text);
  outline: 0;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;

  &&:hover {
    background: var(--color-primary-dark);
  }
`;
