import { CryptoData } from "@/types/data";

export async function getCryptosData(limit: string) {
  const referenceCurrencyUuid = "yhjMzLPhuIDl";
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=${referenceCurrencyUuid}&limit=${limit}`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`,
      },
    }
  );
  const cryptoData: CryptoData = await response.json();
  return cryptoData;
}

export function getSingleCoinData(cryptoData: CryptoData) {
    const paths = cryptoData.data.coins.map((single) => {
      return {
        params: { coin: single.uuid },
      };
    });
    return paths;
  }