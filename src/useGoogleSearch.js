import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "f0145a3b233f30cbb";

const useGoogleSearch = (input) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${input}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [input]);

  return { data };
};

export default useGoogleSearch;
