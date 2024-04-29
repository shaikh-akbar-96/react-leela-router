import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePostList(props) {
  const { id } = useParams();

  const [postName, setPostName] = useState("");
  const prevIdRef = useRef(null);
  console.log(prevIdRef);
  const getId = () => {
    let postName = "";
    switch (id) {
      case "1":
        postName = "Post 1 Details";
        break;

      case "2":
        postName = "Post 2 Details";
        break;
      default:
        postName = "Post 3 Details";
    }
    setPostName(postName);
    console.log(postName);
  };

  useEffect(() => {
    getId();
  }, []);
  return (
    <div>
      <div>{id}</div>
      <h2>post-name: {postName}</h2>
    </div>
  );
}

export default SinglePostList;
