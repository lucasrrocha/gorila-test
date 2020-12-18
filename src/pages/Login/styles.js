import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  background: #fff;
  width: 90vw;
  max-width: 500px;
  padding: 2.5rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const Error = styled.p`
  color: red;
`;

export const Message = styled.p`
  margin-top: 1.125rem;
  text-align: right;
`;

export const Link = styled.span`
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.2s;

  &&:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }
`;

export const Footer = styled.footer``;
