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
  const params = useParams(); // URL 인자들의 key/value짝들의 객체를 반환
  console.log(params);
  const profile = data[params.username];
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
