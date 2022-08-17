import React from "react";

import "./styles.css";
import { usePostsListedContext } from "../../context/PostsListedContext";
import alphabets from "../../constants/alphabets";

type BrowseWordsProps = {
  refToBrowseWords: React.RefObject<HTMLDivElement>;
};
const BrowseWords: React.FC<BrowseWordsProps> = ({ refToBrowseWords }) => {
  const { handleSetSearch, search, isLoading } = usePostsListedContext()!;

  const handleClick = (value: string) => {
    if (value === search) {
      handleSetSearch(null);
    } else {
      handleSetSearch(value);
    }
  };

  const AlphabetButtons = () =>
    alphabets.map((alphabet) => {
      const classname =
        alphabet === search
          ? "enabledAlphabet clickedAlphabet"
          : "enabledAlphabet";

      return (
        <button
          key={alphabet}
          disabled={isLoading}
          className={classname}
          onClick={() => handleClick(alphabet)}
        >
          {alphabet}
        </button>
      );
    });

  return (
    <div className="browseWordsContainer">
      <div className="browseWordsInnerContainer" ref={refToBrowseWords}>
        <h2>Browse English Words</h2>
        <div className="alphabetButtonsContainer">{AlphabetButtons()}</div>
      </div>
    </div>
  );
};

export default BrowseWords;
