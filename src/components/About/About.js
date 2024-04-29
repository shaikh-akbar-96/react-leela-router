import { Suspense, lazy, useState } from "react";
const LazyLoad = lazy(() => import("../LayzyLoad/LazyLoad.js"));

export default function About(props) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleHandler = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <h2>This is About </h2>
      <div>
        <button
          className="bg-red-300 text-white px-2 py-1"
          onClick={toggleHandler}
        >
          Toggle Button
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading && (
          <div>
            <LazyLoad />
          </div>
        )}
      </Suspense>
    </div>
  );
}
