import { useEffect, useState } from "react";

const useViewport = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return height;
};

export default useViewport;
