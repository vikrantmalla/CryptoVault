import React from "react";
import Data from "@/types/data";


interface Props {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    endIndex: number
    data:  Data.Datas
}

const PaginationButton = ({currentPage, setCurrentPage, endIndex, data}: Props) => {
  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className="flex justify-center items-center mt-6 gap-4">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
      <p>{currentPage} of 7</p>
      <button
        onClick={handleNextClick}
        disabled={endIndex >= data.coins.length}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
