import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;

  min-height: 100vh;

  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));

  @media (min-width: 375px) {
    padding: 3rem;
  }
`;

export const Header = styled.div`
  @media (min-width: 375px) {
    border: 0.3rem solid hsl(217, 16%, 45%);
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
  }
`;

export const Score = styled.div`
  @media (min-width: 375px) {
    background-color: white;
    padding: 0.6rem 2rem;
    border-radius: 0.8rem;

    p {
      font-size: 1.2rem;
      color: hsl(229, 64%, 46%);
      font-weight: 600;
      letter-spacing: 0.1rem;
    }

    h1 {
      font-size: 4rem;
      color: hsl(229, 25%, 31%);
      font-weight: 700;
    }
  }
`;

export const Icons = styled.div`
  @media (min-width: 375px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Icon = styled.div`
  @media (min-width: 375px) {
    background-color: white;
    border-radius: 100%;
    padding: 2rem;
  }
`;

export const Button = styled.div`
  @media (min-width: 375px) {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;

    button {
      padding: 1rem 2rem;
      border-radius: 0.8rem;
    }
  }
`;
