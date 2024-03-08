import React, { useState } from "react";
import { Coin, PageData } from "@/types/data";
import CryptoCard from "@/components/CryptoCard";
import PaginationButton from "@/components/shared/PaginationButton";
import SearchBar from "@/components/shared/SearchBar";
import { getCryptosData } from "@/services/apiService";

const CoinsList = async () => {
  const limit = "100";
  const cryptoData = await getCryptosData(limit);
  const { data } = cryptoData;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchCoin, setSearchCoin] = useState<string>("");
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSearch = () => {
    return data.coins.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchCoin) ||
        crypto.symbol.toLowerCase().includes(searchCoin)
    );
  };

  const coinsToDisplay = searchCoin ? handleSearch() : data.coins;
  return (
    <section className="container m-auto p-6">
      <SearchBar setSearchCoin={setSearchCoin} />
      <div className="grid sm:grid-cols-3 gap-4 lg:gap-x-16">
        {coinsToDisplay.slice(startIndex, endIndex).map((coin: Coin, key) => (
          <CryptoCard key={key} coin={coin} />
        ))}
      </div>
      <PaginationButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        endIndex={endIndex}
        data={data}
      />
    </section>
  );
};

export default CoinsList;
