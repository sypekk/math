import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;
  color: ${({ theme }) => theme.fontColor};
  padding: 5px;

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Button = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 10px;
  text-transform: uppercase;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Input = styled.input`
  margin: 10px;
  width: 80%;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.border};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.m};

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.laptop};
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  font-weight: ${({ theme }) => theme.bold};
  /* transform: translateY(50%); */
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    height: 160px;
  }
`;

const StoreView = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Start = ({ isKnowUser, username, score, changeFn, saveDataFn, changePanelFn }) => {
  const newUser = () => (
    <Wrapper>
      <Header>Pierwsze uruchomienie</Header>
      <Input name="username" type="text" placeholder="Wpisz imię dziecka" onChange={changeFn} />
      <Input name="password" type="password" placeholder="Wpisz hałso do ustawień" onChange={changeFn} />
      <Input name="rangeAddSub" type="number" placeholder="Zakres dodawania i odejmowania" onChange={changeFn} />
      <Input name="rangeMulti" type="number" placeholder="Zakres mnożenia (1-10)" min='1' max='10' onChange={changeFn} />
      <Button onClick={saveDataFn}>Zapisz</Button>
    </Wrapper>
  );

  const oldUser = () => (
    <Wrapper>
      <Header>Witaj {username}</Header>
      <WrapperRow>
        <Button name="task" onClick={changePanelFn}>
          Rozpocznij
        </Button>
        <Button>Nagrody</Button>
        <Button name="parents" onClick={changePanelFn}>
          Panel Rodzica
        </Button>
      </WrapperRow>
    </Wrapper>
  );

  return (
    <>
      {isKnowUser ? <StoreView>{score} punktów</StoreView> : null}
      {isKnowUser ? oldUser() : newUser()}
    </>
  );
};

export default Start;
