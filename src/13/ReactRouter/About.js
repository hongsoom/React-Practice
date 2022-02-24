// 웹 사이트를 소개 하는 컴포넌트
import { useLocation } from "react-router-dom";
import QueryString from "qs"; // 쿼리 스트링을 객체로 변환해주는 라이브러리

const About = () => {
  const location = useLocation();
  console.log(location);
  // QueryString.parse()의 첫번째 인자로는 변환할 쿼리스트링을 넣어주고
  // 두번째 인자는 ignoreQueryPrefix: true 라는 객체를 넣으면
  // 쿼리스트링 앞에 붙는 접두사 ?를 빼고 쿼리스트링을 객체로 변환해준다.
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
  });
  console.log(query);
  return (
    // 쿼리스트링만 가져오기 위해서는 location.search를 이용
    // location 값이 존재할 경우 <p>태그 안에 있는 쿼리 출력
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {location && <p>{location.search} 성공 ! </p>}
    </div>
  );
};
export default About;
