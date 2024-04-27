import { useLocation } from "react-router-dom";
import Team from "../Team/Team";

export default function Home(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>This is Home </h2>
      <Team />
    </div>
  );
}
