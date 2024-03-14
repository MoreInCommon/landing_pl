"use client";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <ReactPaginate
      className="text-brand-darkBlue flex gap-4 relative"
      activeClassName="text-white bg-brand-blue rounded-full font-bold"
      breakLabel="..."
      nextLabel=">"
      pageClassName="w-8 h-8 flex items-center justify-center rounded-full"
      pageLinkClassName="relative top-[2px] text-[18px]"
      previousClassName="self-center relative top-[2px]"
      nextClassName="self-center relative top-[2px]"
      onPageChange={() => console.log("onPageChange")}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
