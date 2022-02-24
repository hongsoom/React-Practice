import { useParams } from "react-router-dom";

const data = {
  sumin: {
    name: "홍수민",
    description: "student",
  },
  seungmin: {
    name: "백승민",
    description: "teacher",
  },
};

//
const Profile = () => {
  const params = useParams(); // parameter를 받아와서 변수 params에 넣음
  // console.log(params);
  const profile = data[params.username]; // 배열 data의 sumin, seungmin 값을 profile에 넣음
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h1>사용자 프로필</h1>
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
    </div>
  );
};
export default Profile;
