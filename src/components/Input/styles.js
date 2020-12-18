import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: ${props => (props.type === 'password' ? '1.5rem' : '0')};
`;

export const Label = styled.label`
  font-size: 1.125rem;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type
}))`
  width: 100%;
  height: 2.5rem;
  margin-top: 0.4rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.125rem;
  font: 1rem Archivo;
`;
