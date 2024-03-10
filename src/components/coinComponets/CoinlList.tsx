"use client";
import React, { useState } from "react";
import SearchBar from "../shared/SearchBar";
import PaginationButton from "../shared/PaginationButton";
import CryptoCard from "../CryptoCard";
import { Coin, CryptoData } from "@/types/data";

const Coinlist = ({ data }: CryptoData) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchCoin, setSearchCoin] = useState<string>("");
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSearch = () => {
    return data.coins.filter(
      (crypto: Coin) =>
        crypto.name.toLowerCase().includes(searchCoin) ||
        crypto.symbol.toLowerCase().includes(searchCoin)
    );
  };

  const coinsToDisplay = searchCoin ? handleSearch() : data.coins;
  return (
    <>
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
    </>
  );
};

export default Coinlist;
