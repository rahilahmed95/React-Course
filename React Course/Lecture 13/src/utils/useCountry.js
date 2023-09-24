import { useEffect, useState } from "react";

const useCountry = (capital) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      const data = await response.json();
      setCountry(data);
    } catch (err) {
      console.log("Error Occured While Fetching Api");
      console.log(err);
    }
  }

  return country;
};

export default useCountry;
