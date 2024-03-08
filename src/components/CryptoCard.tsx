import React from "react";
import Image from "next/image";
import millify from "millify"; 
import Data from "@/types/data";
import Link from "next/link";

interface Props {
  coin: Data.Coin;
}

const CryptoCard = ({ coin }: Props) => {
  const profit = Number(coin.change) >= 0
  const marketCap = Number(coin.marketCap)
  const price = Number(coin.price)
  return (
    <Link href={`coin/${coin.uuid}`}>
    <div className="coin-card max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="coin-card-header flex justify-between pb-4 border-b-2">
        <div className="flex gap-3 text-2xl">
          <h1>{coin.rank}.</h1>
          <h1>{coin.symbol}</h1>
        </div>
        <Image src={coin.iconUrl} alt={coin.name} width={30} height={30} />
      </div>
      <div className="coin-card-info">
        <div className="flex gap-3 my-3 items-center">
          <h1 className="text-xl">Name:</h1>
          <h1>{coin.name}</h1>
        </div>
        <div className="flex gap-3 mb-3 items-center">
          <h1 className="text-xl">Price:</h1>
          <h1>{coin.price && millify(price)}</h1>
        </div>
        <div className="flex gap-3 mb-3 items-center">
          <h1 className="text-xl">Market Cap:</h1>
          <h1>{coin.marketCap && millify(marketCap)}</h1>
        </div>
        <div className="flex gap-3 mb-3 items-center">
          <h1 className="text-xl">Daily Change:</h1>
          <h1 style={{ color: profit === true ? "rgb(14, 203, 129)" : "red" }}>{profit && "+"} {coin.change}%</h1>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CryptoCard;
