import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.laptop};
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: none;
  max-width: ${({ theme }) => theme.size.laptop};

  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    justify-content: space-between;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: block;
  /* margin-top: 50px; */
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
  width: 25%;
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
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    width: 50%;
  }
`;

const ParentsPanel = ({
  state,
  changeFn,
  saveDataFn,
  startPanelShowFn,
  changePanelFn,
  checkPassowrdFn,
  isAuthenticate,
  message
}) => {
  const checkPassword = () => (
    <Wrapper>
      <h2>Podaj hasło:</h2>
      <Center>
        <Input name="checkpassword" type="password" placeholder="Wpisz hasło" onChange={changeFn} />
        <Button onClick={checkPassowrdFn}>Sprawdź</Button>
        {message.length > 0 ? message : null}
      </Center>
    </Wrapper>
  );
  const panel = () => (
    <Wrapper>
      <h2>Panel Rodzica</h2>
      <StyledWrapper>
        <div>Imię dziecka:</div>
        <Input name="username" type="text" onChange={changeFn} value={state.username} />
      </StyledWrapper>
      <StyledWrapper>
        <div>Punkty:</div>
        <Input name="score" type="number" onChange={changeFn} value={state.score} />
      </StyledWrapper>
      <StyledWrapper>
        <div>Zakres dodwania / odejmowania:</div>
        <Input name="rangeAddSub" type="number" onChange={changeFn} value={state.rangeAddSub} />
      </StyledWrapper>
      <StyledWrapper>
        <div>Zakres mnożenia / dzielenia: {state.rangeMulti > 10 ? "max: 10!" : null}</div>
        <Input name="rangeMulti" type="number" min="1" max="10" onChange={changeFn} value={state.rangeMulti} />
      </StyledWrapper>
      <StyledWrapper>
        <div>Ilość wszystkich zadań:</div>
        <div>{state.allTaskDone}</div>
      </StyledWrapper>
      <StyledWrapper>
        <div>Ilość dobrych zadań:</div>
        <div>{state.goodTaskDone}</div>
      </StyledWrapper>
      <StyledWrapper>
        <div>Ilość błędnych zadań:</div>
        <div>{state.badTaskDone}</div>
      </StyledWrapper>
      <StyledWrapper>
        <Button onClick={saveDataFn}>Zapisz</Button>
        <Button name="start" onClick={changePanelFn}>
          Strona główna
        </Button>
      </StyledWrapper>
    </Wrapper>
  );
  return <>{isAuthenticate ? panel() : checkPassword()}</>;
};

export default ParentsPanel;
