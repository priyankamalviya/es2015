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
