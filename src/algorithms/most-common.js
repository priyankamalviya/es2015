/* write a function to get the most common word in a string */

const mostCommonWords = str => {
  arr = str.split(' ');
  
  const wordMap = arr.reduce((obj, word) => {
    obj[word] = (obj[word] || 0)+1;
    
    return obj;
    }, {});
    const max = Math.max(...Object.values(wordMap));
    
    return Object.keys(wordMap).filter(item => wordMap[item] === max).shift();
  
}

console.log(mostCommonWords('She is such a powerful she woman and woman she'));
