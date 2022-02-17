import { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e.target.value); // 값이 바뀔때마다 바뀌는 값(e.target.value)을 콘솔에 기록
            // e.target.value 값을 통해 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있음.
          }}
        ></input>
      </div>
    );
  }
}

export default EventPractice;
