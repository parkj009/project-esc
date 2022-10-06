import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      // For fetching json data from an external source
      // fetch("http://localhost:3000/rooms")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);

  return { data, error };
}

export default useFetch;
