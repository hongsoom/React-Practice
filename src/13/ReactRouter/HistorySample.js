import { useNavigate } from "react-router-dom";

function HistorySample() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
}
export default HistorySample;
