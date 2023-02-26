import React from "react";
import Data, { Coin } from "@/types/data";
import CryptoCard from "./shared/CryptoCard";

interface Props {
  cryptoData: Data.CryptoData;
}

const Crypto = ({ cryptoData }: Props) => {
  const { data } = cryptoData;
  return (
    <div className="grid sm:grid-cols-3 gap-4 lg:gap-x-16">
      {data.coins.map((coin: Coin, key) => (
        <CryptoCard key={key} coin={coin} />
      ))}
    </div>
  );
};

export default Crypto;
