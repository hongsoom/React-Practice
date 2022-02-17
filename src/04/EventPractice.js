import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "", // 초깃값 설정
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value, // setState를 이용하여 state 값 업데이트
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message); // 입력한 값 메시지 박스로 띄움
            this.setState({
              message: "", // 공백
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
