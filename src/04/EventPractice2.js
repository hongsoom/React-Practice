import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "", // 초깃값 설정
  };

  handleChange = (e) => {
    // 객체 안에서 Key를 []로 감싸면 실제 값이 key 값으로 사용된다.
    // 예를 들면 const name = 'key';
    //          const obj = { [name] : 'value' };
    //     결과 : 'key' : 'value'
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
