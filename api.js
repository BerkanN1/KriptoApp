export const fetchData = () =>{
    return fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      method : "GET",
      headers : {"X-CMC_PRO_API_KEY" : "8843f0f3-be77-4e31-8542-51388c0b5961",
      },
     },
    );
  };