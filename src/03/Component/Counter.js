import { Component } from "react";

class Counter extends Component {
  state = {
    // constructor 메소드 선언하지 않고 state 초깃값 설정
    number: 0,
    number2: 10,
  };
  render() {
    const { number, number2 } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>{number2}</h1>
        <button
          className="addButton"
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            // 객체 대신 함수를 인자로 넣어 줌 -> ((prevState, props) => { return 와 같은 형태
            // prevState : 기존 상태
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            // 위 코드와 아래 코드는 똑같은 기능을 하는 코드이며
            // 아래 코드는 함수에서 바로 객체를 반환하는 코드임 (prevState => ({ })와 같은 형태)
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          1씩 증가하는 버튼
        </button>
        <button
          className="removeButton"
          onClick={() => {
            this.setState({ number2: number2 - 1 }); // this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꿈
          }}
        >
          1씩 감소하는 버튼
        </button>
      </div>
    );
  }
}

export default Counter;
