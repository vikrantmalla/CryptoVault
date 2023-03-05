import React, { useState } from "react";
import { Coin, PageData } from "@/types/data";
import CryptoCard from "@/components/CryptoCard";
import PaginationButton from "@/components/shared/PaginationButton";

const CoinsList = ({ cryptoData }: PageData.IndexPageData) => {
  const { data } = cryptoData;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section className="container m-auto p-6">
      <div className="grid sm:grid-cols-3 gap-4 lg:gap-x-16">
        {data.coins.slice(startIndex, endIndex).map((coin: Coin, key) => (
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

export const getServerSideProps = async () => {
  const referenceCurrencyUuid = "yhjMzLPhuIDl";
  const limit = "100";
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
  return {
    props: {
      cryptoData,
    },
  };
};
