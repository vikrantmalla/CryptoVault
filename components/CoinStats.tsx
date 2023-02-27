import React from "react";
import Data from "@/types/data";
import millify from "millify";

interface Props {
  data: Data.Coins;
}

const CoinStats = ({ data }: Props) => {
  const { coin } = data;
  return (
    <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 lg:gap-x-16 mt-10">
      <div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Price</h1>
          <span className="text-xl">
            {data.coin.price && millify(Number(data.coin.price))}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Rank</h1>
          <span className="text-xl">{data.coin.rank}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Market Cap</h1>
          <span className="text-xl">
            {data.coin.marketCap && millify(Number(data.coin.marketCap))}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Total 24hrs Volume</h1>
          <span className="text-xl">{data.coin["24hVolume"] && millify(Number(data.coin["24hVolume"]))}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">All Time High</h1>
          <span className="text-xl">{data.coin.allTimeHigh.price && millify(Number(data.coin.allTimeHigh.price))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Fully diluted val</h1>
          <span className="text-xl">{data.coin.fullyDilutedMarketCap && millify(Number(data.coin.fullyDilutedMarketCap))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Total supply</h1>
          <span className="text-xl">{data.coin.supply.total && millify(Number(data.coin.supply.total))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Circulating supply</h1>
          <span className="text-xl">{data.coin.supply.circulating && millify(Number(data.coin.supply.circulating))}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
