import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="profiles/sumin">sumin 프로필</Link>
        </li>
        <li>
          <Link to="profiles/seungmin">seungmin 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/profiles/*" element={<div>사용자를 선택해 주세요</div>} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default Profiles;
