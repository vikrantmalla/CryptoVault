import React from "react";
import { getCryptosData } from "@/services/apiService";
import CoinList from "@/components/coinComponets/CoinlList";

const Coins = async () => {
  const limit = "100";
  const cryptoData = await getCryptosData(limit);
  const { data } = cryptoData;
  return (
    <CoinList data={data}/>
  );
};

export default Coins;
