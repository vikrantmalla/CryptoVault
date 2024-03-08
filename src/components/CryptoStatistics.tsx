import React from "react";
import millify from "millify"; 
import Data from "@/types/data";

interface Props {
  cryptoData: Data.CryptoData;
}

const CryptoStatistics = ({ cryptoData }: Props) => {
  const { data } = cryptoData;

  const totalMarketCap = Number(data.stats?.totalMarketCap)
  const total24hVolume = Number(data.stats?.total24hVolume)
  return (
    <div>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 lg:gap-x-16">
        <div className="flex justify-between pb-3 border-b-2">
          <h1 className="text-xl">Cryptocurrencies</h1>
          <span className="text-xl">{data.stats?.totalCoins}</span>
        </div>
        <div className="flex justify-between pb-3 border-b-2">
          <h1 className="text-xl">Crypto Market Cap</h1>
          <span className="text-xl">{data.stats?.totalMarketCap && millify(totalMarketCap)}</span>
        </div>
        <div className="flex justify-between pb-3 border-b-2">
          <h1 className="text-xl">24hr Volume</h1>
          <span className="text-xl">{data.stats?.total24hVolume && millify(total24hVolume)}</span>
        </div>
        <div className="flex justify-between pb-3 border-b-2">
          <h1 className="text-xl">Markets</h1>
          <span className="text-xl">{data.stats?.totalMarkets}</span>
        </div>
        <div className="flex justify-between pb-3 border-b-2">
          <h1 className="text-xl">Exchanges</h1>
          <span className="text-xl">{data.stats?.totalExchanges}</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoStatistics;
