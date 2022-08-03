import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  //시작버튼
  const togglePlay = () => {
    navigate("/Ready");
  };

  return (
    <button onClick={togglePlay} className="circle-btn">
      시작
    </button>
  );
};

export default Start;
