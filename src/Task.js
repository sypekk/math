import React from "react";
import styled from "styled-components";

const Hidden = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
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

const Wrapper = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  max-width: ${({ theme }) => theme.size.laptop};
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  font-weight: ${({ theme }) => theme.bold};
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

const Task = ({ state, changeAnswerFn, buttonOkFn }) => {
  const taskQ = state.questions.map(q => {
    if (q.type === "+") {
      return (
        <Wrapper key={q.id} active={q.active}>
          <Header>
            {q.a} + {q.b}
          </Header>
          <Header>=</Header>
          <Input id={q.id} onChange={changeAnswerFn} type="number" />
          {q.answer.length > 0 ? (
            <Button id={q.id} onClick={buttonOkFn}>
              OK
            </Button>
          ) : null}
        </Wrapper>
      );
    } else if (q.type === "-") {
      return (
        <Wrapper key={q.id} active={q.active}>
          <Header>
            {q.a} - {q.b}
          </Header>
          <Header>=</Header>
          <Input id={q.id} onChange={changeAnswerFn} type="number" />
          {q.answer.length > 0 ? (
            <Button id={q.id} onClick={buttonOkFn}>
              OK
            </Button>
          ) : null}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper key={q.id} active={q.active}>
          <Header>
            {q.a} * {q.b}
          </Header>
          <Header>=</Header>
          <Input id={q.id} onChange={changeAnswerFn} type="number" />
          {q.answer.length > 0 ? (
            <Button id={q.id} onClick={buttonOkFn}>
              OK
            </Button>
          ) : null}
        </Wrapper>
      );
    }
  });
  return <Hidden>{taskQ}</Hidden>;
};

export default Task;
