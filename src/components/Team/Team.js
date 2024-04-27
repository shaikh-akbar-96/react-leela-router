import { useLocation, useNavigate } from "react-router-dom";

export default function Team(props) {
  const location = useLocation();
  //   const navigate = useNavigate();
  //   console.log(navigate);
  console.log(location);
  return (
    <div>
      <h2>This is Team</h2>
    </div>
  );
}
