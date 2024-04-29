import { useParams } from "react-router-dom";

function SinglePostList(props) {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
      <h2>This is single post</h2>
    </div>
  );
}

export default SinglePostList;
