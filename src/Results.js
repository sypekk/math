import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  /* align-items: center; */
  justify-content: space-around;
  text-align: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.laptop};
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  font-weight: ${({ theme }) => theme.bold};
  /* transform: translateY(50%); */
`;

const StyledWrapper = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  height: none;
  max-width: ${({ theme }) => theme.size.laptop};

  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    justify-content: space-between;
  }
`;

const Div = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
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

const Results = ({ state, changePanelFn, reward }) => {
  const showResults = state.questions.map(q => (
    <StyledWrapper>
      <Div>
        {q.a} {q.type} {q.b} = {q.answer}
      </Div>
      <Div>{parseInt(q.answer) === q.c ? "DOBRZE" : "ŹLE"}</Div>
    </StyledWrapper>
  ));
  return (
    <Wrapper>
      {showResults}
      <Div>Zdobyłeś: {reward} punktów</Div>
      <Button name="start" onClick={changePanelFn}>
        Zakończ
      </Button>
    </Wrapper>
  );
};

export default Results;
