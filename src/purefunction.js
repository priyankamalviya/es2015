// This function is written to demo an example of pure functions. 
// Enter any string and it returns position of each alphabet in the string.
// A pure function is a function which: 
// i) Given the same input, will always return the same output. ii) Produces no side effects.



function splitWords(text) {
  return text.split(/[\s.,\/:\n]+/);
}

function tallyUp(words) {
  return words
    .map(function(str) {
      return str.toLowerCase();
    })
    .reduce(function(tally, word) {
      tally[word] = (tally[word] || 0) + 1;
      return tally;
    }, {});
}

function getTop10(tally) {
  return Object.keys(tally)
    .map(function(word) {
      return { word: word, count: tally[word] };
    }).sort(function(one, other) {
      return other.count - one.count;
    }).slice(0, 10);
}
