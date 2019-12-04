(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],{20:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),u=t(4),c=t(10),l=t(11),s=t(12),m=t(16),f=t(13),d=t(17),h=t(3),p=t(1);function g(){var e=Object(h.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    font-size: 62.5%;\n    background-color: #2d2e30;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: \"Montserrat\", sans-serif;\n    color: #e8eaed;\n  }\n"]);return g=function(){return e},e}var b=Object(p.b)(g()),z=t(2),w=t.n(z),x={background:"#2d2e30",border:"#5f6368",fontColor:"#e8eaed",fontColorRed:"#E81C00",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem",xxl:"5.5rem"},size:{mobileS:"320px",mobileM:"375px",mobileL:"410px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"}},v=function(e,n){var t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*(n-t)+1);return{id:e,type:"+",a:t,b:r,c:t+r,answer:"",active:!0}},k=function(e,n){var t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*(n-t)+1);return t>r?{id:e,type:"-",a:t,b:r,c:t-r,answer:"",active:!0}:{id:e,type:"-",a:r,b:t,c:r-t,answer:"",active:!0}},E=function(e,n){var t=Math.floor(10*Math.random()+1),r=Math.floor(Math.random()*n+1);return{id:e,type:"*",a:t,b:r,c:t*r,answer:"",active:!0}};function y(){var e=Object(h.a)(["\n  margin: 10px;\n  width: 25%;\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-bottom: 2px solid ",";\n  text-align: center;\n  font-size: ",";\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: ",";\n\n    ::placeholder {\n      font-size: ",";\n    }\n  }\n  @media (min-width: ",") {\n    width: 50%;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(h.a)(["\n  display: block;\n  /* margin-top: 50px; */\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return S=function(){return e},e}function j(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return j=function(){return e},e}function C(){var e=Object(h.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: none;\n  max-width: ",";\n\n  @media (min-width: ",") {\n    justify-content: space-between;\n  }\n"]);return C=function(){return e},e}function M(){var e=Object(h.a)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  max-width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  height: 90vh;\n  font-weight: ",";\n"]);return M=function(){return e},e}var O=p.c.div(M(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.bold})),D=p.c.div(C(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.size.laptop})),P=p.c.div(j()),F=p.c.button(S(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),T=p.c.input(y(),(function(e){return e.theme.fontColor}),(function(e){return e.theme.background}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.laptop})),A=function(e){var n=e.state,t=e.changeFn,r=e.saveDataFn,i=e.changePanelFn,o=e.checkPassowrdFn,u=e.isAuthenticate,c=e.message;e.prize;return a.a.createElement(a.a.Fragment,null,u?a.a.createElement(O,null,a.a.createElement("h2",null,"Panel Rodzica"),a.a.createElement(D,null,a.a.createElement("div",null,"Imi\u0119 dziecka:"),a.a.createElement(T,{name:"username",type:"text",onChange:t,value:n.username})),a.a.createElement(D,null,a.a.createElement("div",null,"Punkty:"),a.a.createElement(T,{name:"score",type:"number",onChange:t,value:n.score})),a.a.createElement(D,null,a.a.createElement("div",null,"Czas gry:"),a.a.createElement(T,{name:"prize",type:"number",onChange:t,value:n.prize})),a.a.createElement(D,null,a.a.createElement("div",null,"Zakres dodwania / odejmowania:"),a.a.createElement(T,{name:"rangeAddSub",type:"number",onChange:t,value:n.rangeAddSub})),a.a.createElement(D,null,a.a.createElement("div",null,"Zakres mno\u017cenia / dzielenia: ",n.rangeMulti>10?"max: 10!":null),a.a.createElement(T,{name:"rangeMulti",type:"number",min:"1",max:"10",onChange:t,value:n.rangeMulti})),a.a.createElement(D,null,a.a.createElement("div",null,"Ilo\u015b\u0107 wszystkich zada\u0144:"),a.a.createElement("div",null,n.allTaskDone)),a.a.createElement(D,null,a.a.createElement("div",null,"Ilo\u015b\u0107 dobrych zada\u0144:"),a.a.createElement("div",null,n.goodTaskDone)),a.a.createElement(D,null,a.a.createElement("div",null,"Ilo\u015b\u0107 b\u0142\u0119dnych zada\u0144:"),a.a.createElement("div",null,n.badTaskDone)),a.a.createElement(D,null,a.a.createElement(F,{onClick:r},"Zapisz"),a.a.createElement(F,{name:"start",onClick:i},"Strona g\u0142\xf3wna"))):a.a.createElement(O,null,a.a.createElement("h2",null,"Podaj has\u0142o:"),a.a.createElement(P,null,a.a.createElement(T,{name:"checkpassword",type:"password",placeholder:"Wpisz has\u0142o",onChange:t}),a.a.createElement(F,{onClick:o},"Sprawd\u017a"),c.length>0?c:null)))};function I(){var e=Object(h.a)(["\n  margin: 10px;\n  width: 25%;\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-bottom: 2px solid ",";\n  text-align: center;\n  font-size: ",";\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: ",";\n\n    ::placeholder {\n      font-size: ",";\n    }\n  }\n  @media (min-width: ",") {\n    width: 50%;\n  }\n"]);return I=function(){return e},e}function Z(){var e=Object(h.a)(["\n  display: ",";\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  max-width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  height: 80vh;\n  font-weight: ",";\n"]);return Z=function(){return e},e}function K(){var e=Object(h.a)(["\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  display: block;\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return K=function(){return e},e}function B(){var e=Object(h.a)(["\n  font-size: ",";\n  font-weight: ",";\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return B=function(){return e},e}function q(){var e=Object(h.a)(["\n  height: 90vh;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n"]);return q=function(){return e},e}var U=p.c.div(q()),L=p.c.h2(B(),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.bold}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.size.mobileL}),(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.xxl})),R=p.c.button(K(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),W=p.c.div(Z(),(function(e){return e.active?"flex":"none"}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.bold})),Y=p.c.input(I(),(function(e){return e.theme.fontColor}),(function(e){return e.theme.background}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.laptop})),J=function(e){var n=e.state,t=e.changeAnswerFn,r=e.buttonOkFn,i=n.questions.map((function(e){return a.a.createElement(W,{key:e.id,active:e.active},a.a.createElement(L,null,e.a," ",e.type," ",e.b),a.a.createElement(L,null,"="),a.a.createElement(Y,{id:e.id,onChange:t,type:"number"}),e.answer.length>0?a.a.createElement(R,{id:e.id,onClick:r},"OK"):null)}));return a.a.createElement(U,null,i)};function Q(){var e=Object(h.a)(["\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  font-size: ",";\n"]);return Q=function(){return e},e}function N(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 120px;\n  justify-content: space-between;\n\n  @media (min-width: ",") {\n    height: 160px;\n  }\n"]);return N=function(){return e},e}function G(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  max-width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  height: 90vh;\n  font-weight: ",";\n  /* transform: translateY(50%); */\n"]);return G=function(){return e},e}function H(){var e=Object(h.a)(["\n  margin: 10px;\n  width: 80%;\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-bottom: 2px solid ",";\n  text-align: center;\n  font-size: ",";\n\n  ::placeholder {\n    letter-spacing: 1px;\n    color: ",";\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: ",";\n\n    ::placeholder {\n      font-size: ",";\n    }\n  }\n"]);return H=function(){return e},e}function V(){var e=Object(h.a)(["\n  display: block;\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  cursor: pointer;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(h.a)(["\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n  color: ",";\n  padding: 5px;\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return X=function(){return e},e}var $=p.c.h2(X(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.bold}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.mobileL}),(function(e){return e.theme.fontSize.l})),_=p.c.button(V(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),ee=p.c.input(H(),(function(e){return e.theme.fontColor}),(function(e){return e.theme.background}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.border}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.fontSize.m})),ne=p.c.div(G(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.bold})),te=p.c.div(N(),(function(e){return e.theme.size.laptop})),re=p.c.div(Q(),(function(e){return e.theme.fontSize.xs})),ae=function(e){var n=e.isKnowUser,t=e.username,r=e.score,i=e.changeFn,o=e.saveDataFn,u=e.changePanelFn;return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(re,null,r," punkt\xf3w"):null,n?a.a.createElement(ne,null,a.a.createElement($,null,"Witaj ",t),a.a.createElement(te,null,a.a.createElement(_,{name:"task",onClick:u},"Rozpocznij"),a.a.createElement(_,{name:"prizes",onClick:u},"Nagrody"),a.a.createElement(_,{name:"parents",onClick:u},"Panel Rodzica"))):a.a.createElement(ne,null,a.a.createElement($,null,"Pierwsze uruchomienie"),a.a.createElement(ee,{name:"username",type:"text",placeholder:"Wpisz imi\u0119 dziecka",onChange:i}),a.a.createElement(ee,{name:"password",type:"password",placeholder:"Wpisz ha\u0142so do panelu rodzica",onChange:i}),a.a.createElement(ee,{name:"rangeAddSub",type:"number",placeholder:"Zakres dodawania i odejmowania",onChange:i}),a.a.createElement(ee,{name:"rangeMulti",type:"number",placeholder:"Zakres mno\u017cenia (1-10)",min:"1",max:"10",onChange:i}),a.a.createElement(_,{onClick:o},"Zapisz")))};function ie(){var e=Object(h.a)(["\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  display: block;\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(h.a)(["\n  font-size: ",";\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return oe=function(){return e},e}function ue(){var e=Object(h.a)(["\n  margin-top: 10px;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* align-items: center; */\n  height: none;\n  max-width: ",";\n\n  @media (min-width: ",") {\n    justify-content: space-between;\n  }\n"]);return ue=function(){return e},e}function ce(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  /* align-items: center; */\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  max-width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  height: 80vh;\n  font-weight: ",";\n  /* transform: translateY(50%); */\n"]);return ce=function(){return e},e}var le=p.c.div(ce(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.bold})),se=p.c.div(ue(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.size.laptop})),me=p.c.div(oe(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileL}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.l})),fe=p.c.button(ie(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),de=function(e){var n=e.state,t=e.changePanelFn,r=n.questions.map((function(e){return a.a.createElement(se,null,a.a.createElement(me,null,e.a," ",e.type," ",e.b," = ",e.answer),a.a.createElement(me,null,parseInt(e.answer)===e.c?"DOBRZE":"\u0179LE"))}));return a.a.createElement(le,null,r,a.a.createElement(me,null,"Zdoby\u0142e\u015b: ",n.reward," punkt\xf3w"),a.a.createElement(fe,{name:"start",onClick:t},"Zako\u0144cz"))};function he(){var e=Object(h.a)(["\n  padding: 10px;\n  font-size: ",";\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return he=function(){return e},e}function pe(){var e=Object(h.a)(["\n  display: block;\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return pe=function(){return e},e}function ge(){var e=Object(h.a)(["\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  display: block;\n  padding: 10px 20px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  text-transform: uppercase;\n  border: none;\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(h.a)(["\n  font-size: ",";\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return be=function(){return e},e}function ze(){var e=Object(h.a)(["\n  margin-top: 10px;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* align-items: center; */\n  height: none;\n  max-width: ",";\n\n  @media (min-width: ",") {\n    justify-content: space-between;\n  }\n"]);return ze=function(){return e},e}function we(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  /* align-items: center; */\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  max-width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  height: 80vh;\n  font-weight: ",";\n  /* transform: translateY(50%); */\n"]);return we=function(){return e},e}var xe=p.c.div(we(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.bold})),ve=p.c.div(ze(),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.size.laptop})),ke=p.c.div(be(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileL}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.l})),Ee=p.c.button(ge(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),ye=p.c.button(pe(),(function(e){return e.theme.border}),(function(e){return e.theme.fontColor}),(function(e){return e.theme.fontSize.xxs}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.xs}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.s})),Se=p.c.div(he(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileM}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.size.mobileL}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.size.laptop}),(function(e){return e.theme.fontSize.l})),je=function(e){var n=e.state,t=e.changePanelFn,r=e.buyPrizesFn;return a.a.createElement(xe,null,a.a.createElement(ve,null,a.a.createElement(ke,null,"Aktualnie masz:"),a.a.createElement(ke,null,n.prize," minut gry"),a.a.createElement(ke,null,n.score," punkt\xf3w")),a.a.createElement("div",null,a.a.createElement(Se,null,"Punkty mo\u017cesz wymieni\u0107:"),a.a.createElement(ve,null,a.a.createElement(ke,null,"50 punkt\xf3w na: "),a.a.createElement(ye,{name:"50",onClick:r},"+30 minut gry")),a.a.createElement(ve,null,a.a.createElement(ke,null,"100 punkt\xf3w na: "),a.a.createElement(ye,{name:"100",onClick:r},"+60 minut gry")),a.a.createElement(ve,null,a.a.createElement(ke,null,"150 punkt\xf3w na: "),a.a.createElement(ye,{name:"150",onClick:r},"+100 minut gry")),a.a.createElement(ve,null,a.a.createElement(ke,null,"200 punkt\xf3w na: "),a.a.createElement(ye,{name:"200",onClick:r},"+150 minut gry")),""!==n.message?a.a.createElement(Se,null,n.message):null),a.a.createElement(Ee,{name:"start",onClick:t},"Zako\u0144cz"))};function Ce(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  width: 100%;\n  height: 50vh;\n  transform: translateY(50%);\n"]);return Ce=function(){return e},e}p.c.div(Ce());var Me=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).state={username:"",score:"",reward:"",allTaskDone:"",badTaskDone:"",goodTaskDone:"",password:"",rangeAddSub:"",rangeMulti:"",isKnowUser:!1,message:"",prize:"",questions:[],checkpassword:"",isAuthenticate:!1,panelActive:"start"},t.handleChange=function(e){e.preventDefault(),t.setState(Object(c.a)({},e.target.name,e.target.value))},t.handleChangeAnswerTask=function(e){e.preventDefault();var n=Object(u.a)(t.state.questions);n.forEach((function(n){n.id===parseInt(e.target.id)&&(n.answer=e.target.value)})),t.setState({questions:n})},t.handleButtonOK=function(e){e.preventDefault();var n=Object(u.a)(t.state.questions);n.forEach((function(n){n.id===parseInt(e.target.id)&&(n.active=!1)})),t.setState({questions:n})},t.handleCheckPassword=function(e){e.preventDefault(),t.state.checkpassword===t.state.password?t.setState({isAuthenticate:!0,message:""}):t.setState({message:"B\u0142\u0119dne has\u0142o"})},t.handleCreateQuestions=function(){for(var e=t.state,n=e.rangeAddSub,r=e.rangeMulti,a=[],i=0;i<10;i++){Math.floor(100*Math.random()+1)>50?Math.floor(100*Math.random()+1)>50?a.push(v(i,n)):a.push(k(i,n)):a.push(E(i,r))}t.setState({questions:a})},t.handleSaveData=function(e){e.preventDefault();var n=t.state,r=n.score,a=n.prize,i=n.username,o=n.password,u=n.rangeAddSub,c=n.rangeMulti;w.a.set("score",r,{expires:365}),w.a.set("prize",a,{expires:365}),w.a.set("username",i,{expires:365}),w.a.set("password",o,{expires:365}),w.a.set("rangeAddSub",u,{expires:365}),w.a.set("rangeMulti",c,{expires:365}),w.a.set("isKnowUser",!0,{expires:365}),t.setState({isKnowUser:!0})},t.handleBuyPrizes=function(e){e.preventDefault();var n,r=parseInt(e.target.name),a=t.state,i=a.score,o=a.prize,u=i,c=o;switch(r){case 50:i>=50?(u=i-50,c=o+30,n="Zdoby\u0142e\u015b 30 minut grania!"):n="Brak wystarczaj\u0105cej ilo\u015bci punkt\xf3w";break;case 100:i>=100?(u=i-100,c=o+60,n="Zdoby\u0142e\u015b 60 minut grania!"):n="Brak wystarczaj\u0105cej ilo\u015bci punkt\xf3w";break;case 150:i>=150?(u=i-150,c=o+100,n="Zdoby\u0142e\u015b 100 minut grania!"):n="Brak wystarczaj\u0105cej ilo\u015bci punkt\xf3w";break;case 200:i>=200?(u=i-200,c=o+150,n="Zdoby\u0142e\u015b 150 minut grania!"):n="Brak wystarczaj\u0105cej ilo\u015bci punkt\xf3w";break;default:n=""}t.setState({score:u,prize:c,message:n}),w.a.set("score",u,{expires:365}),w.a.set("prize",c,{expires:365})},t.handleShowResult=function(){var e=0,n=0,r=t.state,a=r.score,i=r.questions,o=r.allTaskDone,u=r.badTaskDone,c=r.goodTaskDone;i.forEach((function(t){parseInt(t.answer)===t.c?e++:n++}));var l=e-n,s=parseInt(a)+l;w.a.set("score",s,{expires:365}),w.a.set("allTaskDone",o+10,{expires:365}),w.a.set("badTaskDone",u+n,{expires:365}),w.a.set("goodTaskDone",c+e,{expires:365}),t.setState({reward:l,score:s,allTaskDone:o+10,badTaskDone:u+n,goodTaskDone:c+e,panelActive:"results"})},t.handleChangePanel=function(e){e.preventDefault(),"task"===e.target.name&&t.handleCreateQuestions(),t.setState({panelActive:e.target.name,message:""})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.state.isShowResult||"task"!==this.state.panelActive||0===Object(u.a)(this.state.questions).filter((function(e){return!0===e.active})).length&&this.handleShowResult()}},{key:"componentDidMount",value:function(){var e,n,t,r,a,i,o,u,c,l,s;e=w.a.get("username")?w.a.get("username"):"",n=w.a.get("score")?parseInt(w.a.get("score")):0,t=w.a.get("allTaskDone")?parseInt(w.a.get("allTaskDone")):0,r=w.a.get("badTaskDone")?parseInt(w.a.get("badTaskDone")):0,a=w.a.get("goodTaskDone")?parseInt(w.a.get("goodTaskDone")):0,i=w.a.get("password")?w.a.get("password"):"",o=w.a.get("rangeAddSub")?parseInt(w.a.get("rangeAddSub")):20,u=w.a.get("rangeMulti")?parseInt(w.a.get("rangeMulti")):3,c=w.a.get("reward")?parseInt(w.a.get("reward")):0,w.a.get("isKnowUser")?"true"===w.a.get("isKnowUser")&&(l=!0):l=!1,s=w.a.get("prize")?parseInt(w.a.get("prize")):0,this.setState({username:e,score:n,allTaskDone:t,badTaskDone:r,goodTaskDone:a,password:i,rangeAddSub:o,rangeMulti:u,reward:c,isKnowUser:l,prize:s})}},{key:"render",value:function(){var e=this.state,n=e.username,t=e.score,r=e.isKnowUser,i=e.panelActive,o=e.isAuthenticate,u=e.message;e.reward;return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(p.a,{theme:x},"start"===i?a.a.createElement(ae,{isKnowUser:r,username:n,score:t,changeFn:this.handleChange,saveDataFn:this.handleSaveData,changePanelFn:this.handleChangePanel,taskPanelShowFn:this.handleShowTaskPanel}):null,"parents"===i?a.a.createElement(A,{state:this.state,changeFn:this.handleChange,saveDataFn:this.handleSaveData,changePanelFn:this.handleChangePanel,checkPassowrdFn:this.handleCheckPassword,isAuthenticate:o,message:u}):null,"task"===i?a.a.createElement(J,{state:this.state,changeAnswerFn:this.handleChangeAnswerTask,buttonOkFn:this.handleButtonOK}):null,"results"===i?a.a.createElement(de,{state:this.state,changePanelFn:this.handleChangePanel}):null,"prizes"===i?a.a.createElement(je,{state:this.state,changePanelFn:this.handleChangePanel,buyPrizesFn:this.handleBuyPrizes}):null))}}]),n}(a.a.Component);o.a.render(a.a.createElement(Me,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9f3ded06.chunk.js.map