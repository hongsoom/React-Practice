import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  ); // MyComponent name,favoriteNumbe의 props 값을 지정,  컴포넌트 태그 사이 문자열(리액트)을 MyComponent 내부에 보여줌
};

export default App;
