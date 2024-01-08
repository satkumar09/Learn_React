//custom hook to return the required data from the api

import { useEffect, useState } from "react";

//Api structure:
//For key value: usd:

// {
//   "date": "2023-12-29",
//   "usd": {
//       "00": 11.82814524,
//       "1000sats": 1276.63968496,
//       "1inch": 2.41235931,
//       "aave": 0.0088901625,
//       "abt": 5.2579899,
//       "ach": 45.87475595,
//       "acs": 299.12204217,
//       "ada": 1.64441312,
//       "aed": 3.6725,
//       "aergo": 6.5967657,
//       "afn": 70.10304642,
//       "agix": 3.14958371
//     continues...............
//   }
// }

//handling Api call
function useCurrencyInfo(currency) {
  //to hold the data coming from the api we use a useState. we set the default value to empty object so that even if we don't fetch anything the code doesn't crash
  const [data, setData] = useState({});

  useEffect(() => {
    //here key value = currency
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) //data converted from string to json
      .then((res) => setData(res[currency])) //finally set the data 
  }, [currency]); //change in currency will trigger the function to fetch data for that resp currency
  console.log(data);
  return data;
}

export default useCurrencyInfo;
