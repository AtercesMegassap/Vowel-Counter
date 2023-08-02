const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const vowelCounter = (sentence) => {
  //Removes non-alphanumeric characters and converts to lowercase."
  const clearSentence = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
  //I break the sentence into an array to analyze letter by letter.
  const arrayLetters = clearSentence.split('');
  
  let vowelCount = 0;
  arrayLetters.forEach(letter => {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowelCount++;
    }
  });
  return vowelCount;
}

app.get('/Vowel', (req, res) => {
  const {sentence} = req.body;

  if (typeof sentence !== "string") return res.json("Please enter a sentence.");

  const numberVowels = vowelCounter(sentence);

  return res.json(`The number of vowels is ${numberVowels}.`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});