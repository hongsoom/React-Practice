import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  // path에 부모 경로까지 적을 필요 없이 파라미터만 적어줘도 괜찮다
  // 하위 페이지가 있다면 부모 Route에 /*을 추가해줘야 한다
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/sumin">sumin 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/seungmin">seungmin 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/*" element={<div>사용자를 선택해 주세요</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default Profiles;
