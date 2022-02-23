import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    // 에러가 발생하면 호출되는 메소드
    // this.state.error값을 true로 업데이트
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    // this.state.error 값이 true라면 에러가 발생했음을 알려주는 문구가 뜸
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}
export default ErrorBoundary;
