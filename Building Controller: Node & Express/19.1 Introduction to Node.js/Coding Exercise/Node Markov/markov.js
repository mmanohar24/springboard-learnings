/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1] || null;

      if (!chains.has(word)) {
        chains.set(word, [])
      }
      chains.get(word).push(nextWord);
    }

    this.chains = chains;
  }

  static choice(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
  }


  /** return random text from chains */

  makeText(numWords = 100) {

    const startWords = [...this.chains.keys()];
    let word = MarkovMachine.choice(startWords);
    const output = [];

    while (output.length < numWords && word !== null) {
      output.push(word);
      word = MarkovMachine.choice(this.chains.get(word))
    }

    return output.join(" ")
  }
}


// const mm = new MarkovMachine("the cat in the hat");
// console.log(mm.chains);

module.exports = MarkovMachine;
