import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아 온 color 값을 state에 동기화
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; // 숫자의 마지막 자리가 4(4,14,24,34...)면 리렌더링하지 않는다.
  }

  componentWillUnmount() {
    // 컴포넌트를 DOM에서 제거할 때 실행
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // getSnapshotBeforeUpdate에서 반환된 값을 조회할 수 있음
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
