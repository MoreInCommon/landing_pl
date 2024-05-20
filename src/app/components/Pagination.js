"use client";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <ReactPaginate
      className="text-brand-darkBlue flex gap-4 relative"
      activeClassName="text-white bg-brand-blue rounded-full font-bold"
      breakLabel="..."
      nextLabel=">"
      breakClassName="self-center relative top-[-2px]"
      pageClassName="w-8 h-8 flex items-center justify-center rounded-full"
      pageLinkClassName="relative top-[2px] text-[18px]"
      previousClassName="self-center relative top-[2px]"
      nextClassName="self-center relative top-[2px]"
      onPageChange={({ selected }) => setCurrentPage(selected)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
