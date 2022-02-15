const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name} 입니다. <br />
      children 값은 {props.children} 입니다.
    </div> // name이라는 props를 렌더링하도록 설정하고 태그 사이에 내용을 보여주는 children
  );
};

MyComponent.defaultProps = {
  // props 기본값 설정
  name: "기본 이름",
};

// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default MyComponent;
