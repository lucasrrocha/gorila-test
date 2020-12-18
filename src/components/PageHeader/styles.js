import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background-color: var(--color-box-base);
  width: 100%;
  height: 70px;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
`;

export const Logo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperButton = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  transition: color 0.2s;
  cursor: pointer;

  &&:hover {
    color: var(--color-primary-dark);
  }
`;

export const Text = styled.p`
  font: 700 1.125rem Poppins;
  margin-left: 0.8rem;
`;
