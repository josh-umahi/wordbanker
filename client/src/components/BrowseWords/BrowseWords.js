import React from 'react'

import "./styles.css"

const BrowseWords = () => {
  return (
    <div className="browseWordsContainer">
      <div className="browseWordsInnerContainer">
        <h2>Browse English Words</h2>
        <div className="alphabetButtonsContainer">
          <button className="enabledAlphabet">A</button>
          <button className="enabledAlphabet">B</button>
          <button className="enabledAlphabet">C</button>
          <button className="disabledAlphabet">D</button>
          <button className="enabledAlphabet">E</button>
          <button className="enabledAlphabet">F</button>
          <button className="disabledAlphabet">G</button>
          <button className="enabledAlphabet">H</button>
          <button className="enabledAlphabet">I</button>
          <button className="enabledAlphabet">A</button>
          <button className="enabledAlphabet">B</button>
          <button className="enabledAlphabet">C</button>
          <button className="disabledAlphabet">D</button>
          <button className="enabledAlphabet">E</button>
          <button className="enabledAlphabet">F</button>
          <button className="disabledAlphabet">G</button>
          <button className="enabledAlphabet">H</button>
          <button className="enabledAlphabet">I</button>
        </div>
      </div>
    </div>
  )
}

export default BrowseWords