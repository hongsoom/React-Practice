import PropTypes from "prop-types"; // PropTypes를 사용하기 위해 불러옴

const MyComponent = ({ name, favoriteNumber, children }) => {
  // 비구조화 할당 (객체에서 값을 추출하는)
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div> // name,favoriteNumber이라는 props를 렌더링하도록 설정하고 태그 사이에 내용을 보여주는 children
  );
};

MyComponent.defaultProps = {
  // props 기본값 설정
  name: "기본 이름",
};

MyComponent.propTypes = {
  // 필수 props를 지정하거나 props의 타입을 지정할때 사용
  name: PropTypes.string, // props의 타입 string
  favoriteNumber: PropTypes.number.isRequired, // propTypes를 지정하지 않았을 때, 필수 props의 타입이 다른 경우 경고 메시지를 띄워 줌
};

// 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정
export default MyComponent;
