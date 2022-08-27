import React from "react";
import usePagination, { UsePaginationItem } from "@mui/material/usePagination/";

import "./styles.css";
import { usePostsListedContext } from "../../context/PostsListedContext";

type PaginatorProps = {
  scrollToBrowseWords: () => void;
};

const Paginator: React.FC<PaginatorProps> = ({ scrollToBrowseWords }) => {
  const { page, handleSetPage, numberOfPages, search, isLoading } =
    usePostsListedContext()!;
  const pageAsNumber = Number(page);
  const { items } = usePagination({ count: numberOfPages, page: pageAsNumber });

  const handleClick = (buttonItem: UsePaginationItem) => {
    handleSetPage(buttonItem.page!);
    scrollToBrowseWords();
  };

  const backButtonItem = items[0];
  const nextButtonItem = items[items.length - 1];

  if (isLoading) {
    backButtonItem.disabled = true;
    nextButtonItem.disabled = true;
  }

  if (!search) {
    return (
      <div className="paginatorDiv">
        {/* @ts-ignore */}
        <button {...backButtonItem} onClick={() => handleClick(backButtonItem)}>
          &lt; BACK
        </button>
        <div className="paginatorDivMainContainer">
          <h4>Page:</h4>
          <div className="pageNumber">
            <h4>{pageAsNumber}</h4>
          </div>
          <h4>of &hellip;</h4>
        </div>
        {/* @ts-ignore */}
        <button {...nextButtonItem} onClick={() => handleClick(nextButtonItem)}>
          NEXT &gt;
        </button>
      </div>
    );
  }

  return null;
};

export default Paginator;
