import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  background: var(--color-primary);
  color: var(--color-button-text);
  outline: 0;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.125rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 1.125rem;

  &&:hover {
    background: var(--color-primary-dark);
  }
`;
