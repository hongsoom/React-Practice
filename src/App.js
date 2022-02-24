import { render } from "@testing-library/react";
import { Component } from "react";
import Counter from "./03/Component/Counter";
import Say from "./03/Component/say";
import EventPractice from "./04/EventPractice";
import EventPractice2 from "./04/EventPractice2";
import FuctionEventPractice from "./04/Function_EventPractice";
import LifeCycleSample from "./07/LifeCycle/LifeCycleSample";
import ErrorBoundary from "./07/LifeCycle/ErrorBoundary";
import { Route, Routes, Link } from "react-router-dom";
import About from "./13/ReactRouter/About";
import Home from "./13/ReactRouter/Home";

const App = () => {
  // return <Counter />;
  // return <Say />;
  //return <EventPractice />;
  //return <EventPractice2 />;
  // return <FuctionEventPractice />;
  return (
    // exact가 true이면 지정된 경로와 정확히 일치하는 경우에만 컴포넌트를 보여줌
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={Home()} exact={true} />
        <Route path="/about" element={About()} />
      </Routes>
    </div>
  );
};

//function getRandomColor() {
// state의 color 값을 랜덤 색상으로 설정
// return "#" + Math.floor(Math.random() * 16777215).toString(16);
//}

//class App extends Component {
//state = {
// color: "#000000",
//};

//handleClick = () => {
//  this.setState({
//    color: getRandomColor(),
//  });
//};

//render() {
// 버튼을 렌더링하고, 누를 때마다 handleClick 메소드 호출
// LifeCycleSample 컴포넌트에 color 값을 props로 설정
// ErrorBoundarY가 LifeCycleSample를 감싸줌
// return (
//  <div>
//   <button onClick={this.handleClick}>랜덤 색상</button>
//   <ErrorBoundary>
//    <LifeCycleSample color={this.state.color} />
//   </ErrorBoundary>
// </div>
// );
// }
//}

export default App;
