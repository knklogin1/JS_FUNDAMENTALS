function wordFreqReduce(str) {
    const words = str.split(/\s+/);   //The regular expression /\s+/ is used to split the sentence by one or more whitespace characters.
    console.log(words)
    const freq = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
    return freq;
}

const str = "geeks for geeks is for geeks";
console.log(wordFreqReduce(str));


//=========================================================================================


const sentence = "apple orange apple banana apple orange";
const words = sentence.split(" ");
const acc = {};  // Accumulator object to hold word counts

words.forEach(word => {
  acc[word] = (acc[word] || 0) + 1;  // Increment the word count
});

console.log(acc);
