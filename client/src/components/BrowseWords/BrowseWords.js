import React from 'react'

import "./styles.css"
import { usePostsListedContext } from '../../context/PostsListedContext'

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const BrowseWords = () => {
  const { handleSetSearch } = usePostsListedContext()

  // TODO: Clicking same button twice should remove the search term
  // TODO: On each search page, use useQuery to check what letter we're looking at and give it classname clickedLetter
  const handleClick = (value) => {
    handleSetSearch(value)
  }

  const AlphabetButtons = () => {
    return alphabets.map(alphabet => (
      <button key={alphabet} className="enabledAlphabet" onClick={() => handleClick(alphabet)}>
        {alphabet}
      </button>
    ))
  }

  return (
    <div className="browseWordsContainer">
      <div className="browseWordsInnerContainer">
        <h2>Browse English Words</h2>
        <div className="alphabetButtonsContainer">
          <AlphabetButtons />
        </div>
      </div>
    </div>
  )
}

export default BrowseWords