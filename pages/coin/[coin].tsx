import React from "react";
import { PageData } from "@/types/data";

const SingleCoin = ({ crypto }: PageData.SlugPageData) => {
  console.log(crypto)
  return <div>coin {crypto.data.coin.uuid}</div>;
};

export default SingleCoin;

export const getStaticProps = async (context: any) => {
  const { coin } = context.params as { coin: string }
  const cryptoCoin = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${coin}`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`,
      },
    }
  );
  const crypto = await cryptoCoin.json();
  return {
    props: { crypto },
  };
};

export const getStaticPaths = async () => {
    const referenceCurrencyUuid = 'yhjMzLPhuIDl';
    const limit = '10';
    const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=${referenceCurrencyUuid}&limit=${limit}`,
        {
          headers: {
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
            "x-rapidapi-host": `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`,
          },
        }
      );
      const cryptoData = await response.json();
      const paths = cryptoData.data.coins.map((single: { uuid: string; }) => {
        return {
          params: { coin: single.uuid },
        };
      });
      return {
        paths,
        fallback: false,
      };
  };
