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
            {coin.price && millify(Number(coin.price))}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Rank</h1>
          <span className="text-xl">{coin.rank}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Market Cap</h1>
          <span className="text-xl">
            {coin.marketCap && millify(Number(coin.marketCap))}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Total 24hrs Volume</h1>
          <span className="text-xl">{coin["24hVolume"] && millify(Number(coin["24hVolume"]))}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">All Time High</h1>
          <span className="text-xl">{coin.allTimeHigh.price && millify(Number(coin.allTimeHigh.price))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Fully diluted val</h1>
          <span className="text-xl">{coin.fullyDilutedMarketCap && millify(Number(coin.fullyDilutedMarketCap))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Total supply</h1>
          <span className="text-xl">{coin.supply.total && millify(Number(coin.supply.total))}</span>
        </div>
        <div className="flex justify-between py-3 border-b-2">
          <h1 className="text-xl">Circulating supply</h1>
          <span className="text-xl">{coin.supply.circulating && millify(Number(coin.supply.circulating))}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
