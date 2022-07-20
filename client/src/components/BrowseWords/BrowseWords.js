import React from 'react'

import "./styles.css"
import { usePostsListedContext } from '../../context/PostsListedContext'

const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const BrowseWords = ({ refToBrowseWords }) => {
  const { handleSetSearch, searchQuery } = usePostsListedContext()

  const handleClick = (value) => {
    if (value === searchQuery) {
      handleSetSearch(null)
    } else {
      handleSetSearch(value)
    }
  }

  const AlphabetButtons = () => (
    alphabets.map(alphabet => {
      const classname = alphabet === searchQuery ? "enabledAlphabet clickedAlphabet" : "enabledAlphabet";

      return (
        <button key={alphabet} className={classname} onClick={() => handleClick(alphabet)}>
          {alphabet}
        </button>
      )
    })
  )

  return (
    <div className="browseWordsContainer">
      <div className="browseWordsInnerContainer" ref={refToBrowseWords}>
        <h2>Browse English Words</h2>
        <div className="alphabetButtonsContainer">
          <AlphabetButtons />
        </div>
      </div>
    </div>
  )
}

export default BrowseWords