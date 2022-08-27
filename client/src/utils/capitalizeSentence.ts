// * Decided to use "capitalize sentences" for words because some of the words may be phrases seperated by whitespace
const capitalizeSentence = (sentence: string) => {
  const newSentence = sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return newSentence;
};

export default capitalizeSentence;
