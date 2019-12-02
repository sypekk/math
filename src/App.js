import React from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import Cookies from "js-cookie";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";
import { Dodawanie, Odejmowanie, Mnozenie } from "./TaskGenerator";
import ParentsPanel from "./ParentsPanel";
import Task from "./Task";
import Start from "./Start";
import Results from "./Results";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: 50vh;
  transform: translateY(50%);
`;

class App extends React.Component {
  state = {
    username: "",
    score: "",
    reward: "",
    allTaskDone: "",
    badTaskDone: "",
    goodTaskDone: "",
    password: "",
    rangeAddSub: "",
    rangeMulti: "",
    isKnowUser: false,
    message: "",
    questions: [],

    checkpassword: "",
    isAuthenticate: false,
    //views
    panelActive: "start"
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeAnswerTask = e => {
    e.preventDefault();
    let questions = [...this.state.questions];
    questions.forEach(question => {
      if (question.id === parseInt(e.target.id)) {
        question.answer = e.target.value;
      }
    });
    this.setState({
      questions
    });
  };

  handleButtonOK = e => {
    e.preventDefault();
    let questions = [...this.state.questions];
    questions.forEach(question => {
      if (question.id === parseInt(e.target.id)) {
        question.active = false;
      }
    });
    this.setState({
      questions
    });
  };

  handleCheckPassword = e => {
    e.preventDefault();
    if (this.state.checkpassword === this.state.password) {
      this.setState({
        isAuthenticate: true,
        message: ""
      });
    } else {
      this.setState({
        message: "Błędne hasło"
      });
    }
  };

  handleCreateQuestions = () => {
    // e.preventDefault();
    const { rangeAddSub, rangeMulti } = this.state;
    const tmpQ = [];
    for (let i = 0; i < 10; i++) {
      const x = Math.floor(Math.random() * 100 + 1);
      if (x > 66) {
        tmpQ.push(Dodawanie(i, rangeAddSub));
      } else if (x <= 65 && x > 33) {
        tmpQ.push(Mnozenie(i, rangeMulti));
      } else {
        tmpQ.push(Odejmowanie(i, rangeAddSub));
      }
    }
    this.setState({
      questions: tmpQ
    });
  };

  handleSaveData = e => {
    e.preventDefault();
    const { score, username, password, rangeAddSub, rangeMulti } = this.state;
    Cookies.set("score", score, { expires: 365 });
    Cookies.set("username", username, { expires: 365 });
    Cookies.set("password", password, { expires: 365 });
    Cookies.set("rangeAddSub", rangeAddSub, { expires: 365 });
    Cookies.set("rangeMulti", rangeMulti, { expires: 365 });
    Cookies.set("isKnowUser", true, { expires: 365 });

    this.setState({
      isKnowUser: true
    });
  };

  handleShowResult = () => {
    let goodAnswer = 0;
    let badAnswer = 0;
    const { score, questions, allTaskDone, badTaskDone, goodTaskDone } = this.state;
    questions.forEach(q => {
      if (parseInt(q.answer) === q.c) goodAnswer++;
      else badAnswer++;
    });

    const reward = goodAnswer - badAnswer;

    const allScore = parseInt(score) + reward;
    Cookies.set("score", allScore, { expires: 365 });
    Cookies.set("allTaskDone", allTaskDone + 10, { expires: 365 });
    Cookies.set("badTaskDone", badTaskDone + badAnswer, { expires: 365 });
    Cookies.set("goodTaskDone", goodTaskDone + goodAnswer, { expires: 365 });
    this.setState({
      reward,
      score: allScore,
      allTaskDone: allTaskDone + 10,
      badTaskDone: badTaskDone + badAnswer,
      goodTaskDone: goodTaskDone + goodAnswer,
      panelActive: "results"
    });
  };

  handleChangePanel = e => {
    e.preventDefault();
    if (e.target.name === "task") this.handleCreateQuestions();
    this.setState({
      panelActive: e.target.name
    });
  };

  componentDidUpdate() {
    if (!this.state.isShowResult && this.state.panelActive === "task") {
      let backup = [...this.state.questions];
      const ok = backup.filter(item => item.active === true);
      if (ok.length === 0) {
        this.handleShowResult();
      }
    }
  }

  componentDidMount() {
    let username;
    if (Cookies.get("username")) {
      username = Cookies.get("username");
    } else {
      username = "";
    }

    let score;
    if (Cookies.get("score")) {
      score = parseInt(Cookies.get("score"));
    } else {
      score = 0;
    }

    let allTaskDone;
    if (Cookies.get("allTaskDone")) {
      allTaskDone = parseInt(Cookies.get("allTaskDone"));
    } else {
      allTaskDone = 0;
    }

    let badTaskDone;
    if (Cookies.get("badTaskDone")) {
      badTaskDone = parseInt(Cookies.get("badTaskDone"));
    } else {
      badTaskDone = 0;
    }

    let goodTaskDone;
    if (Cookies.get("goodTaskDone")) {
      goodTaskDone = parseInt(Cookies.get("goodTaskDone"));
    } else {
      goodTaskDone = 0;
    }

    let password;
    if (Cookies.get("password")) {
      password = Cookies.get("password");
    } else {
      password = "";
    }

    let rangeAddSub;
    if (Cookies.get("rangeAddSub")) {
      rangeAddSub = parseInt(Cookies.get("rangeAddSub"));
    } else {
      rangeAddSub = 20;
    }

    let rangeMulti;
    if (Cookies.get("rangeMulti")) {
      rangeMulti = parseInt(Cookies.get("rangeMulti"));
    } else {
      rangeMulti = 3;
    }

    let reward;
    if (Cookies.get("reward")) {
      reward = parseInt(Cookies.get("reward"));
    } else {
      reward = 0;
    }

    let isKnowUser;
    if (Cookies.get("isKnowUser")) {
      if (Cookies.get("isKnowUser") === "true") {
        isKnowUser = true;
      }
    } else {
      isKnowUser = false;
    }

    this.setState({
      username,
      score,
      allTaskDone,
      badTaskDone,
      goodTaskDone,
      password,
      rangeAddSub,
      rangeMulti,
      reward,
      isKnowUser
    });
  }

  render() {
    const { username, score, isKnowUser, panelActive, isAuthenticate, message, reward } = this.state;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {panelActive === "start" ? (
            <Start
              isKnowUser={isKnowUser}
              username={username}
              score={score}
              changeFn={this.handleChange}
              saveDataFn={this.handleSaveData}
              changePanelFn={this.handleChangePanel}
              taskPanelShowFn={this.handleShowTaskPanel}
            />
          ) : null}
          {panelActive === "parents" ? (
            <ParentsPanel
              state={this.state}
              changeFn={this.handleChange}
              saveDataFn={this.handleSaveData}
              changePanelFn={this.handleChangePanel}
              checkPassowrdFn={this.handleCheckPassword}
              isAuthenticate={isAuthenticate}
              message={message}
            />
          ) : null}
          {panelActive === "task" ? (
            <Task state={this.state} changeAnswerFn={this.handleChangeAnswerTask} buttonOkFn={this.handleButtonOK} />
          ) : null}
          {panelActive === "results" ? (
            <Results state={this.state} changePanelFn={this.handleChangePanel} reward={reward} />
          ) : null}
        </ThemeProvider>
      </>
    );
  }
}

export default App;
