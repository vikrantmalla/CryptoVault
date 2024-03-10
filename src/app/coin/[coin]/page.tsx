import React from "react";
import Image from "next/image";
import { PageData } from "@/types/data";
import CoinStats from "@/components/CoinStats";

export default async function Page({ params }: { params: { coin: string } }) {
  // todo: add api call fuction in a service module
  const cryptoCoin = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${params.coin}`,
    {
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`,
      },
    }
  );
  const crypto = await cryptoCoin.json();
  const { data } = crypto;
  console.log(crypto);
  console.log(data)
  return (
    <div className="container m-auto p-6">
      <div className="coin-details-header flex flex-col justify-start items-start gap-3 border-b-2 pb-4">
        <div className="flex items-center gap-3">
          <Image
            src={data.coin.iconUrl}
            alt={data.coin.name}
            width={30}
            height={30}
          />
          <h1 className="text-2xl">
            {data.coin.name} <span>({data.coin.symbol})</span>
          </h1>
        </div>
        <div className="coin-desc text-start pl-3">
          <p>{data.coin.description}</p>
        </div>
      </div>
      <div className="mt-10 text-2xl">
        <h1 className="text-center">{data.coin.name} Value Statistics</h1>
        <CoinStats data={data}/>
      </div>
    </div>
  );
}
