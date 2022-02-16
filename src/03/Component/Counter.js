import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // 컴포넌트 생성자 메서드
    super(props); // 부모 클래스 생성자의 참조 (생성자 내부에서도 this.props를 정상적으로 사용하기 위해)
    this.state = {
      // state의 초깃값 설정하기
      number: 0,
      number2: 10,
    };
  }
  render() {
    const { number, number2 } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>{number2}</h1>
        <button
          className="addButton"
          onClick={() => {
            // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
            this.setState({ number: number + 1 }); // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
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
