/* 
    Parameters: 
    - currentPostId, a post id that may or may not be in the originalArray
    - originalArray, an array of post ids
    - n, max-length of returned array
    Returns: an array of n elements

    Algorithm:
    - Creates new array by filtering out currentPostId from originalArray
    - Shuffles this array using the fisher-yates algoritm
    - returns first n elements
*/
const getShuffledArray = (currentPostId, originalArray, n) => {
    const newArray = originalArray.filter(postId => postId !== currentPostId);

    for (var i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }

    return newArray.slice(0, n)
}

export default getShuffledArray