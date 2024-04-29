import { useLocation, useNavigate, useParams } from "react-router-dom";

function Posts(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate(`/`);
  };

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <div className="mt-4">{id}</div>

      <div>
        <ul>
          <button
            onClick={() => handlePostClick(1)}
            className="border shadow border-red-500 mr-3"
          >
            Post 1
          </button>
          <button
            onClick={() => handlePostClick(2)}
            className="border shadow border-red-500 mr-3"
          >
            Post 2
          </button>
          <button
            onClick={() => handlePostClick(3)}
            className="border shadow border-red-500 "
          >
            Post 3
          </button>
        </ul>
      </div>
      <div className="my-4">
        <button
          className="bg-red-200 text-whie px-1 py-1"
          onClick={backToHomeHandler}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default Posts;
